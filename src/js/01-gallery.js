import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryImages = document.querySelector('.gallery');
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
     </a>
`;
    })
    .join('');
}

const lightboxOptions = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox('.gallery a', lightboxOptions);
