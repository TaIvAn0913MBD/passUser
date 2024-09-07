const email = document.getElementById("Email");
const number = document.getElementById("Number");
const password = document.getElementById("Password");
const btn = document.getElementById("btn");
const clP = document.getElementById("clP");
const clNer = document.getElementById("clNer");
const clN = document.getElementById("clN");
const clE = document.getElementById("clE");
const ner = document.getElementById("Name");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const parroli = "Montuul08";
const sobaka = "jtjmgl09@gmail.com";
const koshka = "95184503";
const input1 = document.getElementsByClassName("input1")[0];
const eye = document.getElementsByClassName("eye")[0];
password.type = "none";
function harah() {
  let hh = password.type;
  if (hh.toString() == "password") {
    password.type = "none";
    eye.style.backgroundImage = "url('./remove.png')";
  } else {
    password.type = "password";
    eye.style.backgroundImage = "url('./remove11.png')";
  }
}
eye.onclick = harah;
clP.addEventListener("click", function () {
  password.value = "";
});
clN.addEventListener("click", function () {
  number.value = "";
});
clE.addEventListener("click", function () {
  email.value = "";
});
clNer.addEventListener("click", function () {
  ner.value = "";
});
let chuhal = 0;
const uildel = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
function ValidEmail() {
  const EValue = email.value;
  if (EValue.includes("@")) {
    console.log("nice");
    chuhal += 1;
  } else {
    alert("Your email is unvalid, your email must have @.");
  }
}
function ValidName() {
  let NerValue = ner.value;
  localStorage.setItem("sigma", NerValue);
}
function ValidNumber() {
  let NValue = number.value;
  let too = 0;

  if (NValue.length === 8) {
    for (let i = 0; i < alphabet.length; i++) {
      if (NValue.includes(alphabet[i])) {
        too += 1;
      }
    }
    if (too > 0) {
      alert("Your phone is invalid");
    } else {
      console.log("nice");
      chuhal += 1;
    }
  } else {
    alert(
      "Your phone number is unvalid, it must have 8 numbers, and no letters"
    );
  }
}
function ValidPass() {
  let PValue = password.value;
  let useg = 0;
  let too = 0;
  if ((PValue.length = 7)) {
    for (let i = 0; i < alphabet.length; i++) {
      if (PValue.includes(alphabet[i])) {
        useg += 1;
      }
    }

    if (useg > 0) {
      chuhal += 1;
    }

    for (i = 0; i < uildel.length; i++) {
      if (PValue.includes(uildel[i])) {
        too += 1;
      }
    }

    if (too > 0) {
      chuhal += 1;
    }
  } else {
    alert("Your password is unvalid, it must have 8 total numbers and letters");
  }
  if (useg > 0 && too > 0) {
  } else {
    if (useg > 0 && too == 0) {
      alert("Your password don't have any numbers");
    }
    if (useg == 0 && too > 0) {
      alert("Your password don't have any letters");
    }
    if (useg == 0 && too == 0) {
      alert("Your password don't have any letters and numbers");
    }
  }
}
btn.addEventListener("click", function () {
  ValidEmail();
  ValidNumber();
  ValidPass();
  ValidName();
  if (chuhal == 4) {
    window.location.href = "ToDo.html";
  }
  chuhal = 0;
});
