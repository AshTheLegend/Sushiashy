const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validate(){
    
    let y= document.getElementById("name");
    let z = document.getElementById("pass");
    
    if(y.value=="" ){
        alert("Invalid Empty Username");
        return false;
    }
    
     else if( z.value=="" ){
        alert("Invalid Empty password.");
        return false;
    }
        return true;
}

function validate2(){

    let v= document.getElementById("username");
    let t = document.getElementById("password");
    
    if(v.value=="" ){
        alert("Invalid Empty Username");
        return false;
    }
     else if( t.value=="" ){
        alert("Invalid Empty password.");
        return false;
    }


        return true;
}