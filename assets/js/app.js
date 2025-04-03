function showFAQ(category, element) {
    // Hide all FAQ groups
    document.querySelectorAll('.faq-group').forEach(group => group.classList.add('d-none'));

    // Show selected FAQ group
    document.getElementById(`faq-${category}`).classList.remove('d-none');

    // Update active tab styling
    document.querySelectorAll('.faq-tab-btn').forEach(btn => btn.classList.remove('fw-bold'));
    element.classList.add('fw-bold');
}
