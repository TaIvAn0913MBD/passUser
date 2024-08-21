const agenda = document.getElementById("agenda");
const addb = document.getElementById("Add");
const input = document.getElementById("input");
const done = document.getElementById("done");
let ner1 = localStorage.getItem("sigma");
const back = document.getElementById("back");
let Nzai = document.getElementById("ner");
back.onclick = butsah;
function butsah() {
  window.location.href = "index.html";
}
console.log(ner1);
Nzai.innerText = "Hello" + " " + ner1.toUpperCase();
Nzai.className = "ner";
function print() {
  if (input.value == " " || input.value == "") {
    alert("you must type something");
  } else {
    const gadna = document.createElement("div");
    const comp = document.createElement("div");
    comp.className = "comp";
    const del = document.createElement("div");
    del.className = "del";
    const edit = document.createElement("div");
    edit.className = "edit";
    const plan = document.createElement("div");
    const vr = document.createElement("div");
    function hugatsaa() {
      vr.innerText = "";
      const time = new Date();
      let day = time.getDay();
      if (day == 1) {
        vr.innerText += "Mon";
        vr.innerText += "  ";
      }
      if (day == 2) {
        vr.innerText += "Tue";
        vr.innerText += "  ";
      }
      if (day == 3) {
        vr.innerText += "Wed";
        vr.innerText += "  ";
      }
      if (day == 4) {
        vr.innerText += "Thu";
        vr.innerText += "  ";
      }
      if (day == 5) {
        vr.innerText += "Fri";
        vr.innerText += "  ";
      }
      if (day == 6) {
        vr.innerText += "Sat";
        vr.innerText += "  ";
      }
      if (day == 7) {
        vr.innerText += "Sun";
        vr.innerText += "  ";
      }
      let udur = time.getDate();
      vr.innerText += udur;
      vr.innerText += " ";
      let sar = time.getMonth();
      if (sar == 1) {
        vr.innerText += "Jan";
        vr.innerText += "  ";
      }
      if (sar == 2) {
        vr.innerText += "Feb";
        vr.innerText += "  ";
      }
      if (sar == 3) {
        vr.innerText += "Mar";
        vr.innerText += "  ";
      }
      if (sar == 4) {
        vr.innerText += "Apr";
        vr.innerText += "  ";
      }
      if (sar == 5) {
        vr.innerText += "May";
        vr.innerText += "  ";
      }
      if (sar == 6) {
        vr.innerText += "Jun";
        vr.innerText += "  ";
      }
      if (sar == 7) {
        vr.innerText += "Jul";
        vr.innerText += "  ";
      }
      if (sar == 8) {
        vr.innerText += "Aug";
        vr.innerText += "  ";
      }
      if (sar == 9) {
        vr.innerText += "Sep";
        vr.innerText += "  ";
      }
      if (sar == 10) {
        vr.innerText += "Nov";
        vr.innerText += "  ";
      }
      if (sar == 11) {
        vr.innerText += "Oct";
        vr.innerText += " ";
      }
      if (sar == 12) {
        vr.innerText += "Dec";
        vr.innerText += " ";
      }
      let tsag = time.getHours();
      vr.innerText += tsag.toString();
      vr.innerText += ":";
      let min = time.getMinutes();
      vr.innerText += min.toString();
    }
    hugatsaa();
    vr.style.color = "white";
    plan.innerText = input.value;
    plan.className = "plan";
    gadna.className = "gadna";
    const gadna2 = document.createElement("div");
    agenda.insertBefore(gadna2, agenda.firstChild);
    gadna2.appendChild(gadna);
    gadna.appendChild(plan);
    gadna.appendChild(vr);
    gadna.appendChild(del);
    gadna.appendChild(edit);
    gadna.appendChild(comp);
    del.addEventListener("click", function () {
      gadna.remove();
    });
    edit.addEventListener("click", function () {
      // let utga = prompt(
      //   "Ta odoo to do listees uurchilult hiij baina, ugee ishee bich nuu",
      //   plan.innerText
      // );
      // function davtalt() {
      //   if (utga == "" || utga == " ") {
      //     const anhaaral = document.createElement("div");
      //     anhaaral.innerText = "Ta edit hiihdee hoosonoor uurchilj bolohgui";
      //     anhaaral.className = "anhaar";
      //     gadna2.appendChild(anhaaral);
      //     setTimeout(function job() {
      //       utga = prompt("Ta dahin oroldoj baina", plan.innerText);
      //       anhaaral.remove();
      //     }, 5000);
      //   } else {
      //     plan.innerText = utga;
      //   }
      // }
      // davtalt();
      // if (utga == "" || utga == " ") {
      //   davtalt();
      // }
      let shine = document.createElement("input");
      let duus = document.createElement("button");
      shine.className = "shineI";
      duus.className = "duus";
      duus.innerText = "Press me when done";
      shine.value = plan.innerText;
      gadna2.appendChild(shine);
      gadna2.appendChild(duus);
      duus.addEventListener("click", function aril() {
        plan.innerText = shine.value;
        shine.remove();
        duus.remove();
      });
    });
    comp.addEventListener("click", function () {
      alert("Congrats" + " " + ner1.toUpperCase());
      done.appendChild(gadna);
      del.remove();
      edit.remove();
      plan.style.width = "100%";
      comp.remove();
      gadna.classList.remove("gadna");
      gadna.classList = "gadna1";
    });
    input.value = "";
  }
}
addb.onclick = print;
