// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();



// const timerDisplay = document.querySelectorAll(".timer");

// get the stored value in localStorage

// let timeVisits = Number(window.localStorage.getItem("visits-time"));


// const timerDisplay =  Date.now();

// // determine when starts to count.
// if (timeVisits < numVisits) {
// 	timerDisplay.textContent = timeVisits;
// }

// store the new number of visits value

// localStorage.setItem("visits-time", timeVisits);
