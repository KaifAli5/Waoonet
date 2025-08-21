
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


        // Select all containers with overlays
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
