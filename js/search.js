function searchGames() {
    // Get the search query
    let input = document.getElementById('search-bar').value.toLowerCase();
    
    // Get all the game tiles
    let games = document.querySelectorAll('.game-tile');

    // Loop through the game titles and hide those that don't match the query
    games.forEach(function(game) {
        let gameTitle = game.querySelector('.game-title').textContent.toLowerCase();
        if (gameTitle.includes(input)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
}
