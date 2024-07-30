document.addEventListener('DOMContentLoaded', function () {
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq__item');

    // Function to close all FAQ items
    function closeAllFaqItems() {
        faqItems.forEach(function (item) {
            const faqQuestionOpen = item.querySelector('.faq__question--open');
            const iconClose = item.querySelector('.iconClose');
            const iconOpen = item.querySelector('.iconOpen');
            const faqHeader = item.querySelector('.faq__header');

            faqQuestionOpen.classList.add('hide');
            iconClose.classList.add('hide');
            iconOpen.classList.remove('hide');
            faqHeader.classList.remove('open');
        });
    }

    // Add click event listener to each FAQ item
    faqItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Close all FAQ items first
            closeAllFaqItems();

            // Get elements within the clicked FAQ item
            const faqQuestionOpen = this.querySelector('.faq__question--open');
            const iconClose = this.querySelector('.iconClose');
            const iconOpen = this.querySelector('.iconOpen');
            const faqHeader = this.querySelector('.faq__header');

            // Toggle the visibility of the content and icons
            faqQuestionOpen.classList.remove('hide');
            iconClose.classList.remove('hide');
            iconOpen.classList.add('hide');
            faqHeader.classList.add('open');
        });
    });
});