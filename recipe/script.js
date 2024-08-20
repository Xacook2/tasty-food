document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const submitButton = document.getElementById('submit-rating');
    const averageRatingElement = document.getElementById('average-rating');
    const voteCountElement = document.getElementById('vote-count');

    let userRating = 0;
    let hasVoted = localStorage.getItem('hasVoted') === 'true';

    const mockServerData = {
        totalRating: 0,
        voteCount: 0,
    };

    function calculateAverage() {
        return (mockServerData.voteCount === 0) ? 0 : (mockServerData.totalRating / mockServerData.voteCount).toFixed(2);
    }

    function updateResults() {
        averageRatingElement.textContent = calculateAverage();
        voteCountElement.textContent = mockServerData.voteCount;
    }

    function updateStarSelection() {
        stars.forEach(star => {
            star.classList.toggle('selected', star.dataset.value <= userRating);
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            if (hasVoted) return;
            userRating = star.dataset.value;
            updateStarSelection();
        });
    });

    submitButton.addEventListener('click', () => {
        if (hasVoted || userRating === 0) return;
        
        mockServerData.totalRating += parseInt(userRating);
        mockServerData.voteCount += 1;

        localStorage.setItem('hasVoted', 'true');
        hasVoted = true;

        updateResults();
    });

    // Simulating server loading
    updateResults();
});
