// Index Page and aboutUS...................................................
//Moving Slider 


  let currentIndex = 0;
  const slider = document.getElementById("slider");
  const totalSlides = slider.children.length;

  function moveSlide(direction) {
    const card = slider.children[0];
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);

    const screenWidth = window.innerWidth;
    const itemsPerView = screenWidth >= 768 ? 3 : 1;
    const maxIndex = totalSlides - itemsPerView;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }


        // Select all containers with overlays Used in index,services
        document.querySelectorAll(".group").forEach((container) => {
          const overlay = container.querySelector("div");
          const textEl = container.querySelector("p");
          const dynamicText = container.getAttribute("data-text");

          container.addEventListener("mouseenter", () => {
            textEl.textContent = dynamicText;
            overlay.style.opacity = "1";
          });

          container.addEventListener("mouseleave", () => {
            overlay.style.opacity = "0";
          });
        });


// Used in the AboutUS page ............................................................
        // <!-- JavaScript for Tabs -->
    
      function showTab(tab) {
        // Hide all content
        document.getElementById("content-who").classList.add("hidden");
        document.getElementById("content-story").classList.add("hidden");
        document.getElementById("content-mission").classList.add("hidden");

        // Reset tab styles
        document
          .getElementById("tab-who")
          .classList.remove("bg-[#666ed3]", "text-white");
        document
          .getElementById("tab-story")
          .classList.remove("bg-[#666ed3]", "text-white");
        document
          .getElementById("tab-mission")
          .classList.remove("bg-[#666ed3]", "text-white");

        // Show active content
        document.getElementById("content-" + tab).classList.remove("hidden");
        document
          .getElementById("tab-" + tab)
          .classList.add("bg-[#666ed3]", "text-white");
      }
   

 
