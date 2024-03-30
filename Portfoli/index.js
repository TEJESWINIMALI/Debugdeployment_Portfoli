let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("Submit");
let bar = document.getElementById("bar");

cvBtn.addEventListener("click",function(){
    alert ("Downlode Successfully")
})


Submit.addEventListener("click",function(){
    
    let email =document.getElementById("email");
   // let pass =document.getElementById("pass");

  if(email.value ==" "&& pass.value==""){
alert ("Fill detail")

  } else {
    alert("logg In Successfuly")
  }

})



let ul = document.querySelector("ul");
bar.addEventListener("click",function(){
  ul.classList.toggle("showData");

    if(ul.className == "ShowData"){
      bar.className = "fa-solid fa-xamark"
    }

    else{
      bar.className = "fa-solid fa-bars"
    }
  
})


