const getColor=()=>{
    //hexadecial number System
    const randomNumber= Math.floor(Math.random() * 1677215);
    const randomCode="#" + randomNumber.toString(16);
    //console.log(randomNumber,randomCode);
   document.body.style.backgroundColor = randomCode;
   document.getElementById("color-code").innerHTML = randomCode;
   navigator.clipboard.writeText(randomCode)
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//intial part 
getColor();