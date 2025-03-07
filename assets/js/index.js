document.addEventListener("DOMContentLoaded", () => {
    // Mobiilivalikko
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mainNav.classList.toggle('active');
        });
    }

    // Kielivalitsin
    const langIcons = document.querySelectorAll('.lang-icon');
    const htmlTag = document.documentElement;
    const LANG_KEY = "siteLang";

    const setActiveLanguage = (lang) => {
        langIcons.forEach(icon => {
            icon.classList.toggle('active', icon.dataset.lang === lang);
        });
    };

    const loadLanguage = async (lang) => {
        try {
            const response = await fetch(`assets/lang/${lang}.json`);
            if (!response.ok) throw new Error('Language load failed');
            
            const translations = await response.json();
            
            document.querySelectorAll("[data-key]").forEach(element => {
                const key = element.dataset.key;
                element.textContent = translations[key] || `[${key}]`;
            });

            htmlTag.lang = lang;
            localStorage.setItem(LANG_KEY, lang);
            setActiveLanguage(lang);

        } catch (error) {
            console.error("Language error:", error);
            if (lang !== 'en') loadLanguage('en');
        }
    };

    // Alusta kieli
    const savedLang = localStorage.getItem(LANG_KEY) || 'en';
    loadLanguage(savedLang);

    // Klikkaukset
    langIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            loadLanguage(e.currentTarget.dataset.lang);
        });
    });
});