document.addEventListener('DOMContentLoaded', () => {
    // Seletor de Tema
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema salvo ao carregar a página
    if (currentTheme) {
        body.classList.remove('theme-light', 'theme-dark'); // Remove classes padrão
        body.classList.add(`theme-${currentTheme}`);
        if (currentTheme === 'dark') {
            themeSwitcher.textContent = '☀️'; // Sol para tema escuro
        } else {
            themeSwitcher.textContent = '◐'; // Lua para tema claro
        }
    } else { // Define o tema claro como padrão se nada estiver salvo
        body.classList.add('theme-light');
        themeSwitcher.textContent = '◐';
    }

    themeSwitcher.addEventListener('click', () => {
        if (body.classList.contains('theme-light')) {
            body.classList.replace('theme-light', 'theme-dark');
            localStorage.setItem('theme', 'dark');
            themeSwitcher.textContent = '☀️';
        } else {
            body.classList.replace('theme-dark', 'theme-light');
            localStorage.setItem('theme', 'light');
            themeSwitcher.textContent = '◐';
        }
    });

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('#main-menu');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainNavUl.classList.toggle('active');
        });
    }
});