function showFAQ(group, button) {

    // Hide and show faq sections
    document.querySelectorAll('.faq-group').forEach(el => el.classList.add('d-none'));
    document.getElementById(`faq-${group}`).classList.toggle('d-none');

    // Styles of active button
    document.querySelectorAll('.faq-tab-btn').forEach(btn => btn.classList.remove('fw-bold'))
    button.classList.add('fw-bold');
}

let currPage = 1;

function toggleFormPage(btn) {
    const isNext = btn.classList.contains('btn-success');
    const totalPages = document.querySelectorAll('.form-page').length;

    if (isNext && currPage < totalPages) {
        currPage++;
    } else if(!isNext && currPage > 1){
        currPage--;
    }

    document.querySelectorAll('.form-page').forEach(page => page.classList.add('d-none'));
    const currentPage = document.querySelector(`#form-page-${currPage}`);
    console.log(currentPage);
    if(currentPage) currentPage.classList.remove('d-none');

    const backBtn = document.querySelector('.btn-outline-secondary');
    if (backBtn) {
        backBtn.classList.toggle('d-none', currPage === 1);
    }
}


function rangeDisplay(category, rangeForm) {
    const valueDisplay = document.querySelector(`#${category}RangeValue`);
    if(!valueDisplay) return;

    const suffix = category === 'time' ? 'Week(s)' : '€';
    valueDisplay.textContent = `${rangeForm.value} ${suffix}`;
}