const myHeading=document.querySelector("h1");
myHeading.textContent="My first ever Website!"



const myImage=document.querySelector("img");

myImage.onclick = () => {
    const mySrc=myImage.getAttribute("src");

    if(mySrc === "image/1.jfif"){
        myImage.setAttribute("src", "image/2.jpg");
    }else{
        myImage.setAttribute("src", "image/1.jfif");
    }};

