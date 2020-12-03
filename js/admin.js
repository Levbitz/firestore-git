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

const HotelLists = document.querySelector("#cafe-list");
// // create element & render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  HotelLists.appendChild(li);

  //delete data

  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("hotels").doc(id).delete();
  });
}

const form = document.querySelector("#add-cafe-form");

// // saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("hotels").add({
    name: form.name.value,
    city: form.city.value,
  });
  form.name.value = "";
  form.city.value = "";
});

//alternative

//    let output = "";
//     snapshot.docs.forEach((doc) => {
//       //console.log(doc.data());
//       //renderCafe(doc);
//       output += `
//          <span span class="docId">${doc.id}</span>
//          <span>  ${doc.data().name}</span>
//   <span>${doc.data().city}</span>
//   <div id="deletion">  x</div>
//   <hr>
//  `;
//     });

//     const HotelLists = document.querySelector("#cafe-list");
//     HotelLists.innerHTML = output;

//     deletion.addEventListener("click", (e) => {
//       e.stopPropagation();
//       let id = e.target.parentElement.getAttribute("data-id");
//       db.collection("hotels").doc(id).delete();
//     });
//   });
