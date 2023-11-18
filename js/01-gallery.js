import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery_item">
        <a class="gallery_link" href="${original}">
            <img class="gallery_image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li>
    `).join("");
}

function handleClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery_image")) {
        return;
    }

    const largeImageUrl = event.target.dataset.source;

    // Створення модального вікна з великим зображенням
    const instance = basicLightbox.create(`
        <img src="${largeImageUrl}" width="800" height="600"/>
    `);
    instance.show();


//console.log(galleryItems);

}


