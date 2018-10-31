var navMain = document.querySelector('.nav-main');
var navToggle = document.querySelector('.nav-main__toggle');
var loc_path = window.location;


navMain.classList.remove('nav-main--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-main--closed')) {
    navMain.classList.remove('nav-main--closed');
    navMain.classList.add('nav-main--opened');
  } else {
    navMain.classList.add('nav-main--closed');
    navMain.classList.remove('nav-main--opened');
  }
});

ymaps.ready(init);

function init() {

  var myMap = new ymaps.Map('footer__map', {
    center: [59.938631, 30.323055],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    balloonContentBody: [
      '<address>',
      'HTML Academy: Кэт энерджи',
      '<br/>',
      'Адрес: 191186, г. Санкт-Петербург, Большая Конюшенная улица, 19/8',
      '</address>'
    ].join('')
  }, {
      preset: 'islands#redIcon',
      iconLayout: 'default#image',
      iconImageHref: loc_path + 'img/map-pin.png',
      iconImageSize: [124, 106],
      iconImageOffset: [0, 0]
    });

  myMap.geoObjects.add(myPlacemark);
}
