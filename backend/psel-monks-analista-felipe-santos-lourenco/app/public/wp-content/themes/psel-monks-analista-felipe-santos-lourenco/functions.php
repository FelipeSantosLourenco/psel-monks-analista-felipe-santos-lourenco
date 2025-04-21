<?php
function psel_enqueue_scripts() {
    
}
add_action('wp_enqueue_scripts', 'psel_enqueue_scripts');

function create_submission_cpt() {
    $labels = [
        'name' => 'Submissões',
        'singular_name' => 'Submissão',
        'add_new' => 'Adicionar Nova',
        'add_new_item' => 'Adicionar Nova Submissão',
        'edit_item' => 'Editar Submissão',
        'new_item' => 'Nova Submissão',
        'view_item' => 'Ver Submissão',
        'search_items' => 'Buscar Submissões',
        'not_found' => 'Nenhuma submissão encontrada',
        'not_found_in_trash' => 'Nenhuma submissão na lixeira'
    ];

    register_post_type('submission', [
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_position' => 20,
        'menu_icon' => 'dashicons-media-document',
        'show_in_menu' => true,
        'supports' => ['title', 'editor', 'custom-fields'],
        'show_in_rest' => true,
        'rest_base' => 'submission',
        'capability_type' => 'post',
    ]);
}
add_action('init', 'create_submission_cpt');

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/submit-form', [
        'methods' => 'POST',
        'callback' => 'handle_custom_form_submission',
        'permission_callback' => '__return_true', // Sem autenticação
    ]);
});

function handle_custom_form_submission($request) {
    $params = $request->get_json_params();

    $post_id = wp_insert_post([
        'post_type'   => 'submission',
        'post_title'  => sanitize_text_field($params['title'] ?? 'Form Submission'),
        'post_content'=> wp_json_encode($params['content'] ?? []),
        'post_status' => 'publish'
    ]);

    if (is_wp_error($post_id)) {
        return new WP_Error('submission_failed', 'Não foi possível salvar a submissão.', ['status' => 500]);
    }

    if (!empty($params['meta']) && is_array($params['meta'])) {
        foreach ($params['meta'] as $key => $value) {
            update_post_meta($post_id, sanitize_key($key), sanitize_text_field($value));
        }
    }

    return new WP_REST_Response(['success' => true, 'post_id' => $post_id], 200);
}
