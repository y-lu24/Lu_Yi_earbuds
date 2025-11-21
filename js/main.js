(() => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const navLinks = document.querySelectorAll("#main-header nav ul li a");

  function scrollLink(e) {    
    e.preventDefault(); 
    console.log(e.currentTarget.hash);
    let selectedLink = e.currentTarget.hash;
    gsap.to(window, {duration: 1, scrollTo: {y:`${selectedLink}`, offsetY: 100 }});
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollLink);
  });


  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Up to 30h Battery (with case)",
      text:"Power through your day with up to 30 hours of playtime, keeping your music going from morning to night.",
      img: "images/Promo1.jpg",
      alt: "EarbudsPromoPoster"
    },
      {
      title: "Ergonomic Fit",
      text:"Designed to match the natural contours of your ear for all-day comfort and a secure fit that stays put.",
      img: "images/Promo3.jpg",
      alt: "EarbudsPromoPoster"
    },
      {
      title: "Compact Charging Case",
      text:"Sleek and pocket-sized charging case that goes wherever you go, delivering power on the move.",
      img: "images/Promo2.jpg",
      alt: "EarbudsPromoPoster"
    },
  ]

  //functions

  function loadInfo(){
    infoBoxes.forEach((infoBox, index)=>{
      let selected = document.querySelector(`#hotspot-${index+1}`);

      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;
      
      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imageElement = document.createElement('img');
      imageElement.src = infoBox.img
      imageElement.alt = infoBox.alt;

      //let's add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      //let's add the p to the selected hotspot
      selected.appendChild(textElement);
      //let's add the img to the selected hotspot
      selected.appendChild(imageElement);

    });
  }

  loadInfo();
  

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  //where to place the descriptions
  function handleResponsive() {
    //Creates a responsive handler function.
    const mobileContainer = document.querySelector(".annotations-mobile");
    //Gets the mobile container <div class="annotations-mobile"></div> from HTML.
    const annotations = document.querySelectorAll(".HotspotAnnotation");
    //Gets all hotspots.
    
    if (window.innerWidth < 1200) {
      //when in mobile size, loop each hotspot
      annotations.forEach((annotation) => {
        //move the hotspot to the bottom
        mobileContainer.appendChild(annotation);
        //make it visible
        annotation.style.visibility = "visible";
      });
      //when in desktop size
    } else {
      //_ means we don't need the infoBox content, only the index
      //index is 0, 1, 2
      infoBoxes.forEach((_, index) => {
        //When index = 0, finds button[slot="hotspot-1"]
        const hotspotButton = document.querySelector(`button[slot="hotspot-${index + 1}"]`);
        //When index = 0, finds #hotspot-1
        const annotation = document.querySelector(`#hotspot-${index + 1}`);
        if (hotspotButton && annotation) {
          //put cards back into hotspot bottons
          hotspotButton.appendChild(annotation);
          //Hide it (wait for hover to show)
          annotation.style.visibility = "hidden";
        }
      });
    }
  }
  //Execute when page finishes loading
  window.addEventListener("load", handleResponsive);
  //Execute when website size changes
  window.addEventListener("resize", handleResponsive);


  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 91;

  const images = [];

  const buds = {
    frame: 0
  };

  for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `images/1_${(i + 1).toString().padStart(4, '0')}.webp`;
      images.push(img);
  }

  console.log(images);

  gsap.to(buds, {
      frame: frameCount - 1,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        start: "top top",
      },
      onUpdate: render
  });

  images[0].addEventListener("load", render);

  function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
  }


  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    divisor.style.width = `${slider.value}%`;
  }

  function resetSlider() {
    slider.value = 50;
    moveDivisor();
  }

  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider); 

  const earbuds = document.querySelector("#ear-buds");
  const buttons = document.querySelectorAll('#color-con button');

  function swapColor() {
    console.log(this.id);
    earbuds.src = `images/${this.id}.jpg`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", swapColor);
  });

})();