gsap.registerPlugin( ScrollTrigger);

const t1=gsap.timeline()

t1.from('.navContainer',{
    opacity:0,
    y:30,
    delay:.1,
    duration:.6
    // ease:power1.inOut,
    
})
t1.from('#title',{
    opacity:0,
    y:44,
    delay:.3,
    duration:.6
    // ease:power1.inOut,
    
})
t1.from('#projectBtn',{
    opacity:0,
    delay:.1,
    duration:.6,
    x:40
    // ease:'power2.easeInOut'
})
// t1.from('.projects',{
//     opacity:0,
//     // delay:.3,
//     // ease:'power2.easeInOut'
// })



function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("mainTitle")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("formContainer")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 2, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".formContainer").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
    gsap.utils.toArray(".mainTitle").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
    gsap.utils.toArray(".projects").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
    gsap.utils.toArray(".skills").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  



const themeToggle=()=>{
    let btn=document.getElementById('themeBtn')
    

    btn.addEventListener('click',()=>{
        document.body.classList.toggle('active')
        if( document.body.classList.contains('active')){

            btn.style.filter='invert(1)'
        }else{
            btn.style.filter='invert(0)'
        }
    })
}

themeToggle()


const hamburgerMenu=()=>{
  const menuBtn=document.getElementById('hamburger')
  const closeBtn=document.getElementById('close')
  const menu=document.querySelector('.links2')

  menuBtn.addEventListener('click',()=>{
    menu.classList.add('active')
  })
  closeBtn.addEventListener('click',()=>{
    menu.classList.remove('active')
  })

}

hamburgerMenu()