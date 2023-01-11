# Site-ByeCar
------------------------- HTML -----------------------------------------

O HTML foi divido em duas partes: 'header' e 'main'

No 'header' foram posicionados a Logo DNC e o nome da marca de aluguel de motos conforme segue: 

    <header>
        <img src="images/logo.svg" alt="Logo of DNC school">
        <img id="logo" src="images/companyName.svg" alt="ByeCar Company Name">
    </header>


Já a sessão 'main' foi subdividida em duas divs conforme explicado abaixo:

Na primeira foi inserido todo o bloco a esquerda do site:

        <div>
            <h2>Ter <strong>uma moto</strong> por asinatura nunca foi tão fácil</h2>
            <img id="woman" src="images/woman.svg" alt="woman driving a motorcycle">
        </div>

  ![image](https://user-images.githubusercontent.com/117996744/211405006-2aeb056b-cbfd-432b-a18a-c2ee91a86110.png)
  
  E na segunda foi inserido todo o bloco a direita do site:

        <div>
            <div>
                <h2>Conheça nossas <spam><strong>motos</strong></spam>!</h2>   
            </div>
            <div id="cart">
               <button onclick="goBack()">
                <img width="37px" src="images/leftArrow.svg" alt="">
               </button> 
            <ul class="carousel-container">
                <li id="moto">
                    <h1 class="biggerLetter"><strong>Scooter Elétrica Voltz EV1</strong></h1>
                    <img src="images/motorcycle.svg" alt="motocycle image">
                    <h2 class="mediumLetter">A partir de</h2>
                    <p class="price">R$619,90</p>
                    <h3 class="smallLetter">Plano de 30 meses</h3>
                </li>
                <li id="moto">
                    <h1 biggerLetter><strong>Scooter Elétrica Voltz EV1</strong> </h1>
                    <img src="images/honda.svg" alt="motocycle image">
                    <h2 class="mediumLetter">A partir de</h2>
                    <p class="price">R$619,90</p>
                    <h3 class="smallLetter">Plano de 30 meses</h3>
                </li>
            </ul>
            <button onclick="goNext()">
                <img width="37px" src="images/rightArrow.svg" alt="">
            </button>
            </div>
            <div id="button">
                <button onclick="showCard()">Saiba Mais</button>   
            </div>    
        </div>
  ![image](https://user-images.githubusercontent.com/117996744/211402091-3d71ed5b-a4d7-4224-a8cd-d61d74434e13.png)
  
  ------------------------- JavaScript -----------------------------------------
  1)Por meio da função showCard() é possível mostar mais informaçõe sobre a moto selecionada após clicar no botão "Saiba Mais" 
  function showCard(){
        if (carouselItens[index].style.visibility = "visible"){   //se o card resumo da moto estiver visível...//
        MoreInformation[index].style.display = "block";           //...mostre o card com detalhes sobre a moto//
        }
  }
  
![image](https://user-images.githubusercontent.com/117996744/211904037-79cbf62f-664b-465b-9756-3fcff0582300.png)
![image](https://user-images.githubusercontent.com/117996744/211904136-aef69233-88d9-4791-8039-8b5cfbf66b62.png)

  
  2) Por meio da função closeWindow() é possível fechar o card com informações detalhadas sobre a moto após clicar no 'X' 
  function closeWindow(index){
    MoreInformation[index].style.display="none";
  }
  
  3)Por meio da função AutomaticCarousel() é possível passar automaticamente de um card resumo para outro. OBS: Nessa versão só foi possível automatizar o carrosel num sentido, sendo assim, ainda é necessário avaliar o que pode ser feito para que  carrosel funcione nos dois sentidos.
  
  function AutomaticCarousel(){
    if(index < carouselItens.length - 1){
        index++
        carouselItens[index].scrollIntoView({ behavior: "smooth" })
    }if (index = carouselItens.length -1){
        index = 0
        carouselItens[index].scrollIntoView({ behavior: "smooth" })
    }
   }
   
   4) A função goNext() comanda seta da direita na qual o usuário pode controlar o carrosel 
   
   function goNext(){
    if(index === (carouselItens.length) - 1){
        index = 0
    }else{
        index++
    }
    carouselItens[index].scrollIntoView({behavior:"smooth"});
    }
    ![image](https://user-images.githubusercontent.com/117996744/211906294-14ac97a2-f8db-4074-96bc-a452c78a9e4d.png)

      
    5) A função goBack() comanda seta da esquerda na qual o usuário pode controlar o carrosel 
    
    function goBack(){
    if(index === 0){
        index = carouselItens.length - 1
    }else{
        index--
    }
    carouselItens[index].scrollIntoView({behavior:"smooth"});
    }
     ![image](https://user-images.githubusercontent.com/117996744/211906070-5e9cb89d-b40d-48b5-90aa-56db6ac2128f.png)
  
  
