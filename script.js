// scrollFunction

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").style.backgroundColor = "white";
    document.getElementById("navbar").style.paddingBottom = "50px";
    document.getElementById("navbar").style.transition = "0.8s";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.paddingBottom = "0px";
    document.getElementById("navbar").style.transition = "0.8s";
  }
}

// backToTopButton

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop)


// slideShow function of pyrgos.html

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// control sildeShow with keyboard

function respondToPressedKey(e) {
  switch (e.key) {
    case 'ArrowLeft':
      // run your ArrowLeft code here
      plusSlides(-1);
      console.log('Arrow Left Key Pressed');
      break;
    case 'ArrowRight':
      // run your ArrowRight code here
      plusSlides(+1);
      console.log('Arrow Right Key Pressed');
      break;
  }
}

document.body.addEventListener('keydown', respondToPressedKey);

// OpenModal and CloseModal functions

var modal = initModal();

function initModal() {
  return render({
    tag: 'div',
    id: 'myModal',
    className: 'modal',
    children: [
      {
        tag: 'span',
        className: 'close cursor',
        onclick: closeModal,
        innerHTML: '&times;'
      },
      {
        tag: 'div',
        className: 'modal-content',
        children: [
          {
            tag: 'div',
            className: 'mySlidess',
            children: [
              {
                tag: 'div',
                className: 'numbertext'
              },
              {
                tag: 'img',
                style: 'width: 100%'
              }
            ]
          },
          {
            tag: 'a',
            className: 'previous',
            onclick: function(){plusSlidess(-1)},
            innerHTML: '&#10094'
          },
          {
            tag: 'a',
            className: 'nextt',
            onclick: function(){plusSlidess(1)},
            innerHTML: '&#10095'
          }
        ] 
      }
    ]
  });
}
function render(obj) {
  var el = document.createElement(obj.tag);
  if(obj.children){
    for(var i=0;i<obj.children.length;i++) {
      el.appendChild(render(obj.children[i]));
    }
  }
  delete el.tag;
  delete el.children;
  for(var key in obj){
    el[key] = obj[key];
  }
  return el;
}

function openModal() {
  document.body.appendChild(modal);
}

function closeModal() {
  modal.remove();
}

var slideIndexes = 0;

function plusSlidess(n) {
  showSlidess(slideIndexes += n);
}

function currentSlide(n) {
  showSlidess(slideIndexes = n);
}

function showSlidess(n) {
  var i;
  var slides = document.querySelectorAll('.column img');
  // var captionText = modal.querySelector(".numbertext");
  var modalImg = modal.querySelector('img');
  n %= slides.length;
  modalImg.src = slides[n].src;
  // captionText.innerHTML = n + 1 + ' / ' + slides.length;
}

function respondToPresssedKey(e) {
  switch (e.key) {
    case 'ArrowLeft':
      // run your ArrowLeft code here
      plusSlidess(-1);
      console.log('Arrow Left Key Pressed');
      break;
    case 'ArrowRight':
      // run your ArrowRight code here
      plusSlidess(+1);
      console.log('Arrow Right Key Pressed');
      break;
    case 'Escape':
      // run your Escape code here
      closeModal();
      console.log('Escape Key Pressed');
      break;
  }
}

document.body.addEventListener('keydown', respondToPresssedKey);


// Open and Close Fullscreen Nav // 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}