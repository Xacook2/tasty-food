const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

// # modified: Ensure that the table is created if it doesn't already exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error('Error creating table', err.message);
    } else {
        console.log('Users table is ready or already exists.');
    }
});

function storeValue(username, password) {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
        if (err) {
            console.error('Error inserting user', err.message);
        } else {
            console.log('User stored successfully');
        }
    });
}

function authenticateUser(username, password, callback) {
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(err, row) {
        if (err) {
            console.error('Error fetching user', err.message);
            callback(err, null);
        } else {
            callback(null, row);
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const averageRatingEl = document.getElementById("average-rating");
    const totalRatingsEl = document.getElementById("total-ratings");
    const ratingSummaryEls = {
        5: document.getElementById("five-star-count"),
        4: document.getElementById("four-star-count"),
        3: document.getElementById("three-star-count"),
        2: document.getElementById("two-star-count"),
        1: document.getElementById("one-star-count")
    };

    let ratings = [];
    
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = parseInt(star.getAttribute("data-value"));
            ratings.push(rating);
            updateDisplay();
        });
    });

    function updateDisplay() {
        const totalRatings = ratings.length;
        const averageRating = (totalRatings > 0) ? (ratings.reduce((acc, val) => acc + val, 0) / totalRatings).toFixed(2) : 0.0;
        
        averageRatingEl.textContent = `Average Rating: ${averageRating} stars`;
        totalRatingsEl.textContent = `Total Ratings: ${totalRatings}`;

        const ratingSummary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        ratings.forEach(rating => {
            ratingSummary[rating]++;
        });

        for (let i = 1; i <= 5; i++) {
            ratingSummaryEls[i].textContent = ratingSummary[i];
        }

        stars.forEach(star => {
            const value = parseInt(star.getAttribute("data-value"));
            if (value <= averageRating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }
});
