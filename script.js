// HTML ELEMENTS

// HEADER

const header = (logo) => {
    return `
        <header class="header-container">
            <p>${logo}</p>
            <span class="material-symbols-outlined">menu</span>
        </header>
    `
};

// CARD

const card = (index, sub, title, text, buttonText) => {
    return`
		<div class="card-container">
			<div class="text-container">
				<p class="number-container">${index+1}</p>
				<p class="sub">${sub}</p>
				<h2 class="title">${title}</h2>
				<article class="text">${text}</article>
			</div>
			<div class="button-container">
				<button>${buttonText}</button>
				<span class="material-symbols-outlined">arrow_forward</span>
			</div>
		</div>
    `
}

//CARDS

const cards = (card) => {
    return `
    <div class="cards-container">
        ${card}
    </div>
    `
}

const createCards = () => {
    return books.cards.map( (book, index) => card(index, book.sub, book.title, book.text, books.button)).join("")
}

const loadEvent = () => {

const rootElement = document.getElementById("root");

rootElement.insertAdjacentHTML("beforeend", header(books.logo));
rootElement.insertAdjacentHTML("beforeend", cards(createCards(books.cards)))

};

window.addEventListener("load", loadEvent);

