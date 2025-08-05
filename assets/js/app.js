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
    const submitBtn = document.getElementById('submitBtn');
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPJGEBBpCbfBNffkyr5TgA6VS3W27A4fPP8xHBvUnDc_G8NMEr34JisdPgcE97YaK3Wg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault();
    if (currPage !== totalPages) {
        alert('You must complete all pages before submitting the form.');
        document.getElementById('submitBtn').classList.add('d-none');
        return;
    }
    const formData = new FormData(form); // Capture form data
    form.reset(); // Reset the form immediately
    submissionMessage();
    console.log('Submitted');
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
});

function submissionMessage() {
    // Remove form content
    document.querySelector('#form-page-6').classList.add('d-none');
    document.querySelector('#submitBtn').classList.add('d-none');
    document.querySelector('#backBtn').classList.add('d-none');

    // Show submission message
    document.querySelector('#submissionMessage').classList.remove('d-none');
}

function rangeDisplay(category, rangeForm) {
    const valueDisplay = document.querySelector(`#${category}RangeValue`);
    if (!valueDisplay) return;

    const suffix = category === 'time' ? 'Week(s)' : '€';
    valueDisplay.textContent = `${rangeForm.value} ${suffix}`;
};

