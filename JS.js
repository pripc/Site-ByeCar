
setInterval(AutomaticCarousel, 50000);
let index = 0;
const carouselItens = document.querySelectorAll("#moto") //seleciona uma array de elementos que fazem parte do carrosel//
const MoreInformation = document.querySelectorAll(".cardInformation")

function showCard(){
if (carouselItens[index].style.visibility = "visible"){
    MoreInformation[index].style.display = "block";
}
}

function closeWindow(index){
    MoreInformation[index].style.display="none";
}

function AutomaticCarousel(){
    if(index < carouselItens.length - 1){
        index++
        carouselItens[index].scrollIntoView({ behavior: "smooth" })
    }if (index = carouselItens.length -1){
        index = 0
        carouselItens[index].scrollIntoView({ behavior: "smooth" })
    }
}

function goNext(){
    if(index === (carouselItens.length) - 1){
        index = 0
    }else{
        index++
    }
    carouselItens[index].scrollIntoView({behavior:"smooth"});
}
function goBack(){
    if(index === 0){
        index = carouselItens.length - 1
    }else{
        index--
    }
    carouselItens[index].scrollIntoView({behavior:"smooth"});
}
setInterval(AutomaticCarousel,5000)  




