userClickPattern = []

$(".btn").click(function () {
    var userChooseAnimal = $(this).attr("id");
    userClickPattern.push(userChooseAnimal);

    playSound(userChooseAnimal);
    animatePress(userChooseAnimal)
})


function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(name) {
  $("#" + name).addClass("pressed");
  playImage(name)
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 1000);
}


function playImage(name) {
  $(`#${name}>img`).attr("src", `images/${name}.gif`);
}





