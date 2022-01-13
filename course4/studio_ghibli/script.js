const mainElement = document.querySelector('main');

let filmData;

async function getFilms() {
    const filmPromise = await fetch('https://ghibliapi.herokuapp.com/films');
    const films = await filmPromise.json();

    setSort(films);
    addCard(films);
    filmData = films;

    document.querySelector('#sortorder').removeAttribute('disabled');
}
getFilms();

function addCard(array) {
    array.forEach( EachItem => {
        createCard(EachItem);
    })
}

function createCard(data) {
    const card = document.createElement('article');

    const movieTitle = document.createElement('h2');
    const movieTitleTxt = document.createTextNode(data.title);
    movieTitle.appendChild(movieTitleTxt);

    const director = document.createElement('p');
    const directorTxt = document.createTextNode(`Director: ${data.director}`);
    director.appendChild(directorTxt);

    const year = document.createElement('p');
    const yearTxt = document.createTextNode(`Released: ${data.release_date}`);
    year.appendChild(yearTxt);

    const description = document.createElement('p');
    const descriptionTxt = document.createTextNode(`Description: ${data.description}`);
    description.appendChild(descriptionTxt);

    const score = document.createElement('p');
    const scoreTxt = document.createTextNode(`Rotten Tomatoes score: ${data.rt_score}`);
    score.appendChild(scoreTxt);

    card.appendChild(movieTitle);
    card.appendChild(director);
    card.appendChild(year);
    card.appendChild(description);
    card.appendChild(score);

    mainElement.appendChild(card);
}


document.querySelector('#sortorder').addEventListener('change', () => {
    mainElement.innerHTML = '';
    setSort(filmData);
    addCard(filmData);
});

function setSort(array) {
    const sortOrder = document.querySelector('#sortorder').value;
    switch(sortOrder) {
        case 'title': array.sort((a,b) => (a.title > b.title) ? 1 : -1); break;
        case 'release_date': array.sort((a,b) => (a.release_date > b.release_date) ? 1 : -1); break;
        case 'rt_score': array.sort((a,b) => (parseInt(a.rt_score) > parseInt(b.rt_score)) ? -1 : 1); break;
    }
}