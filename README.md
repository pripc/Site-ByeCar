# Site-ByeCar
------------------------- HTML -----------------------------------------

O <body> do HTML foi divido em duas partes: 'header' e 'main'

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
