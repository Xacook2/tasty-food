document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const submitButton = document.getElementById('submit-rating');
    const averageStarsElement = document.getElementById('average-stars');
    const totalVotesElement = document.getElementById('total-votes');
    let selectedRating = 0;
    let votes = 0;
    let totalRating = 0;
    let hasVoted = false;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            if (hasVoted) {
                alert('You have already voted!');
                return;
            }
            selectedRating = parseInt(this.getAttribute('data-value'));
            highlightStars(selectedRating);
        });

        star.addEventListener('mouseover', function () {
            if (!hasVoted) {
                const hoverValue = parseInt(this.getAttribute('data-value'));
                highlightStars(hoverValue);
            }
        });

        star.addEventListener('mouseout', function () {
            if (!hasVoted) {
                highlightStars(selectedRating);
            }
        });
    });

    submitButton.addEventListener('click', function () {
        if (hasVoted || selectedRating === 0) {
            alert('Please select a rating!');
            return;
        }

        totalRating += selectedRating;
        votes += 1;
        hasVoted = true;

        const averageRating = (totalRating / votes).toFixed(1);

        averageStarsElement.textContent = averageRating;
        totalVotesElement.textContent = votes;

        alert(`Thank you for rating! You gave ${selectedRating} stars.`);
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});
