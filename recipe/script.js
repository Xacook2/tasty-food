// Function to show ingredients in metric units
function showMetric() {
    console.log("Metric button clicked");
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'none');
}

// Function to show ingredients in imperial units
function showImperial() {
    console.log("Imperial button clicked");
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'none');
}

// Automatically call the showMetric function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showMetric();  // Default to metric units on page load
});

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

// Add the rating functionality
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars .star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingValue.textContent = `Rating: ${value} out of 5`;
            
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            this.nextElementSibling?.classList.add('selected');
            this.previousElementSibling?.classList.add('selected');
        });
    });
});

