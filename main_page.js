new Glider(document.querySelector('.glider'),{
    slidesToScroll: 2,
  slidesToShow: 8,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});
new Glider(document.querySelector('#second-glider'),{
  slidesToScroll: 1,
  slidesToShow: 8,
draggable: true,
dots: '.dots',
arrows: {
  prev: '.glider-prev',
  next: '.glider-next'
}
});
