var countriesArray = [
    {
        title: 'Scotland',
        image: "/images/scotland.jpg",
        description: "Scotland, the U.K.’s northernmost country, is a land of mountain wildernesses such as the Cairngorms and Northwest Highlands, interspersed with glacial glens (valleys) and lochs (lakes)."
    },
    {
        title: "India",
        image: "/images/india.jpg",
        description: "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. "
    },
    {
        title: "Argentina",
        image: "/images/argentina.jpg",
        description: "Argentina is a massive South American nation with terrain encompassing Andes mountains, glacial lakes and Pampas grassland, the traditional grazing ground of its famed beef cattle."
    },
    {
        title: "Japan",
        image: "/images/japan.jpg",
        description: "Japan is an island nation in the Pacific Ocean with dense cities, imperial palaces, mountainous national parks and thousands of shrines and temples."
    },
    {
        title: "New Zealand",
        image: "/images/newzealand.jpg",
        description: "New Zealand is a country in the southwestern Pacific Ocean consisting of 2 main islands, both marked by volcanoes and glaciation."
    },
    {
        title: "Canada",
        image: "/images/canada.jpg",
        description: "Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north."
    }
];

// ************************Print to Dom************************ //

function printToDom(domString, id){
    document.getElementById(id).innerHTML += domString;
}

// ************************Dom String*************************** //

function countryDomString (array) {
    for(let i = 0; i < array.length; i++){
        const country = array[i];
        let domString = "";
        domString += `<div class='country-card'>`;
        domString +=    `<h3> ${country.title}</h3>`;
        domString +=    `<img src="${country.image}">`;
        domString +=    `<form class='form'><textarea id='diaryEntry' placeholder='Write about your experience here'></textarea></form>`;
        domString +=    `<button class='submit'>Submit</button>`;
        domString += `</div>`;
        printToDom(domString, "card-holder");
    }
}
countryDomString(countriesArray);

// ***********************Event Listeners************************ //


const allTheButtons = document.getElementsByClassName('submit');

for (let i = 0; i < allTheButtons.length; i++) {
    let diaryString = [];
    allTheButtons[i].addEventListener('click', (e) => {
        const diaryEntry = e.target.parentNode.children[2].children[0].value;
        const countryName = e.target.parentNode.children[0].innerHTML;
        let domString = "";
        domString += `<div class="diary-card">`;
        domString +=    `<button class="del-btn">Delete</button>`;
        domString +=    `<h1> ${countryName} </h1>`;
        domString +=    `<p> ${diaryEntry} </p>`;
        domString += `</div>`;
        diaryString.push(domString);
        printToDom(diaryString, "diary-container");
        console.log("diary string", diaryString);
        allTheButtons[i].parentNode.children[2].children[0].value = "";
        allTheButtons[i].parentNode.classList.add('visited');
        addDiaryListeners();
    });
}

const deletePost = (event) => {
    event.srcElement.parentElement.remove();
}

const addDiaryListeners = () => {
    [...document.getElementsByClassName('del-btn')].forEach(btn => {
        btn.addEventListener('click', deletePost);
    });
}