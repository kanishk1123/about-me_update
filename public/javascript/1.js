gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function(event) {
    loaded();
});
var loader = document.getElementsByTagName("loader")[0];
var degree = document.getElementsByTagName("degree")[0];
setInterval(function(){
loader.classList.add("spin");
degree.classList.add("degree-spin");
},1000);
setInterval(function(){
  loader.classList.remove("spin");
  degree.classList.remove("degree-spin");
},2000);

function loaded(){
document.querySelector("#loading").style.scale=0;
console.log("loaded")
}

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl= gsap.timeline()

tl.from("#nav1",{
y:-100,
duration:.5,
stagger:0.1,
})
tl.from("#n1",{
    y:-1000,
    duration:.5,
    stagger:0.1,
    })
tl.from("#n2",{
y:-1000,
duration:.5,
stagger:0.1,
})
tl.from("#n3",{
    y:-1000,
    duration:.5,
    stagger:0.1,
    })
tl.from("#c1",{
    x:-1000,
    duration:.5,
    stagger:0.1,
    })
tl.from("#c2",{
     x:-2000,
    duration:.5,
     stagger:0.1,
     })
tl.from("#c3",{
  x:-1000,
  duration:.5,
  stagger:0.1,
  })

tl.to("#page1 #p1c1 h1",{
    x:-300+'vw',
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:2,
        start:"top top",
      end:"+=940",
        pin:true
    }
})


gsap.from("#page3  #arrow",{
  rotate:-150,
  opcaity:0,
  scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      scrub:2,
      start:"top 30%",
    end:"+=10",
      pin:true,
  }
})
tl.from("#page3>.pr",{
   x :-1000,
   scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    scrub:2,
    start:"top 30%",
  end:"+=10",
    pin:true,
}
})
tl.from("#page3>.pr>#p3c2",{
  x :-1000,
  scrollTrigger:{
   trigger:"#page3",
   scroller:"#main",
   scrub:2,
   start:"top 30%",
 end:"+=10",
   pin:true,
}
})
tl.from("#page3 .pr #p3c3",{
  x :-1000,
  scrollTrigger:{
   trigger:"#page3",
   scroller:"#main",
   scrub:2,
   start:"top 30%",
 end:"+=10",
   pin:true,
}
})
tl.from("#page3 .pr #p3c4",{
  x :-1000,
  scrollTrigger:{
   trigger:"#page3",
   scroller:"#main",
   scrub:2,
   start:"top 30%",
 end:"+=10",
   pin:true,
}
})

gsap.from("#scrollin",{
  y:20,
  repeat:-1,
  yoyo:true
})


let p3videocon = document.querySelector(".p3v");
let playbtn = document.getElementById("videocur"); 
const p4c2 = document.querySelector("#p4c2");
const p4c2u = document.querySelector("#p4c2u");
const p4c3 = document.querySelector("#p4c3");
const p4c3u = document.querySelector("#p4c3u");
const p4c4 = document.querySelector("#p4c4");
const p4c4u = document.querySelector("#p4c4u");
const p4c5 = document.querySelector("#p4c5");
const p4c5u = document.querySelector("#p4c5u");
const p4c6 = document.querySelector("#p4c6");
const p4c6u = document.querySelector("#p4c6u");
const p4c7 = document.querySelector("#p4c7");
const p4c7u = document.querySelector("#p4c7u");
const p4c8 = document.querySelector("#p4c8");
const p4c8u = document.querySelector("#p4c8u");
const p4c9 = document.querySelector("#p4c9");
const p4c9u = document.querySelector("#p4c9u");
const p4c10 = document.querySelector("#p4c10");
const p4c10u = document.querySelector("#p4c10u");

p4c2u.addEventListener("mouseenter", function() {
  p4c2.style.animationName = "flipin";
  p4c2.className="textcenter"
  p4c2.className="text22px"
  p4c2.innerHTML=""
  p4c2.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c2.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c2.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c2.innerHTML += '<i class="ri-star-half-s-line"></i>'
});

p4c2u.addEventListener("mouseleave", function() {
  p4c2.style.animationName = "flipout";
  p4c2.innerHTML=" <h1>GSAP</h1>"
  
});
p4c3u.addEventListener("mouseenter", function() {
  p4c3.style.animationName = "flipin";
  p4c3.className="textcenter"
  p4c3.className="text22px"
  p4c3.innerHTML=""
  p4c3.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c3.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c3.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c3.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c3.innerHTML += '<i class="ri-star-half-s-line"></i>'
});

p4c3u.addEventListener("mouseleave", function() {
  p4c3.style.animationName = "flipout";
  p4c3.innerHTML = "<h4>LOCOMOTIVE</h4>"; // Corrected typo
  console.log("hey");
});

