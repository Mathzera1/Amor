document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2025-02-20T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Chegou o grande dia!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // First call immediately
    setInterval(updateCountdown, 1000); // Call every second
});
