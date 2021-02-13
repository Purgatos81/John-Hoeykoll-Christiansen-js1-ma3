//Question 2

const GamesAPI = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const GamesContainer = document.querySelector(".games-container");
GamesContainer.innerHTML = "Loading..";

async function listGames() {
    
    GamesContainer.innerHTML = "";
    const response = await fetch(GamesAPI);

    const listed = await response.json();

    const ListOfGames = listed.results;

    //console.log(ListOfGames);

    for(let i = 0; i < 8; i++) {
        console.log(ListOfGames[i].name);

        GamesContainer.innerHTML += `<div><h2>GAME: ${ListOfGames[i].name}</h2>
        <p>Rating: ${ListOfGames[i].rating}</p>
        <p>Number of tags: ${ListOfGames[i].tags.length}</p>
        </div>
        `
    }

}

try {
    listGames();
}
catch(error) {
    console.log("error occured ", error);
    GamesContainer.innerHTML = `<h2 style="color: red;">Sorry, something went wrong ${error}</h2>`;
}






