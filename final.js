function validatehiring() {
  var radio = document.getElementById("hiring");
  var hiring_form = document.getElementById("hiring_form");

  if (radio.checked) {
    hiring_form.style.display = "block";
  } else {
    hiring_form.style.display = "none";
  }
}
