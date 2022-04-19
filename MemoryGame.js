document.addEventListener('DOMContentLoaded',()=>{

    //card options : array de obj, cada uno es una carta (no incluye blank y grass)
    const cardArr=[
        {
            name:"charizard",
            img: "images/charizard.jpg"
        },
        {
            name:"charizard",
            img: "images/charizard.jpg"
        },
        {
            name:"chimchar",
            img: "images/chimchar.jpg"
        },
        {
            name:"chimchar",
            img: "images/chimchar.jpg"
        },
        {
            name:"dewgong",
            img: "images/dewgong.jpg"
        },
        {
            name:"dewgong",
            img: "images/dewgong.jpg"
        },
        {
            name:"dragonite",
            img: "images/dragonite.jpg"
        },
        {
            name:"dragonite",
            img: "images/dragonite.jpg"
        },
        {
            name:"gengar",
            img: "images/gengar.jpg"
        },
        {
            name:"gengar",
            img: "images/gengar.jpg"
        },
        {
            name:"venosaur",
            img: "images/venosaur.jpg"
        },
        {
            name:"venosaur",
            img: "images/venosaur.jpg"
        },
    ]
    //randomizar el array de cartas
    cardArr.sort(()=> 0.5 - Math.random())

    const cardsChosen=[];
    const cardsChosenId=[];
    const cardsWon=[];
    const resultDisplay = document.querySelector("#result")

    // creo variable grid y agarro de html la clase grid
    const grid= document.querySelector(".grid");

    /*creo el board : funcion hace loop en cardArr, para cada carta crea una var card: creo elemento img
    usamos metodo .setAttribute para darle a cada carta la img de grass y una id propia*/
    function createBoard(){
        for (let i=0;i<cardArr.length;i++){
            var card=document.createElement("img");
            card.setAttribute("src","images/grass.jpg")
            card.setAttribute("data-id", i)
            //card.addEventListener("click",flipcard)
            grid.appendChild(card)
        }
    }
    createBoard()

    // buscar match
    function checkForMatch(){
        var cards = document.querySelectorAll("img")
        const optOneId= cardsChosenId[0]
        const optTwoId= cardsChosenId[1]
        if(cardsChosen[0]===cardsChosen[1]){
            alert("you found a match")
            cards[optOneId].setAttribute("src","images/blank.jpg")
            cards[optTwoId].setAttribute("src","images/blank.jpg")
            cardsWon.push(cardsChosen)
        }else{
            cards[optOneId].setAttribute("src","images/grass.jpg")
            cards[optTwoId].setAttribute("src","images/grass.jpg")
            alert("sorry, try again")
        }
        cardsChosen=[]; //reseteamos a 0 
        cardsChosenId=[]; //reseteamos a 0
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length===cardArr.length/2){
            resultDisplay.textContent="You've caught them all!!"
        }
    }

    //flip carta :
    function flipcard(){
        var cardId= this.getAttribute("data-id") // 1° crea var que guarda el Id de la carta que tocamos
        cardsChosen.push(cardArr[cardId].name)   // 2° guardamos la key-value: nombre de la carta que tocamos en un arr externo
        cardsChosenId.push(cardId)               // 3° guardamos la id en un arr externo
        this.setAttribute("src", cardArr[cardId].img) //4° le damos a la carta la img que le corresponde segun si id
        //5° cuando tocamos 2 cartas chequea si son match
        if(cardsChosen.length ===2){
            setTimeout(checkForMatch, 500)
        }
    }
})