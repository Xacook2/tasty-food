// Function to show ingredients in metric units
function showMetric() {
    console.log("Metric button clicked"); // Log to check if this function is called
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'none');
}

// Function to show ingredients in imperial units
function showImperial() {
    console.log("Imperial button clicked"); // Log to check if this function is called
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'none');
}

// Automatically call the showMetric function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showMetric();  // Default to metric units on page load
    
    const stars = document.querySelectorAll('.stars .star');
    const submitRatingBtn = document.getElementById('submit-rating');
    const ratingSummary = document.getElementById('rating-summary');
    const ratingCounter = document.getElementById('rating-counter');

    let currentRating = 0;
   // let hasVoted = localStorage.getItem('hasVoted');

    // Check if the user has already voted
   /* if (hasVoted) {
        submitRatingBtn.disabled = true;
        alert('You have already voted.');
        // You may want to display the previous rating here
    } else {
        stars.forEach((star, index) => {
            star.addEventListener('click', function () {
                currentRating = index + 1;
                updateStars(currentRating);
            });

            star.addEventListener('mouseover', function () {
                updateStars(index + 1);
            });

            star.addEventListener('mouseout', function () {
                updateStars(currentRating);
            });
        });*/

        submitRatingBtn.addEventListener('click', function () {
            if (currentRating > 0) {
                // Save vote locally
                // localStorage.setItem('hasVoted', true);

                // Disable further voting
                submitRatingBtn.disabled = true;

                // Send the rating to the server (this part is conceptual)
                // This would involve an AJAX request to your server to save the vote
                // For example:
                // sendRatingToServer(currentRating);

                // Update the UI (this should also reflect server-side storage)
                updateRatingSummary(currentRating);
                alert('Thank you for your rating!');
            } else {
                alert('Please select a rating before submitting.');
            }
        });
    }

    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('gold');
            } else {
                star.classList.remove('gold');
            }
        });
    }
/*
   function updateRatingSummary(newRating) {
        // Get stored values from the server (this part is conceptual)
        // This should be replaced by an AJAX call to get the current rating data from the server
        // Example server response
        let totalRatings = parseInt(localStorage.getItem('totalRatings')) || 0;
        let numberOfRatings = parseInt(localStorage.getItem('numberOfRatings')) || 0;

        totalRatings += newRating;
        numberOfRatings++;

        const averageRating = (totalRatings / numberOfRatings).toFixed(1);

        ratingSummary.textContent = `Average Rating: ${averageRating} / 5`;
        ratingCounter.textContent = `${numberOfRatings} ratings submitted`;

        // Update stored values in localStorage (replace with server-side storage)
        localStorage.setItem('totalRatings', totalRatings);
        localStorage.setItem('numberOfRatings', numberOfRatings);
    }

    // Initialize summary with stored values
    const totalRatings = parseInt(localStorage.getItem('totalRatings')) || 0;
    const numberOfRatings = parseInt(localStorage.getItem('numberOfRatings')) || 0;
    if (numberOfRatings > 0) {
        const averageRating = (totalRatings / numberOfRatings).toFixed(1);
        ratingSummary.textContent = `Average Rating: ${averageRating} / 5`;
        ratingCounter.textContent = `${numberOfRatings} ratings submitted`;
    }*/
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

