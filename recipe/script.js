document.addEventListener("DOMContentLoaded", function() {
    const metricElements = document.querySelectorAll('.metric');
    const imperialElements = document.querySelectorAll('.imperial');
    const starElements = document.querySelectorAll('.star');
    const ratingSummary = document.getElementById('rating-summary');
    const ratingCounter = document.getElementById('rating-counter');
    let userRating = localStorage.getItem('userRating') || 0;

    // Show metric by default
    function showMetric() {
        metricElements.forEach(el => el.style.display = 'list-item');
        imperialElements.forEach(el => el.style.display = 'none');
    }

    function showImperial() {
        metricElements.forEach(el => el.style.display = 'none');
        imperialElements.forEach(el => el.style.display = 'list-item');
    }

    function highlightStars(rating) {
        starElements.forEach((star, index) => {
            star.style.color = index < rating ? 'gold' : 'black';
        });
    }

    function fetchRatingData() {
        const ratingData = JSON.parse(localStorage.getItem('ratingData')) || {
            totalRating: 0,
            numberOfRatings: 0,
        };
        updateRatingUI(ratingData.totalRating, ratingData.numberOfRatings);
    }

    function updateRatingUI(totalRating, numberOfRatings) {
        const averageRating = numberOfRatings > 0 ? (totalRating / numberOfRatings).toFixed(2) : 0;
        ratingSummary.textContent = `Average Rating: ${averageRating} / 5`;
        ratingCounter.textContent = `${numberOfRatings} ratings submitted`;
    }

    function sendRatingToServer(rating) {
        let ratingData = JSON.parse(localStorage.getItem('ratingData')) || {
            totalRating: 0,
            numberOfRatings: 0,
        };

        ratingData.totalRating += rating;
        ratingData.numberOfRatings += 1;

        localStorage.setItem('ratingData', JSON.stringify(ratingData));
        updateRatingUI(ratingData.totalRating, ratingData.numberOfRatings);
    }

    // Toggle ingredient and instruction checkboxes
    function toggleStrikeThrough(event) {
        const label = event.target.nextElementSibling;
        if (event.target.checked) {
            label.classList.add('crossed-out');
        } else {
            label.classList.remove('crossed-out');
        }
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleStrikeThrough);
    });

    // Star rating logic
    starElements.forEach(star => {
        star.addEventListener('mouseover', function() {
            highlightStars(star.dataset.value);
        });

        star.addEventListener('mouseout', function() {
            highlightStars(userRating);
        });

        star.addEventListener('click', function() {
            userRating = parseInt(star.dataset.value);
            localStorage.setItem('userRating', userRating);
            highlightStars(userRating);
        });
    });

    document.getElementById('submit-rating').addEventListener('click', function() {
        if (userRating > 0) {
            sendRatingToServer(userRating);
        } else {
            alert('Please select a rating before submitting.');
        }
    });

    // Initial UI setup
    showMetric();
    highlightStars(userRating);
    fetchRatingData();
});
