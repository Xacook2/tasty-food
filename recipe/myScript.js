// Function to handle checkbox change
function handleCheckboxChange(checkbox, label) {
    if (checkbox.checked) {
        label.classList.add('crossed-out');
    } else {
        label.classList.remove('crossed-out');
    }
}

// Function to toggle between metric and imperial units
function toggleUnits(unit) {
    const labels = document.querySelectorAll('.ingredients li label');
    const nutritionalInfo = document.querySelectorAll('.nutritional-info li');
    
    const isMetric = (unit === 'metric');
    
    labels.forEach(label => {
        label.textContent = label.dataset[unit];
    });
    
    nutritionalInfo.forEach(item => {
        item.style.display = item.classList.contains(unit) ? 'list-item' : 'none';
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

// Add event listeners for unit toggle buttons
document.getElementById('metric-btn').addEventListener('click', function() {
    toggleUnits('metric');
});

document.getElementById('imperial-btn').addEventListener('click', function() {
    toggleUnits('imperial');
});
