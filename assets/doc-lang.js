// Language Switcher for Execord Website & Documentation Pages

function setLanguage(lang) {
    if (lang !== 'de' && lang !== 'en') {
        lang = 'en';
    }

    try {
        localStorage.setItem('execord_lang', lang);
    } catch (e) {
        // Fallback for private mode or disabled localStorage
    }

    document.documentElement.lang = lang;

    // 1. Update all Language Toggle Buttons
    const btnEns = document.querySelectorAll('.lang-btn-en, #lang-btn-en');
    const btnDes = document.querySelectorAll('.lang-btn-de, #lang-btn-de');

    btnEns.forEach(btn => {
        if (lang === 'en') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    btnDes.forEach(btn => {
        if (lang === 'de') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Toggle Container-based Language Blocks (.lang-content / #content-en / #content-de)
    const contentEns = document.querySelectorAll('.content-en, #content-en');
    const contentDes = document.querySelectorAll('.content-de, #content-de');

    contentEns.forEach(el => {
        if (lang === 'en') {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    contentDes.forEach(el => {
        if (lang === 'de') {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    // 3. Update Elements with data-lang-en and data-lang-de Attributes
    document.querySelectorAll('[data-lang-en][data-lang-de]').forEach(el => {
        const text = lang === 'de' ? el.getAttribute('data-lang-de') : el.getAttribute('data-lang-en');
        if (text !== null) {
            el.textContent = text;
        }
    });

    // 4. Update Back Button Text if present
    const navBacks = document.querySelectorAll('.nav-back, #nav-back-link');
    navBacks.forEach(navBack => {
        navBack.textContent = lang === 'de' ? '← Zurück' : '← Back';
    });

    // 5. Update Page Title
    const activeBlock = lang === 'de' ? document.querySelector('.content-de, #content-de') : document.querySelector('.content-en, #content-en');
    if (activeBlock && activeBlock.dataset.title) {
        document.title = activeBlock.dataset.title;
    }
}

function decodeProtectedData() {
    function decodeB64(b64) {
        try {
            const binStr = atob(b64);
            const bytes = Uint8Array.from(binStr, (c) => c.charCodeAt(0));
            return new TextDecoder().decode(bytes);
        } catch (e) {
            return '';
        }
    }

    document.querySelectorAll('.protected-data').forEach(el => {
        const b64 = el.getAttribute('data-b64');
        if (b64) {
            el.innerHTML = decodeB64(b64);
        }
    });

    document.querySelectorAll('.protected-email').forEach(el => {
        const b64 = el.getAttribute('data-b64');
        if (b64) {
            const email = decodeB64(b64);
            el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        }
    });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    decodeProtectedData();

    let initialLang = 'en';
    try {
        const savedLang = localStorage.getItem('execord_lang');
        if (savedLang === 'de' || savedLang === 'en') {
            initialLang = savedLang;
        } else if (navigator.language && navigator.language.toLowerCase().startsWith('de')) {
            initialLang = 'de';
        }
    } catch (e) {
        if (navigator.language && navigator.language.toLowerCase().startsWith('de')) {
            initialLang = 'de';
        }
    }

    setLanguage(initialLang);
});
