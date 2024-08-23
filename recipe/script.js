
const sqlite3 = require('sqlite3').verbose(); // Import the sqlite3 library

// Open a connection to the SQLite database
const db = new sqlite3.Database('database.db');

// SQL statement to create the table if it doesn't already exist
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS users (
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    rating INT NOT NULL
  )
`;

function storeValue() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
}

function storeValue1() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
}

// Function to show ingredients in metric units
function showMetric() {
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'none');
}

// Function to show ingredients in imperial units
function showImperial() {
    document.querySelectorAll('.imperial').forEach(el => el.style.display = 'list-item');
    document.querySelectorAll('.metric').forEach(el => el.style.display = 'none');
}

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
