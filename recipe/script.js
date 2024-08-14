let selectedRating = 0;
const stars = document.querySelectorAll('.star');

// Add click event to each star for rating selection
stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        stars.forEach(star => star.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Variable to keep track of the number of ratings submitted
let ratingsSubmitted = 0;

// Reference to the submit button
const submitButton = document.getElementById('submit-rating');

// Event listener for the submit button click
submitButton.addEventListener('click', function() {
    if (selectedRating === 0) {
        alert("Please select a rating before submitting.");
    } else {
        ratingsSubmitted++;
        document.getElementById('rating-counter').innerText = `Ratings Submitted: ${ratingsSubmitted}`;
        alert(`Thank you for your rating of ${selectedRating} stars!`);
    }
});

function showMetric() {
    var metricElements = document.querySelectorAll('.metric');
    var imperialElements = document.querySelectorAll('.imperial');

    metricElements.forEach(function(el) {
        el.style.display = 'list-item';
    });

    imperialElements.forEach(function(el) {
        el.style.display = 'none';
    });
}

function showImperial() {
    var metricElements = document.querySelectorAll('.metric');
    var imperialElements = document.querySelectorAll('.imperial');

    metricElements.forEach(function(el) {
        el.style.display = 'none';
    });

    imperialElements.forEach(function(el) {
        el.style.display = 'list-item';
    });
}

// Initialize with metric ingredients visible
showMetric();
