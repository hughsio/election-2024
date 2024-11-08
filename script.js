function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('todays-date').textContent = formattedDateTime;
}

// Update date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Change the target end time to November 5th, 2024
const targetDate = new Date(2024, 10, 5, 0, 0, 0).getTime(); // November 5, 2024, at 00:00:00

// Function to calculate and update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown display
    document.querySelector("#days-label").textContent = days;
    document.querySelector("#hours-label").textContent = hours;
    document.querySelector("#minutes-label").textContent = minutes;
    document.querySelector("#seconds-label").textContent = seconds;

    // If the countdown is finished, display a message
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        const endMessage = "America deserves better"; // Customize this message
        document.getElementById("countdown-timer").innerHTML = `<h1>${endMessage}</h1>`;
    }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
