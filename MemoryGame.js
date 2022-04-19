document.addEventListener("DOMContentLoaded",()=>{

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

    // creo variable grid y agarro de html la clase grid
    const grid= document.querySelector(".grid");

    //creo el board
    function createBoard(){
        for (let i=0;i<cardArr.length;i++){
            var card=document.createElement("img");
            card.setAttribute("src","images/grass.jpg")
            card.setAttribute("data-id", i)
            //card.addEventListener("click",flipcard)
            grid.appendChild(card)
        }
    }
})