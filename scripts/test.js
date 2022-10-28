const myImage=document.querySelector("img");

myImage.onclick = function() {
    const mySrc=myImage.getAttribute("src");
    if (mySrc === 'image/1.jfif'){
        myImage.setAttribute('src', 'image/2.jpg');
    }else{
        myImage.setAttribute('src', 'image/1.jfif');
    }
};



let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("What is your name?");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem ("name", myName);
    myHeading.textContent = `I have to learn, ${myName}`;
}
}


if(!localStorage.getItem("name")){
   setUserName();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent = `I have to learn, ${storedName}`; 
}

myButton.onclick = () =>{
    setUserName();
};
