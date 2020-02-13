const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchData();
});

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( contact => console.log(contact) )
}

function renderInfo(contact){
  const fullName = document.getElementById('fullname')
  fullName.textContent = contact.name.title
  console.log(fullName)
}
