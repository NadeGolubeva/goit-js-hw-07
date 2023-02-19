import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const collection = imgMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeEnd", collection);
function imgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
     <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join(" ");
}

gallery.addEventListener("click", onImgClick);
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
	
	<p><img src = ${event.target.dataset.source} ></img></p>
`);
  instance.show();

  const tag = event.target;
  const urlBig = event.target.dataset.source;
  imgMarkup.src = urlBig;
  console.log(urlBig);
}
