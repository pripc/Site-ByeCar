let index = 0;
const carouselItens = document.querySelectorAll("#moto")
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