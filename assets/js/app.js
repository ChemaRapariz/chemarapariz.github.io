function showFAQ(group, button) {

    // Hide and show faq sections
    document.querySelectorAll('.faq-group').forEach(el => el.classList.add('d-none'));
    document.getElementById(`faq-${group}`).classList.toggle('d-none');

    // Styles of active button
    document.querySelectorAll('.faq-tab-btn').forEach(btn => btn.classList.remove('fw-bold'))
    button.classList.add('fw-bold');
};

let currPage = 1;
const totalPages = document.querySelectorAll('.form-page').length;

function toggleFormPage(btn) {
    const submitBtn = document.querySelector('.btn-outline-success.shadow.rounded-pill');
    const backBtn = document.querySelector('.btn-outline-secondary');
    const nextBtn = document.querySelector('.btn-success.shadow.rounded-pill');
    const formPages = document.querySelectorAll('.form-page');

    // Determine if the button clicked is "Next" or "Back"
    const isNext = btn.classList.contains('btn-success');

    // Update the current page number
    currPage = isNext ? Math.min(currPage + 1, totalPages) : Math.max(currPage - 1, 1);

    // Toggle visibility of form pages
    formPages.forEach((page, index) => {
        page.classList.toggle('d-none', index + 1 !== currPage);
    });

    // Toggle visibility of buttons
    if (submitBtn) submitBtn.classList.toggle('d-none', currPage !== totalPages);
    if (nextBtn) nextBtn.classList.toggle('d-none', currPage === totalPages);
    if (backBtn) backBtn.classList.toggle('d-none', currPage === 1);

    console.log(`Current Page: ${currPage}`);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwP702e0DbLPUttKliDR5axjYW60bfp-AlNZhIAUuUaTm8fEed_ucFLwU4LobB9QTeYPw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});

function rangeDisplay(category, rangeForm) {
    const valueDisplay = document.querySelector(`#${category}RangeValue`);
    if(!valueDisplay) return;

    const suffix = category === 'time' ? 'Week(s)' : '€';
    valueDisplay.textContent = `${rangeForm.value} ${suffix}`;
};

