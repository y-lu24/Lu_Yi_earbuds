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
      img: "images/Promo2.jpg",
      alt: "EarbudsPromoPoster"
    },
      {
      title: "Compact Charging Case",
      text:"Sleek and pocket-sized charging case that goes wherever you go, delivering power on the move.",
      img: "images/Promo3.jpg",
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

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.