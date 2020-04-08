document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "image1",
      img: "images/image1.jpeg"
    },
    {
      name: "image1",
      img: "images/image1.jpeg"
    },
    {
      name: "image2",
      img: "images/image2.jpeg"
    },
    {
      name: "image2",
      img: "images/image2.jpeg"
    },
    {
      name: "image3",
      img: "images/image3.jpeg"
    },
    {
      name: "image3",
      img: "images/image3.jpeg"
    },
    {
      name: "image4",
      img: "images/image4.jpeg"
    },
    {
      name: "image4",
      img: "images/image4.jpeg"
    },
    {
      name: "image5",
      img: "images/image5.jpeg"
    },
    {
      name: "image5",
      img: "images/image5.jpeg"
    },
    {
      name: "image6",
      img: "images/image6.jpeg"
    },
    {
      name: "image6",
      img: "images/image6.jpeg"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  //create gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/treasure.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionsOneId = cardsChosenId[0];
    const optionsTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionsOneId].setAttribute("src", "images/diamondRing.png");
      cards[optionsOneId].removeEventListener("click", flipCard);
      cards[optionsTwoId].setAttribute("src", "images/diamondRing.png");
      cards[optionsTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionsOneId].setAttribute("src", "images/treasure.png");
      cards[optionsTwoId].setAttribute("src", "images/treasure.png");
      alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations You found them all!";
    }
  }
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
