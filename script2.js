function loadinganimation1() {
    gsap.from("#contact-section .box", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#contact-section p", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
    gsap.from("#contact-section h1", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
      });
    
  }
  loadinganimation1();
  
 
  
  function videoconAnimation() {
    var videocon = document.querySelector("#contact-section");
    var playbtn = document.querySelector("#btn22");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
    
  }
  videoconAnimation()

  
  