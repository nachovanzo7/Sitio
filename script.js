document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");

    const inviteBtn = document.getElementById("invite-btn");
    inviteBtn.addEventListener("click", function() {
        music.play(); // La música comienza a reproducirse cuando se hace clic
        alert("¡MERCAAAAAAAAAAA🎉");
    });
});