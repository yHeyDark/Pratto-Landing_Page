document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DO MENU MOBILE ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });
    
    // Fecha o menu mobile ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
             mobileMenu.classList.add('hidden');
             mobileMenuButton.setAttribute('aria-expanded', 'false');
             menuIcon.classList.remove('fa-xmark');
             menuIcon.classList.add('fa-bars');
        });
    });

    // --- LÓGICA DE ANIMAÇÃO AO ROLAR ---
    // Seleciona todos os elementos que devem ter a animação
    const scrollElements = document.querySelectorAll('.fade-in-on-scroll');

    // Função que verifica se o elemento está visível na tela
    const elementInView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        // Retorna true se o topo do elemento estiver a 50px de entrar na viewport
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 50;
    };

    // Função que adiciona a classe 'visible' para disparar a animação
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    // Função que lida com o evento de scroll
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };
    
    // --- LÓGICA DA SOMBRA NO CABEÇALHO ---
    const header = document.getElementById('page-header');
    window.addEventListener('scroll', () => {
        // Executa a animação de scroll
        handleScrollAnimation();
        
        // Adiciona/remove sombra do header
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });
    
    // Executa a animação uma vez no carregamento inicial da página
    handleScrollAnimation();
});
