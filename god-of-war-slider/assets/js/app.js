
const charactersList = [
  { characterName: 'Kratos', characterImg: 'kratos', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Atreus', characterImg: 'atreus', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Thor', characterImg: 'thor', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Angrboda', characterImg: 'angrboda', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Brok Sindiri', characterImg: 'brok-sindri', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Mimir', characterImg: 'mimir', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Tyr', characterImg: 'tyr', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
  { characterName: 'Freya', characterImg: 'freya', characterAbout: 'In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text.' },
]

document.addEventListener("DOMContentLoaded", function () {
  var swiperContent = document.querySelector('.swiper-wrapper')
  charactersList.map((e, index) => {
    element = `<div class="swiper-slide">
    <span>${e.characterName}</span>
    <img src="./assets/img/characters/${e.characterImg}.png" alt="${e.characterName}" title="${e.characterName}">
    <button class="detail-btn" onclick="characterDetail(${index})">Detail</button>
  </div>`
    swiperContent.innerHTML += element
  })
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  freeMode: false,

  breakpoints: {
    768: {
      slidesPerView: 3,
      freeMode: true,
    },
    1024: {
      slidesPerView: 5,
      freeMode: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const characterDetail = (index) => {
  const details = document.querySelector('.details')
  const detailCharImg = document.querySelector('.detail-character-img')
  const detailCharName = document.querySelector('.detail-character-name')
  const detailCharAbout = document.querySelector('.detail-character-about')
  if (index < 0) {
    return details.classList.remove('active')
  }
  var charData = charactersList[index]
  detailCharImg.src = `./assets/img/characters/${charData.characterImg}.png`
  detailCharName.innerHTML = charData.characterName
  detailCharAbout.innerHTML = charData.characterAbout
  details.classList.add('active')
}