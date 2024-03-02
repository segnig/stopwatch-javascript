// Get the display element from the DOM
const display = document.getElementById('display');
const lapTimesElement = document.querySelector('.lap-times');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapTimers = [];

/**
 * Stops the timer and updates the elapsed time.
 */
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

/**
 * Starts the timer with an optional starting time.
 *
 * @param {number} [startingTime=0] - The time in milliseconds since the timer was last stopped or reset.
 */
function start(startingTime = 0) {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime - startingTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

/**
 * Resets the timer and clears the lap times.
 */
function reset() {
    stop();
    elapsedTime = 0;
    lapTimers = [];
    display.textContent = '00:00:00:000';

    if (lapTimesElement) {
        lapTimesElement.innerHTML = '';
    }
}

/**
 * Captures a lap time and updates the lap times display.
 */
function lap() {
    if (isRunning && lapTimesElement) {
        const currentTime = Date.now();
        const lapTime = currentTime - startTime;

        const hours = Math.floor(lapTime / (1000 * 60 * 60));
        const minutes = Math.floor((lapTime / (1000 * 60)) % 60);
        const seconds = Math.floor((lapTime / 1000) % 60);
        const milliseconds = Math.floor(lapTime % 1000);

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
          seconds
        ).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;

        lapTimers.push(formattedTime);

        const liElement = document.createElement('li');
        liElement.textContent = formattedTime;

        if (lapTimesElement) {
          lapTimesElement.appendChild(liElement);
        }
        console.log(lapTimers);

    }
}

/**
 * Updates the timer display with the current time.
 */
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor(elapsedTime % 1000);

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;

    if (display) {
        display.textContent = formattedTime;
    }
}