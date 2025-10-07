document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || assunto === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos do formulário antes de enviar.');
                return; 
            }

            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset(); 
        });
    }

    
    const backToTopButton = document.getElementById('btnVoltarTopo');

    if (backToTopButton) {
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { 
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});