//document.querySelector("li:first-child").style.color = "darkblue";
//document.querySelector("li:last-child").style.color = "lightblue";
//document.querySelector("li:nth-child(1)").style.color = "#7b68ee";
//document.querySelector("li:nth-child(2)").style.color = "#a9a9ff";
//document.querySelector("li:nth-child(3)").style.color = "#5b5bff";
//document.querySelector("li:nth-child(4)").style.color = "#0d0dff";
//document.querySelector("li:nth-child(5)").style.color = "#0000b7";
//document.querySelector("li:nth-child(6)").style.color = "#00006f";
//document.querySelector("li:nth-child(7)").style.color = "#000027";

let elemByTagName = document.getElementsByTagName("li");
console.log(elemByTagName);
console.log(elemByTagName[1].textContent);
console.log(elemByTagName[2].textContent);
console.log(elemByTagName[3].textContent);
elemByTagName[0].style.color = "#a9a9ff";
elemByTagName[1].style.color = "#0d0dff";
elemByTagName[2].style.color = "#00006f";




//let ingredientsElem = document.querySelectorAll(".message li");
//
//for(let i = 0; i < ingredientsElem.length; i++){
//    console.log(ingredientsElem[i].textContent);
//    if (isEven(i)){
//        ingredientsElem[i].style.color = "purple";
//        ingredientsElem[i].style.fontSize = "1.1rem";
//        ingredientsElem[i].style.listStyleType = "circle";
//    }        
//    else{
//        ingredientsElem[i].style.color = "#7d6a49";
//        ingredientsElem[i].style.fontSize = "1.1rem";
//        ingredientsElem[i].style.listStyleType = "square";
//    }
//    
//}
//
//function isEven(value){
//    if (value%2 == 0)
//        return true;
//    else
//        return false;
//}
