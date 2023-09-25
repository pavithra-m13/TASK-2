document.addEventListener("DOMContentLoaded", function () {
    let countdownInterval; // Store the interval ID for the countdown

    // Get the countdown elements
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const countdownElement = document.getElementById("countdown");

    // Get the start button element
    const startButton = document.getElementById("startButton");

    // Get the stop button element
    const stopButton = document.getElementById("stopButton");

    // Function to update the countdown
    function updateCountdown() {
        let hours = parseInt(hoursInput.value);
        let minutes = parseInt(minutesInput.value);
        let seconds = parseInt(secondsInput.value);
    
        if (hours < 0 || minutes < 0 || seconds < 0) {
            alert("Please enter valid values for hours, minutes, and seconds.");
            clearInterval(countdownInterval);
            return;
        }
    
        if (hours === 0 && minutes === 0 && seconds === 0) {
            // When the countdown reaches zero, you can perform any action here.
            countdownElement.innerText = "Time's up!";
            clearInterval(countdownInterval); // Stop the countdown interval
        } else {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        // The countdown is complete
                        countdownElement.innerText = "Time's up!";
                        clearInterval(countdownInterval);
                        return;
                    }
                    hours--;
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }
    
            // Update the input values with the new time
            hoursInput.value = hours.toString().padStart(2, "0");
            minutesInput.value = minutes.toString().padStart(2, "0");
            secondsInput.value = seconds.toString().padStart(2, "0");
    
            countdownElement.innerText = `${hoursInput.value}:${minutesInput.value}:${secondsInput.value}`;
        }
    }
    

    // Event listener for the start button click
    startButton.addEventListener("click", function () {
        // Disable the start button and enable the stop button
        startButton.disabled = true;
        stopButton.disabled = false;

        // Start the countdown and store the interval ID
        countdownInterval = setInterval(updateCountdown, 1000);
    });

    // Event listener for the stop button click
    stopButton.addEventListener("click", function () {
        // Enable the start button and disable the stop button
        startButton.disabled = false;
        stopButton.disabled = true;

        // Stop the countdown interval and clear the interval ID
        clearInterval(countdownInterval);
    });
});
