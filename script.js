document.addEventListener("DOMContentLoaded", function() {
    createGirasoles();
    setInterval(moveGirasoles, 3000);
    setInterval(rotateImages, 1500); // Rotar las imágenes cada 1.5 segundos
  });
  
  function createGirasoles() {
    const girasolContainer = document.getElementById("girasol-container");
    for (let i = 0; i < 15; i++) {
      const girasol = document.createElement("img");
      girasol.src = "girasol.png";
      girasol.classList.add("girasol");
      girasolContainer.appendChild(girasol);
      setInitialPosition(girasol); // Establecer la posición inicial
    }
  }
  
  function setInitialPosition(girasol) {
    const newX = Math.random() * (window.innerWidth - girasol.clientWidth);
    const newY = Math.random() * (window.innerHeight - girasol.clientHeight);
    girasol.style.left = `${newX}px`;
    girasol.style.top = `${newY}px`;
  }
  
  function moveGirasoles() {
    const girasoles = document.querySelectorAll(".girasol");
    girasoles.forEach(girasol => {
      const newX = Math.random() * (window.innerWidth - girasol.clientWidth);
      const newY = Math.random() * (window.innerHeight - girasol.clientHeight);
      girasol.style.left = `${newX}px`;
      girasol.style.top = `${newY}px`;
    });
  }
  
  function rotateImages() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    
    // Alternar la visibilidad de las imágenes
    if (image1.style.display === "none") {
      image1.style.display = "block";
      image2.style.display = "none";
    } else {
      image1.style.display = "none";
      image2.style.display = "block";
    }
  }
  