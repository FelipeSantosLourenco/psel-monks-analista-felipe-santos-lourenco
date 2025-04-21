# Psel Monks Analista - Felipe Santos Lourenço

## Descrição

Case challenge do Processo Seletivo Monks. Página feita com React e backend em WordPress.

## Tecnologias Utilizadas

### Frontend
- React
- Axios 
- Vite 

### Backend
- WordPress
- PHP
- Custom Post Type (CPT)
- REST API personalizada
- Composer (para dependências PHP)

## Instalação

### Requisitos
- PHP
- Composer
- WordPress
- Node

### Backend (WordPress)

1. Acesse a pasta do backend:
```bash
cd backend/psel-monks-analista-felipe-santos-lourenco
```

2. Instale as dependências com Composer:
```bash
composer install
```

3. Certifique-se de que o WordPress esteja rodando localmente.

4. O plugin personalizado deve registrar um CPT chamado `submission` e uma rota de API para salvar os dados do formulário.

### Frontend (React)

1. Acesse a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npm run dev
```

4. O projeto estará disponível em `http://localhost:3000` (ou conforme configuração).

## Funcionamento do formulário

- Antes de enviar, uma operação matemática simples é exigida como verificação.
- Os dados são enviados para a API personalizada do WordPress.
- O CPT "submission" armazena os envios no painel administrativo.
