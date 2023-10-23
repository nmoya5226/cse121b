/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement= document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
     temples.forEach(temple => {
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
     })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if (response.ok) {
            const data = await response.json();
            templeList = data;
            displayTemples(templeList);
        } else {
            console.error('Failed to fetch data.');
        }
    } catch (error) {
        console.error('An error occured:', error);
    }
};

/* reset Function */
const reset = () => {
    const articleElements = templesElement.querySelectorAll('article');
    articleElements.forEach(article => {
        article.remove();
    });
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('utah')));
            break;

        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case 'all':
            displayTemples(temples);
            break;

        default:
            console.error('Invalid filter value');
            break;
    }
};
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});

getTemples();

/* Event Listener */
const sortBySelect = document.getElementById('sortBy');
sortBySelect.addEventListener('change', () => {
  sortBy(templeList);
});
