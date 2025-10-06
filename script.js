document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------
    // 1. Requisito: Validação Simples do Formulário (Para contato.html)
    // -------------------------------------------------------------------
    const form = document.getElementById('contactForm');
    
    if (form) { // Verifica se o formulário existe na página (para não dar erro nas outras)
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples: verificar se os campos estão preenchidos
            if (nome === '' || email === '' || assunto === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos do formulário antes de enviar.');
                return; // Impede o processamento posterior
            }

            // Validação de email básica
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            // Se a validação passar
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset(); // Limpa o formulário após o "envio" (simulado)
        });
    }

    // -------------------------------------------------------------------
    // 2. Requisito: Exemplo de Interação (Botão "Voltar ao Topo")
    // -------------------------------------------------------------------
    const backToTopButton = document.getElementById('btnVoltarTopo');

    if (backToTopButton) {
        // Mostrar/Esconder o botão conforme a posição da tela
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Se o scroll for maior que 300px
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        // Ação ao clicar no botão
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Rola suavemente
            });
        });
    }

    // -------------------------------------------------------------------
    // 3. Requisito: Exemplo de Interação (Alerta de Boas-vindas - Opcional)
    // Você pode descomentar esta parte se quiser uma interação extra
    // -------------------------------------------------------------------
    /*
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
         alert('Bem-vindo(a) ao Meu Portfólio! Esperamos que goste!');
    }
    */
});