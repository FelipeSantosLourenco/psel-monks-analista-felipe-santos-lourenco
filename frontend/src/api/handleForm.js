export async function handleFormSubmit(formFields, userResult, isCorrect) {
    if (!isCorrect) {
        alert('A resposta de verificação está incorreta.');
        return;
    }

    const data = {
        title: 'Form Submission',
        content: JSON.stringify(formFields),
        status: 'publish',
        meta: formFields
    };

    try {
        const response = await fetch('http://psel-monks-analista-felipe-santos-lourenco.local/wp-json/custom/v1/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }

        const result = await response.json();
        console.log('Resultado da submissão:', result);
        alert('Formulário enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Houve um erro ao enviar o formulário. Tente novamente mais tarde.');
    }
}
