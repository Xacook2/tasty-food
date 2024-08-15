// Toggle between Metric and Imperial ingredients
function showMetric() {
    document.getElementById('metric-ingredients').style.display = 'block';
    document.getElementById('imperial-ingredients').style.display = 'none';
}

function showImperial() {
    document.getElementById('metric-ingredients').style.display = 'none';
    document.getElementById('imperial-ingredients').style.display = 'block';
}

// Star rating logic
const stars = document.querySelectorAll('#rating-stars .star');
const ratingCounter = document.getElementById('rating-counter');
const ratingSummary = {
    totalReviews: 0,
    averageRating: 0
};

stars.forEach(star => {
    star.addEventListener('click', function () {
        const rating = this.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        ratingCounter.textContent = `Your Rating: ${rating} Stars`;

        document.getElementById('submit-rating').onclick = () => submitRating(rating);
    });
});

function submitRating(rating) {
    ratingSummary.totalReviews++;
    ratingSummary.averageRating = ((ratingSummary.averageRating * (ratingSummary.totalReviews - 1)) + parseInt(rating)) / ratingSummary.totalReviews;

    document.getElementById('average-rating').textContent = `Average Rating: ${ratingSummary.averageRating.toFixed(1)}`;
    document.getElementById('total-reviews').textContent = `Total Reviews: ${ratingSummary.totalReviews}`;
}
