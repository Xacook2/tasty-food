// Function to handle checkbox change
function handleCheckboxChange(checkbox, label) {
    if (checkbox.checked) {
        label.classList.add('crossed-out');
    } else {
        label.classList.remove('crossed-out');
    }
}

// Function to toggle between metric and imperial units
function toggleUnits() {
    const labels = document.querySelectorAll('.ingredients li label');
    const nutritionalInfo = document.querySelectorAll('.nutritional-info li');
    
    const isMetric = document.querySelector('.ingredients li label').dataset.metric;
    
    labels.forEach(label => {
        label.textContent = label.dataset[isMetric ? 'imperial' : 'metric'];
    });
    
    nutritionalInfo.forEach(item => {
        item.style.display = item.classList.contains(isMetric ? 'metric' : 'imperial') ? 'list-item' : 'none';
    });
}

// Get all checkboxes for ingredients and instructions
const ingredientCheckboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
const instructionCheckboxes = document.querySelectorAll('.instructions input[type="checkbox"]');

// Add event listeners for ingredients checkboxes
ingredientCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        handleCheckboxChange(this, label);
    });
});

// Add event listeners for instructions checkboxes
instructionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling;
        handleCheckboxChange(this, label);
    });
});
