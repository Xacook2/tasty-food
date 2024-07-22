// Function to show metric instructions
function showMetric() {
    document.querySelectorAll('.metric-instructions').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.imperial-instructions').forEach(el => el.style.display = 'none');
}

// Function to show imperial instructions
function showImperial() {
    document.querySelectorAll('.imperial-instructions').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.metric-instructions').forEach(el => el.style.display = 'none');
}

// Add event listeners to checkboxes for ingredients and instructions
document.querySelectorAll('.ingredients input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        if (checkbox.checked) {
            label.classList.add('crossed-out');
        } else {
            label.classList.remove('crossed-out');
        }
    });
});

document.querySelectorAll('.instructions input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        if (checkbox.checked) {
            label.classList.add('crossed-out');
        } else {
            label.classList.remove('crossed-out');
        }
    });
});
