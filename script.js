
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.technology-section, .features-section, .faq-section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('show');
            }
        });
    }
    showSections();

    document.addEventListener('scroll', showSections);
});



