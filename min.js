// // if statment 
// let square = document.querySelectorAll(".square");
// let squareOneElement = document.getElementsByClassName("square")[0];
// let mainContatiner = document.getElementsByClassName("content")[0];


// let roll = document.getElementById("roll");
// let menuProjects = document.getElementById("project-menu")
// let projects = document.getElementById("projects");
// //show roll


// let hideText = document.getElementById("hide-text");
// let closeText = document.getElementById("close");


// let logo = document.getElementById("logo");

// squareOneElement.addEventListener("click", function(){
//     if(roll.classList.contains("active")){
//         roll.style.display = "none";
//         roll.classList.remove("active")
//         hideText.style.display = "flex";
//         closeText.style.display = "none";
//     }else{
//         roll.classList.add("active")
//         roll.style.display = "flex";
//         hideText.style.display = "none";
//         closeText.style.display = "flex";
//     }
// });

// menuProjects.addEventListener("click", function(){
//     if(projects.classList.contains("active")){
//         projects.style.display = "none";
//         projects.classList.remove("active")
//     }else{
//         projects.classList.add("active")
//         projects.style.display = "flex";
//     }
// });


document.addEventListener('click', (event)=>{
    if(!menuMobile.contains(event.target) && !menuIcon.contains(event.target)){
        menuMobile.classList.remove("show")
        openIcon.style.display = "flex"
        closeIcon.style.display = "none"
    }
})



// move animation

let myProjects = document.getElementById("my-projects");
let nodeList = document.getElementById("square-box")
let menuIcon = document.getElementById("menu");
let menuMobile = document.getElementsByClassName("extra-menu")[0];

let openIcon = document.getElementById("open");
let closeIcon = document.getElementById("close")

let newIcon = document.createElement("div");
newIcon.innerHTML = `<i class="fa-solid fa-xmark" style="color: #000000;"></i>`;






menuIcon.addEventListener("click", function(){
    if(menuMobile.classList.contains("show")){
        menuMobile.classList.remove("show")
        openIcon.style.display = "flex"
        closeIcon.style.display = "none"
    }else{
        menuMobile.classList.add("show");
        openIcon.style.display = "none"
        closeIcon.style.display = "flex"
    }
})



// up button


let upButton = document.getElementById("up");

upButton.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
    upButton.style.display = "none";
});


window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        upButton.style.display = "inline";
    } else {
        upButton.style.display = "none";
    }
});

// addEventListener("scroll", function(){
//     upButton.style.display = "block"
// })



// myProjects.addEventListener("click", function(){
//     nodeList.remove();
//     menuIcon.style.display = "block";
// })

// menuIcon.addEventListener("click", function(){
//     menuMobile.style.display = "flex";
//     menuMobile.style.flexDirection = "column"
// })


// function removeSquare(){
//     myProjects.addEventListener("click", function(){
//         nodeList.remove();
//         menuIcon.style.display = "block";
//     })
// };








// myProjects.addEventListener("click", function(){
//         moveToLeftCorner();
// })


// function moveToLeftCorner(){
//     nodeList.style.justifyContent = "flex-start";
//     // nodeList.style.alignItems = "flex-start";
//     squareOneElement.classList.add("corner-box");
//     roll.style.display = "none";
//     roll.classList.remove("active")
//     closeText.style.display = "none";
//     hideText.style.display = "flex";
//     // mainContatiner.insertBefore(squareOneElement, logo);
//     // mainContatiner.style.display = "flex";
//     // mainContatiner.classList.add("open");
// }













// let squareArray = Array.from(square);
// console.log(squareArray);
// let buttonBlue = document.getElementById("blue");
// let buttonBlack = document.getElementById("black");
// // const computedStyle = window.getComputedStyle(square);
// // //begining
// // let background = computedStyle.backgroundColor;

// function checkBC(color){
//     if(color === 'black' || color=== "rgb(0, 0, 0)" || color  === '#000'){
//         console.log("this is the fucking black square");
//     }else{
//         console.log("huraa this is not a black square");
//     }
// }




// let actualBackgroundColor;



// buttonBlue.addEventListener("click", function(){
//     squareArray.forEach((squareArray) => {
//         squareArray.style.backgroundColor = "blue";

//         const computedStyle = window.getComputedStyle(this);
//         const actualBackgroundColor = computedStyle.backgroundColor;
//         console.log(actualBackgroundColor);
//       });
// });

// buttonBlack.addEventListener("click", function(){
//     squareArray.forEach((squareArray) => {
//         squareArray.style.backgroundColor = "black";
//         const computedStyle = window.getComputedStyle(this);
//         const actualBackgroundColor = computedStyle.backgroundColor;
//       });
// });


// // buttonBlack.addEventListener("click", function(){
// //     square.style.setProperty("--my-background-color", "black");
// //     clone.style.setProperty("--my-background-color", "black");
// //     let backgroundNew = computedStyle.backgroundColor;
// //     checkBC(backgroundNew);
// // });

// // next task 

// let removeSquare = document.getElementById("minus");
// let addSquare = document.getElementById("plus");




// removeSquare.addEventListener("click",function(){
//     const lastChild = nodeList.lastElementChild;
//     if(lastChild){
//         lastChild.remove();
//         squareArray.pop();
//         console.log(squareArray);
//     }
// })

// let squareUpdate = document.querySelectorAll(".square");


// addSquare.addEventListener("click", function(){
//     let newDiv = document.createElement('div');
//     newDiv.classList.add("square");
//     newDiv.innerHTML = "SQUARE";
//     nodeList.appendChild(newDiv);
//     squareArray.push(newDiv);
//     console.log(squareArray);
//     newDiv.style.backgroundColor = actualBackgroundColor;
// })