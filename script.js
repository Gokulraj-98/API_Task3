var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

var parentDiv = document.createElement("div");
parentDiv.innerHTML = `<h4>ஆயிரத்தி முந்நூற்றி முப்பது திருக்குறள்களில் தாங்கள் படிக்க விரும்பும் குறள் ?<br></h4>`;
parentDiv.className = "main";

var num_inp = document.createElement("input");
num_inp.setAttribute("type", "number");
num_inp.id = "num";

var button = document.createElement("button");
button.innerHTML = "click me";
button.className = "btn btn-primary";
button.addEventListener("click", displayQuotes);

parentDiv.append(num_inp, button);
document.body.append(parentDiv);

async function displayQuotes() {
  var input = document.getElementById("num").value;
  var res = await fetch(
    `https://getthirukkural.appspot.com/api/3.0/kural/${input}?appid=ooyyb0b4rdthi&format=json`
  );
  var res_1 = await res.json();
  console.log(res_1);
  console.log(input);

  var col = document.createElement("div");
  col.className = "displaydiv";
  col.innerHTML = `
  <p><h6><b>குறள்</b></h6>${res_1.line1}<br>${res_1.line2}</p>
    <p> <h6><b>விளக்கம் 1</b></h6>${res_1.urai3}</p>
    <p> <h6><b>இயல்</b></h6>${res_1.iyal}</p>
    <p><h6><b>விளக்கம் 1</b></h6>${res_1.urai1}</p>
    <p><h6><b>மொழிபெயர்ப்பு</b></h6>${res_1.translation}</p>
    <p> <h6><b>athigaram</b></h6>${res_1.athigaram}</p>
    `;
  parentDiv.append(row);
  row.append(col);
  container.append(row);
  document.body.append(container);

  //foo(res_1);
}
