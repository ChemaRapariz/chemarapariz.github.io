function showFAQ(group, button){

    // Hide and show faq sections
    document.querySelectorAll('.faq-group').forEach(el => el.classList.add('d-none'));
    document.getElementById(`faq-${group}`).classList.toggle('d-none');

    // Styles of active button
    document.querySelectorAll('.faq-tab-btn').forEach(btn => btn.classList.remove('fw-bold'))
    button.classList.add('fw-bold');
}