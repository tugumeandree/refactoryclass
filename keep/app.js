// fetch() //works with json
//import and export


import { babyDummyData } from "./babiesdata.js"
console.log(babyDummyData);

//GET
const babyList = document.getElementById('babies-list');

babyDummyData.babies.forEach(baby =>{
    //CREATE
const babyDataLi = document.createElement('div');
    
    babyDataLi.innerHTML = `
    <div class="row">
      <div class="col s12"><h2> ${baby.name}</h2>
      <p>Age: ${baby.age}</p>
      <p>Gender:${baby.gender}</p>
      <p>Location:${baby.location}</p>
      <p>Fees In UGX:${baby.feeInUgx}</p>
      <img src = "${baby.image}"  alt = "${baby.name}" style="max-width:100px;"></div>
    </div>
    
    `;
    
    babyList.appendChild(babyDataLi);

})

