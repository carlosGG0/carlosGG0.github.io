const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/google-icon.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else if (myName === "PichaGorda"){
        alert("Por favor, sea honesto");
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello, ${myName}`      
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}
