function addUser()
{
    username = document.getElementById("user_name").innerText;
    localStorage.setItem(username, "username");
    window.location = "kwitter_room.html";
}