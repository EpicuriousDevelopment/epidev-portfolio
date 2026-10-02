import { translations } from './translations.js';
import { projects } from '../data/projects.js';
let currentLang = localStorage.getItem('lang') || 'nl';

export function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text) el.textContent = text;
    });
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.querySelectorAll('[data-project-key]').forEach(el => {
    const key = el.getAttribute('data-project-key');
    const projectIndex = el.getAttribute('data-project-index');
    const project = projects[projectIndex];
    if (project && project[key]) {
        el.textContent = project[key][lang];
    }
});
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        })
    })
})