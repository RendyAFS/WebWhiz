// SLIDER !
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function slideToIndex(index) {
    currentIndex = index;
    const translateX = -currentIndex * 25; // 25% width for each card
    slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        slideToIndex(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    const numCards = slider.children.length;
    if (currentIndex < numCards - 4) {
        slideToIndex(currentIndex + 1);
    }
});

// Otomatis menjalankan slider pertama saat halaman dimuat
slideToIndex(currentIndex);


// SLIDER 2
const slider2 = document.querySelector('.slider2');
const prevButton2 = document.querySelector('.prev-button2');
const nextButton2 = document.querySelector('.next-button2');

let currentIndex2 = 0;

function slideToIndex2(index) {
    currentIndex2 = index;
    const translateX2 = -currentIndex2 * 25; // 25% width for each card
    slider2.style.transform = `translateX(${translateX2}%)`;
}

prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        slideToIndex2(currentIndex2 - 1);
    }
});

nextButton2.addEventListener('click', () => {
    const numCards2 = slider2.children.length;
    if (currentIndex2 < numCards2 - 4) {
        slideToIndex2(currentIndex2 + 1);
    }
});

// Otomatis menjalankan slider kedua saat halaman dimuat
slideToIndex2(currentIndex2);