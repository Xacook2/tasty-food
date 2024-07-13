// Get all checkboxes for ingredients and instructions
const ingredientCheckboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
const instructionCheckboxes = document.querySelectorAll('.instructions input[type="checkbox"]');

// Function to handle checkbox change
function handleCheckboxChange(checkbox, label) {
    if (checkbox.checked) {
        label.classList.add('crossed-out');
    } else {
        label.classList.remove('crossed-out');
    }
}

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
