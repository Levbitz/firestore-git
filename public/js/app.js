// getting data
db.collection("hotels")
  .get()
  .then((snapshot) => {
    //console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      //console.log(doc.data());
      renderCafe(doc);
    });
  });

const cafeList = document.querySelector("#cafe-list");
// create element & render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafeList.appendChild(li);

  //delete data
}

const admin = document.querySelector("#admin");
const verified = document.querySelector("#verified");

admin.addEventListener("click", Allow);

function Allow() {
  let inputText = ` 
  <div>
  <input type="password" id="adminPass" name="name"  placeholder="Enter Passoword" />
  <button id='adminLoged'>submit</button>
  </div>
    `;
  verified.innerHTML = inputText;

  const adminLoged = document.querySelector("#adminLoged");
  adminLoged.addEventListener("click", welcome);

  function welcome() {
    const adminPass = document.querySelector("#adminPass");
    //alert("djdjdjd");

    if (adminPass.value === "111") {
      location.href = "admin.html";
    } else {
      alert("please enter correct password");
    }
  }
}
