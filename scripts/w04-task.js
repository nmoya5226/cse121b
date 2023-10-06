/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Noe Moya",
    photo: "images/brothermoya.jpg",
    favoriteFoods: ['Pizza', 'Sloppy Joes', 'Banana Pudding', 'Cheeseburgers'],
    hobbies: ['Weightlifting', 'Gaming', 'Chess'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place: "Corpus Christi Texas",
        length: "20 years"
    }
);
myProfile.placesLived.push (
    {
        place: "Richmond, Virginia",
        length: "5 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
/* Places Lived DataList */
const dlElement = document.querySelector('#places-lived');
myProfile.placesLived.forEach(placeObj => {
  const dtElement = document.createElement('dt');
  dtElement.textContent = placeObj.place;
  const ddElement = document.createElement('dd');
  ddElement.textContent = placeObj.length;
  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});