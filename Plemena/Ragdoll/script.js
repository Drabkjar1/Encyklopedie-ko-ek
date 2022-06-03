const images = document.querySelectorAll('.fotog');

images.forEach((fotog, indx) => {
  fotog.style.transform = `translateX(${indx * 100}%)`;
});

const nextImage = document.querySelector('.btn-next');

let curImage = 0;

let maxImage = images.length - 1;

nextImage.addEventListener('click', function () {
  if (curImage === maxImage) {
    curImage = 0;
  } else {
    curImage++;
  }

  images.forEach((fotog, indx) => {
    fotog.style.transform = `translateX(${100 * (indx - curImage)}%)`;
  });
});

const prevImage = document.querySelector('.btn-prev');

prevImage.addEventListener('click', function () {
  if (curImage === 0) {
    curImage = maxImage;
  } else {
    curImage--;
  }

  images.forEach((fotog, indx) => {
    fotog.style.transform = `translateX(${100 * (indx - curImage)}%)`;
  });
});
