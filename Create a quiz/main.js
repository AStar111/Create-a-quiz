//Create a Quiz
document.getElementById("btn").addEventListener("click", Clicked);
//Variables
let OutputEl = document.getElementById("result");
let Outputdl = document.getElementById("result2");
let sandy = document.getElementById("q1");
let sandya = document.getElementById("q1result");
let krusty = document.getElementById("q2");
let krustya = document.getElementById("q2result");
let pat = document.getElementById("q3");
let pata = document.getElementById("q3result");
let larry = document.getElementById("q4");
let larrya = document.getElementById("q4result");
//Functions
function Clicked() {
  i = 0;
  if (sandy.value === "sandy" || sandy.value === "sandy cheeks") {
    i += 100;
    sandya.innerHTML = "Correct";
  } else {
    sandya.innerHTML = "Incorrect";
  }

  if (krusty.value === "krusty krab") {
    i += 100;
    krustya.innerHTML = "Correct";
  } else {
    krustya.innerHTML = "Incorrect";
  }

  if (pat.value === "patrick") {
    i += 100;
    pata.innerHTML = "Correct";
  } else {
    pata.innerHTML = "Incorrect";
  }

  if (larry.value === "larry" || larry.value === "larry the lobster") {
    i += 100;
    larrya.innerHTML = "Correct";
  } else {
    larrya.innerHTML = "Incorrect";
  }
  // Outyput
  let score = i / 4;
  let outof4 = i / 100;
  //Variables
  if (score < 50) {
    Outputdl.innerHTML = "Nice try";
  } else {
    Outputdl.innerHTML = "Good job";
  }
  //Output
  OutputEl.innerHTML = `${outof4}/4 or ${score}`;

  document.getElementById("result2");
}
