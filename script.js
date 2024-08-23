// Change the target end time to November 5th, 2024
const countdownEnd = new Date("Nov 5, 2024 23:59:59").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEnd - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown-days").textContent = days;
    document.querySelector(".countdown-hours").textContent = hours;
    document.querySelector(".countdown-minutes").textContent = minutes;
    document.querySelector(".countdown-seconds").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-timer").textContent = "TIME'S UP!";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ISOr4v9ufq8OH0-8Ss_UYMq9p4-73vWbpFTYVFfq_II';
    const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=American+Politics&orientation=landscape`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.full;
            document.body.style.backgroundImage = `url(${imageUrl})`;
        })
        .catch(error => console.error('Error fetching the image:', error));
});

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