p4c4u.addEventListener("mouseenter", function() {
  p4c4.style.animationName = "flipin";
  p4c4.className="textcenter"
  p4c4.className="text22px"
  p4c4.innerHTML=""
  p4c4.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c4.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c4.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c4.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c4.innerHTML += '<i class="ri-star-half-s-line"></i>'
});


p4c4u.addEventListener("mouseleave", function() {
  p4c4.style.animationName = "flipout";
  console.log("hey");
  p4c4.innerHTML = " <h1>HTML5</h1>";
});

p4c5u.addEventListener("mouseenter", function() {
  p4c5.style.animationName = "flipin";
  p4c5.className="textcenter"
  p4c5.className="text22px"
  p4c5.innerHTML=""
  p4c5.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c5.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c5.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c5.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c5.innerHTML += '<i class="ri-star-s-fill"></i>'; 
});

p4c5u.addEventListener("mouseleave", function() {
  p4c5.style.animationName = "flipout";
  console.log("hey");
  p4c5.innerHTML = "<h1>CSS3</h1>";
});

p4c6u.addEventListener("mouseenter", function() {
  p4c6.style.animationName = "flipin";
  p4c6.className="textcenter"
  p4c6.className="text22px"
  p4c6.innerHTML=""
  p4c6.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c6.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c6.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c6.innerHTML += '<i class="ri-star-s-fill"></i>'; 
  p4c6.innerHTML += '<i class="ri-star-s-fill"></i>'; 

});


p4c6u.addEventListener("mouseleave", function() {
  p4c6.style.animationName = "flipout";
  console.log("hey");
  p4c6.innerHTML = "<h3>DBMS<br>WITH <br>MONGOODB</h3>";
  p4c6.className="textcenter"
});
p4c7u.addEventListener("mouseenter", function() {
  p4c7.style.animationName = "flipin";
  p4c7.className="textcenter"
  p4c7.className="text22px"
  p4c7.innerHTML=""
  p4c7.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c7.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c7.innerHTML += '<i class="ri-star-half-s-line"></i>'
});


p4c7u.addEventListener("mouseleave", function() {
  p4c7.style.animationName = "flipout";
  console.log("hey");
  p4c7.innerHTML = "<h2>REACT WITH<br> NEXT.JS</h2>";
  p4c7.className="textcenter"
});
p4c8u.addEventListener("mouseenter", function() {
  p4c8.style.animationName = "flipin";
  p4c8.className="textcenter"
  p4c8.className="text22px"
  p4c8.innerHTML=""
  p4c8.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c8.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c8.innerHTML += '<i class="ri-star-half-s-line"></i>'
 
});


p4c8u.addEventListener("mouseleave", function() {
  p4c8.style.animationName = "flipout";
  console.log("hey");
  p4c8.className="textcenter"
  p4c8.innerHTML = "<h2>PTYHON</h2>";
});

p4c9u.addEventListener("mouseenter", function() {
  p4c9.style.animationName = "flipin";
  p4c9.className="textcenter"
  p4c9.className="text22px"
  p4c9.innerHTML=""
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-half-s-line"></i>'
});


p4c9u.addEventListener("mouseleave", function() {
  p4c9.style.animationName = "flipout";
  console.log("hey");
  p4c9.innerHTML = '<h3 style="text-align: center;">BACKEND<br>WITH EXPRESS</h3>'
  p4c9.className="textcenter"
});

p4c10u.addEventListener("mouseenter", function() {
  p4c9.style.animationName = "flipin";
  p4c9.className="textcenter"
  p4c9.className="text22px"
  p4c9.innerHTML=""
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-s-fill"></i>';
  p4c9.innerHTML += '<i class="ri-star-half-s-line"></i>'
});


p4c9u.addEventListener("mouseleave", function() {
  p4c10.style.animationName = "flipout";
  console.log("hey");
  p4c10.innerHTML = "<h2>JAVASCRIPT</h2>"
  p4c10.className="textcenter"
});





p3videocon.addEventListener("mouseenter", () => {
  console.log("hey")
  // Show the play button with animation
  gsap.to(playbtn, {
  scale: 1,
  opacity: 1
  });
  
  });
  
  p3videocon.addEventListener("mouseleave", () => {
  // Hide the play button with animation
  gsap.to(playbtn, {
  scale: 0,
  opacity: 0
  });
  });
  
  p3videocon.addEventListener("mousemove", (event) => {
  // Move the play button with the mouse cursor
  gsap.to(playbtn, {
  left: event.clientX , // Adjust the position offset if needed
  top: event.clientY- 30
  });
  });
  

const gitlogo = document.querySelector("#page2 #p2c3 #vp video")

gitlogo.addEventListener("mouseenter",()=>{
  video.play();
})
gitlogo.addEventListener("mouseleave",()=>{
  video.pause();
})
