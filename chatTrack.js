function addUser(){
    var username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="chatTrack_room.html"
}