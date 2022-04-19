//card options
const cardArray = [
    {
        name: "charizard",
        Img: "images/charizard.jpg"
    },
    {
        name: "charizard",
        Img: "images/charizard.jpg"
    },
    {
        name: "dewgong",
        Img: "images/dewgong.jpg"
    },
    {
        name: "dewgong",
        Img: "images/dewgong.jpg"
    },
    {
        name: "dragonite",
        Img: "images/dragonite.jpg"
    },
    {
        name: "dragonite",
        Image: "images/dragonite.jpg"
    },
    {
        name: "gengar",
        Image: "images/gengar.jpg"
    },
    {
        name: "gengar",
        Image: "images/gengar.jpg"
    },
    {
        name: "venosaur",
        Image: "images/venosaur.jpg"
    },
    {
        name: "venosaur",
        Image: "images/venosaur.jpg"
    },
    {
        name: "chimchar",
        Image: "images/chimchar.jpg"
    },
    {
        name: "chimchar",
        Image: "images/chimchar.jpg"
    }
];



const grid = document.querySelector(".grid"); //declara una variable constante llamada grid y la vincula con el elemento class .grid declarado en css y declarado en html como class="grid"
console.log('grid', grid)
//board game

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {  // con la funcion "for" genera un loop en el elemento cardArray poniendole .length ve el largo de el array 
        var card = document.createElement("img");  // para cada tarjeta crea un elemento imagen a la cual declara card
        card.setAttribute("src", "images/grass.jpg"); //linkea a la imagen blanca
        card.setAttribute("data-id", i); // da una id que va de 0 a 11 a cada una de las cartas
        //card.addEventListener("click", flipcard) // indico que si se clickea la carta se da vuelta y nombramos la funcion flipcard que mas adelante la codeamos 
        grid.appendChild(card);

    }

}

createBoard();