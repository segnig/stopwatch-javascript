# Timer App README

This is a simple timer application that allows users to start, stop, reset the timer, capture lap times, and display them. Below is a brief overview of the functions and features of this timer app:

## Functions

### `stop()`
- Stops the timer and updates the elapsed time.

### `start(startingTime = 0)`
- Starts the timer with an optional starting time.

### `reset()`
- Resets the timer and clears the lap times.

### `lap()`
- Captures a lap time and updates the lap times display.

### `update()`
- Updates the timer display with the current time.

## Implementation Details

- The timer starts with an initial value of 00:00:00:000.
- The timer updates every 10 milliseconds.
- Lap times are displayed in the format HH:MM:SS:SSS.
- Lap times are stored in an array and displayed on the webpage.

## How to Use

1. Include the necessary HTML elements for display and lap times.
2. Initialize the timer variables and set up event listeners.
3. Call the respective functions (`start()`, `stop()`, `reset()`, `lap()`) based on user interactions.
