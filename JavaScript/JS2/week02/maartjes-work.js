//Program that computes how much Maartje has earned by completing these tasks

"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
  {
    name: "Fix homework for class10",
    duration: 20,
  },
  {
    name: "Talk to a lot of people",
    duration: 200,
  },
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 240,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "Staring out the window",
    duration: 10,
  },
  {
    name: "Talk to a lot of people",
    duration: 200,
  },
  {
    name: "Look at application assignments new students",
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  const taskEarnings = tasks
    .filter((task) => task.duration >= 120)
    .map((task) => (task.duration / 60) * hourlyRate);

  return taskEarnings.reduce(
    (earnings, taskEarning) => earnings + taskEarning,
    0
  );
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

const roundedEarnings = earnings.toFixed(2);

console.log('Program that computes how much Maartje has earned by completing these tasks');
console.log(`Maartje has earned €${roundedEarnings}`);

// // Do not change or remove anything below this line
// module.exports = {
//   maartjesTasks,
//   maartjesHourlyRate,
//   computeEarnings,
// };
