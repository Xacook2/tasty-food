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

// Mock function to simulate fetching rating data from a server
async function fetchRatingData() {
    // Simulate a delay for fetching data
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock data
    return {
        totalRatings: parseInt(localStorage.getItem('totalRatings')) || 0,
        numberOfRatings: parseInt(localStorage.getItem('numberOfRatings')) || 0
    };
}

// Mock function to simulate sending rating data to a server
async function sendRatingToServer(rating) {
    // Simulate a delay for sending data
    await new Promise(resolve => setTimeout(resolve, 500));
    // Update local storage to simulate storing data on the server
    let totalRatings = parseInt(localStorage.getItem('totalRatings')) || 0;
    let numberOfRatings = parseInt(localStorage.getItem('numberOfRatings')) || 0;
    totalRatings += rating;
    numberOfRatings++;
    localStorage.setItem('totalRatings', totalRatings);
    localStorage.setItem('numberOfRatings', numberOfRatings);
}

// Automatically call the showMetric function when the page loads
document.addEventListener('DOMContentLoaded', async function () {
    showMetric();  // Default to metric units on page load
    
    const stars = document.querySelectorAll('.stars .star');
    const submitRatingBtn = document.getElementById('submit-rating');
    const ratingSummary = document.getElementById('rating-summary');
    const ratingCounter = document.getElementById('rating-counter');

    let currentRating = 0;
    let hasVoted = localStorage.getItem('hasVoted');

    // Fetch and display rating data on page load
    const ratingData = await fetchRatingData();
    if (ratingData.numberOfRatings > 0) {
        const averageRating = (ratingData.totalRatings / ratingData.numberOfRatings).toFixed(1);
        ratingSummary.textContent = `Average Rating: ${averageRating} / 5`;
        ratingCounter.textContent = `${ratingData.numberOfRatings} ratings submitted`;
    }

    // Check if the user has already voted
    if (hasVoted) {
        submitRatingBtn.disabled = true;
        // Update UI to reflect that voting is disabled
        submitRatingBtn.textContent = 'You have already voted';
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
        });

        submitRatingBtn.addEventListener('click', async function () {
            if (currentRating > 0) {
                // Save vote locally
                localStorage.setItem('hasVoted', true);

                // Disable further voting
                submitRatingBtn.disabled = true;
                submitRatingBtn.textContent = 'Thank you for your rating';

                // Send the rating to the server
                await sendRatingToServer(currentRating);

                // Fetch updated rating data
                const updatedRatingData = await fetchRatingData();
                const averageRating = (updatedRatingData.totalRatings / updatedRatingData.numberOfRatings).toFixed(1);

                // Update the UI
                ratingSummary.textContent = `Average Rating: ${averageRating} / 5`;
                ratingCounter.textContent = `${updatedRatingData.numberOfRatings} ratings submitted`;
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
