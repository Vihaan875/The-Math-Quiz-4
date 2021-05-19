function addUser()
{
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;

    localStorage.setItem("player1 Name",player1_name);
    localStorage.setItem("player2 Name",player2_name);

    window.location ="quiz_game_page.html";
}