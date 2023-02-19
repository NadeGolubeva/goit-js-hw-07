import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const collection = imgMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeEnd", collection);
function imgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
     
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>

`;
    })
    .join(" ");
}

console.log(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 205,

  captionsData: "alt",
  captionPosition: "left",
});
lightbox.on("show.simplelightbox");

// , imgSelected);

// function imgSelected(e) {
//   console.log(e.target);
// }
