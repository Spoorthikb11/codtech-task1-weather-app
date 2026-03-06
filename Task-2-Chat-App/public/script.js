const socket = io();

function sendMessage(){
const username = document.getElementById("username").value;
const message = document.getElementById("messageInput").value;

socket.emit("chat message", {
username: username,
message: message
});

document.getElementById("messageInput").value = "";
}

socket.on("chat message", (data) => {
const div = document.createElement("div");
div.innerHTML = "<b>" + data.username + "</b>: " + data.message;
document.getElementById("messages").appendChild(div);
});
