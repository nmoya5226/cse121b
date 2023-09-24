/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Noe Moya';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = 'images/brothermoya.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img[src='images/brothermoya.png']");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['Pizza', 'Cheeseburgers', 'Ice Cream', 'Sloppy Joes', 'Spaghetti', 'Chocolate'];
const anotherFavoriteFood = "Chicken Parmesean";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;