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
let selectedRating = 0;
let ratingSubmitted = false;
let reviews = []; // Array to store user reviews

const stars = document.querySelectorAll('.star');
const ratingCounter = document.getElementById('rating-counter');
const submitButton = document.getElementById('submit-rating');
const reviewsList = document.getElementById('reviews-list');
const averageRatingDisplay = document.getElementById('average-rating');
const totalReviewsDisplay = document.getElementById('total-reviews');

// Function to update star colors based on the selected rating
function updateStarColors() {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        star.classList.remove('selected', 'hover');
        if (value <= selectedRating) {
            star.classList.add('gold');
        } else {
            star.classList.remove('gold');
        }
    });
}

// Function to update the average rating and total reviews
function updateRatingSummary() {
    const totalReviews = reviews.length;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / totalReviews;

    averageRatingDisplay.innerText = `Average Rating: ${totalReviews > 0 ? averageRating.toFixed(1) : 'N/A'}`;
    totalReviewsDisplay.innerText = `Total Reviews: ${totalReviews}`;
}

// Function to add a review to the reviews list
function addReview(rating) {
    const reviewItem = document.createElement('li');
    reviewItem.innerText = `Rating: ${rating} stars`;
    reviewsList.appendChild(reviewItem);
}

// Event listener for hovering over stars
stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        if (!ratingSubmitted) {
            selectedRating = parseInt(this.getAttribute('data-value'));
            updateStarColors();
        }
    });

    star.addEventListener('click', function() {
        if (!ratingSubmitted) {
            selectedRating = parseInt(this.getAttribute('data-value'));
            updateStarColors();
            ratingCounter.innerText = `Your Rating: ${selectedRating} stars`;
        }
    });
});

// Event listener for leaving the stars
stars.forEach(star => {
    star.addEventListener('mouseout', function() {
        if (!ratingSubmitted) {
            selectedRating = 0;
            updateStarColors();
            ratingCounter.innerText = `Your Rating: None`;
        }
    });
});

// Event listener for the submit button click
submitButton.addEventListener('click', function() {
    if (ratingSubmitted) {
        alert("You have already submitted your rating.");
        return;
    }

    if (selectedRating === 0) {
        alert("Please select a rating before submitting.");
    } else {
        ratingSubmitted = true;

        // Add the review to the reviews array
        reviews.push({ rating: selectedRating });

        // Add the review to the displayed list
        addReview(selectedRating);

        // Update the rating summary (average rating and total reviews)
        updateRatingSummary();

        // Disable further interaction with the stars
        stars.forEach(star => star.classList.remove('hover'));

        alert(`Thank you for your rating of ${selectedRating} stars!`);
    }
});
