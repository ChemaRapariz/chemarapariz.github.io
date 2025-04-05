function showFAQ(group, button) {

    // Hide and show faq sections
    document.querySelectorAll('.faq-group').forEach(el => el.classList.add('d-none'));
    document.getElementById(`faq-${group}`).classList.toggle('d-none');

    // Styles of active button
    document.querySelectorAll('.faq-tab-btn').forEach(btn => btn.classList.remove('fw-bold'))
    button.classList.add('fw-bold');
}

let currPage = 1;

function nextPage() {
    currPage++;
    if(currPage >= 2){
        document.querySelector('.btn-outline-secondary').classList.remove('d-none');
    }
    document.querySelectorAll('.form-page').forEach(fp => fp.classList.add('d-none'));
    document.querySelector(`#form-page-${currPage}`).classList.remove('d-none');
}

function prevPage(btn) {
    currPage--;
    if(currPage < 1){
        btn.classList.add('d-none');
        return;
    } 
    document.querySelectorAll('.form-page').forEach(fp => fp.classList.add('d-none'));
    document.querySelector(`#form-page-${currPage}`).classList.remove('d-none');
    if(currPage === 1){
        btn.classList.add('d-none');
    }
}

function rangeDisplay(category, rangeForm){
    console.log(document.querySelector(`#${category}RangeValue`).innerHTML);
    document.querySelector(`#${category}RangeValue`).innerHTML = `${rangeForm.value} ${category === 'time' ? 'Week(s)' : '€'}`;
}