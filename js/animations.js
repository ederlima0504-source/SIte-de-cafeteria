document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation Setup
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); 
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));


    // 2. Botões Dinâmicos: Efeito Ripple (Onda)
    const rippleBtns = document.querySelectorAll('.ripple-btn');
    rippleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.className = 'ripple-effect';
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });


    // 3. Menu Mobile Toggling Dinâmico
    // Pega o botão com classe "md:hidden" lá do menu superior
    const mobileMenuBtn = document.querySelector('.md\\:hidden'); 
    const mobileMenuContainer = createMobileMenu(); // Injeta o menuzão no Body
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenuContainer.classList.toggle('open');
            
            // Trocar o ícone (menu para close)
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.textContent = icon.textContent === 'menu' ? 'close' : 'menu';
            }
        });
    }

    // 4. Animação na Header ao rolar
    const nav = document.querySelector('nav');
    if (nav) {
        // Inicializar com CSS Transitions
        nav.style.transition = "padding 0.4s ease, box-shadow 0.4s ease";
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('shadow-lg', 'py-4');
                nav.classList.add('py-6');
            }
        });
    }
});

function createMobileMenu() {
    const menu = document.createElement('div');
    // Classes Tailwind misturadas com nossas classes CSS puras (ainda sem abrir)
    menu.className = "mobile-menu-container fixed left-0 w-full bg-[#fcf9f4] shadow-2xl z-40 flex flex-col items-center py-10 transition-all duration-500 origin-top transform -translate-y-[150%] opacity-0 pointer-events-none";
    // Pegar o height do nav dinamicamente. Grosseiramente: top-20
    menu.style.top = "80px"; 

    menu.innerHTML = `
        <a href="index.html" class="text-xl font-serif text-[#5d4037] py-3 opacity-0 menu-link uppercase tracking-widest transition-colors hover:text-[#442a22]">Home</a>
        <a href="menu.html" class="text-xl font-serif text-[#5d4037] py-3 opacity-0 menu-link uppercase tracking-widest transition-colors hover:text-[#442a22]">Menu</a>
        <a href="sobre.html" class="text-xl font-serif text-[#5d4037] py-3 opacity-0 menu-link uppercase tracking-widest transition-colors hover:text-[#442a22]">Nossa História</a>
        <a href="contato.html" class="text-xl font-serif text-[#5d4037] py-3 opacity-0 menu-link uppercase tracking-widest transition-colors hover:text-[#442a22]">Contato</a>
    `;
    
    document.body.appendChild(menu);
    return menu;
}
