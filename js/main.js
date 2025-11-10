(() => {
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

  function loadInfor(){
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);
      // console.log(selected);

      //lets create an h2
      const titleElement = document.createElement('h2');
      //lets populate the h2
      titleElement.textContent = infoBox.title;
      
      //lets create an p
      const textElement = document.createElement('p');
      //lets populate the p
      textElement.textContent = infoBox.text;

      //lets create an img
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

  loadInfor();
  

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
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

})();

