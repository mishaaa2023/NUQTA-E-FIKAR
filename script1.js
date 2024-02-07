function loadinganimation2() {
    gsap.from("#section11 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#section11 img", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
    gsap.from("#section11 p", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
      });
  }
  loadinganimation2();


function videoconAnimation1() {
    var videocon1 = document.querySelector("#section22");
    var playbtn1 = document.querySelector("#btn11");
    videocon1.addEventListener("mouseenter", function () {
      gsap.to(playbtn1, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon1.addEventListener("mouseleave", function () {
      gsap.to(playbtn1, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn1, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
    
  }
  videoconAnimation1()

  
  