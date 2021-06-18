

const anchors = document.querySelectorAll('a[href*="#"]')/////////////////////Плавный переход по якорям !!!

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1) //////////// Плавный переход по якорям !!!
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}////////////////////////////////////////////////////////Плавный переход по якорям !!!




var line = document.querySelector('#line'),  ///////////////////// прогресс скрол-бар
    bodyHeight = document.body.clientHeight,
    doc = document.documentElement;

setWidthLine();

document.addEventListener('scroll', function() {
   setWidthLine();
});

document.addEventListener('resize', function() {   /////////////////  скролл-бар
   setWidthLine();
});

function setWidthLine() {
   var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
       percent;
   scrollTop += doc.clientHeight;
   
   percent = scrollTop / bodyHeight * 95;
   line.style.height = percent + '%';
} ///////////////////////////////////////////////////////////   прогресс скролл-бар



function onEntry(entry) {  /////////////////////////  анимация блоков
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {   ////////////////////////////////////   анимация блоков
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.section--show');
  
  for (let elm of elements) {
    observer.observe(elm);
  }   /////////////////////////////////////////////////  фнимация блоков


