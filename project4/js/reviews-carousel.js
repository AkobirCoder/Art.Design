const track = document.querySelector('.reviewsTrack');
let items = document.querySelectorAll('.reviewsSectionContentItems');
const itemWidth = items[0].offsetWidth;

const firstClone = items[0].cloneNode(true);
track.appendChild(firstClone);

items = document.querySelectorAll('.reviewsSectionContentItems');

let currentIndex = 0;
let isMoving = false;

function moveToSlide(index) {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${itemWidth * index}px)`;
}

function jumpToStart() {
  track.style.transition = 'none';
  track.style.transform = `translateX(0px)`;
  currentIndex = 0;
}

setInterval(() => {
  if (isMoving) return;
  isMoving = true;

  currentIndex++;
  moveToSlide(currentIndex);

  if (currentIndex >= items.length - 1) {
    setTimeout(() => {
      jumpToStart();
    }, 500); 
  }

  setTimeout(() => {
    isMoving = false;
  }, 600);
}, 5000);
