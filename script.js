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


// create instance of kinet with custom settings

// var kinet = new Kinet({
//     acceleration: 0.06,
//     friction: 0.20,
//     names: ["x", "y"],
//   });
  
//   // select circle element
//   var circle = document.getElementById('circle');
  
//   // set handler on kinet tick event
//   kinet.on('tick', function(instances) {
//     circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
//   });
  
//   // call kinet animate method on mousemove
//   document.addEventListener('mousemove', function (event) {
//     kinet.animate('x', event.clientX - window.innerWidth/2);
//     kinet.animate('y', event.clientY - window.innerHeight/2);
//   });
    
//   // log
//   kinet.on('start', function() {
//     console.log('start');
//   });
  
//   kinet.on('end', function() {
//     console.log('end');
//   });