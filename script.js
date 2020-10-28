

let imgEl= document.querySelector("img");
console.log(imgEl);

function changelogo() {

    let imgSrs = imgEl.getAttribute("src");
    console.log(imgSrs)

if( imgSrs === "img/logo_yelow_.png"){
   imgEl.setAttribute("src","img/logo_green.png") 
}
else{
    imgEl.setAttribute("src","img/logo_yelow_.png")
}

}

imgEl.addEventListener("click",changelogo)
//changelogo();

// imgchange.addEventListener("click",change)



// function change(){


//     // let img = imgchange.getAttribute("src");
//     console.log("dfdsfdsf");


//     // if(img==)
//     // imgchange.setAttribute("src")
// }