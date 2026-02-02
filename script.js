const cursor = document.querySelector(".custom-cursor");
const loadingScreen = document.querySelector(".loading-screen");
const audio = document.getElementById("ambient-audio");
const audioToggle = document.querySelector(".audio-toggle");
const orbitWrapper = document.querySelector(".orbit-wrapper");
const planetTabs = document.querySelector(".planet-tabs");
const planetSphere = document.querySelector(".planet-sphere");
const planetName = document.querySelector(".planet-name");
const planetAtmosphere = document.querySelector(".planet-atmosphere");
const planetHabitable = document.querySelector(".planet-habitable");
const factText = document.getElementById("fact-text");
const generateFactBtn = document.getElementById("generate-fact");
const newFactBtn = document.getElementById("new-fact");
const timelineTrack = document.querySelector(".timeline-track");
const astronautGrid = document.querySelector(".astronaut-grid");
const galleryGrid = document.querySelector(".gallery-grid");
const detailModal = document.getElementById("detail-modal");
const modalBody = detailModal.querySelector(".modal-body");
const modalClose = detailModal.querySelector(".modal-close");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-nav.prev");
const lightboxNext = document.querySelector(".lightbox-nav.next");
const earthTime = document.getElementById("earth-time");
const marsTime = document.getElementById("mars-time");
const canvas = document.getElementById("gravity-canvas");
const ctx = canvas.getContext("2d");

let currentFactIndex = 0;
let currentGalleryIndex = 0;
let blackHole = { x: canvas.width / 2, y: canvas.height / 2 };
let particles = [];
let dragging = false;

const initLoading = () => {
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 2400);
};

const initCursor = () => {
  if (!cursor) return;
  window.addEventListener("mousemove", (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
};

const initAudio = () => {
  if (!audio || !audioToggle) return;
  audio.volume = 0.4;
  audioToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      audioToggle.classList.add("active");
      audioToggle.textContent = "🔈 Mute Sound";
    } else {
      audio.pause();
      audioToggle.classList.remove("active");
      audioToggle.textContent = "🔊 Ambient Sound";
    }
  });
};

const renderOrbits = () => {
  const orbitSizes = [90, 120, 150, 180, 230, 280, 330, 380];
  orbitSizes.forEach((size, index) => {
    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.width = `${size}px`;
    orbit.style.height = `${size}px`;
    orbitWrapper.appendChild(orbit);

    const planet = document.createElement("button");
    planet.className = "planet";
    planet.style.width = `${18 + index * 3}px`;
    planet.style.height = `${18 + index * 3}px`;
    planet.style.background = planetData[index].color;
    planet.style.setProperty("--orbit-offset", `${size / 2}px`);
    planet.dataset.index = index;
    planet.setAttribute("aria-label", planetData[index].name);

    const label = document.createElement("span");
    label.className = "planet-label";
    label.textContent = planetData[index].name;
    planet.appendChild(label);
    orbit.appendChild(planet);
  });
};

const openModal = (content) => {
  modalBody.innerHTML = content;
  detailModal.classList.add("active");
  detailModal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  detailModal.classList.remove("active");
  detailModal.setAttribute("aria-hidden", "true");
};

const initPlanetModal = () => {
  orbitWrapper.addEventListener("click", (event) => {
    const planet = event.target.closest(".planet");
    if (!planet) return;
    const data = planetData[planet.dataset.index];
    openModal(`
      <h3>${data.name} ${data.name === "Earth" ? "🌍" : "🪐"}</h3>
      <ul>
        <li><strong>Distance from Sun:</strong> ${data.distance} million km</li>
        <li><strong>Gravity:</strong> ${data.gravity}</li>
        <li><strong>Avg Temperature:</strong> ${data.temperature}</li>
        <li><strong>Moons:</strong> ${data.moons}</li>
        <li><strong>Fun Fact:</strong> ${data.fact}</li>
      </ul>
    `);
  });

  modalClose.addEventListener("click", closeModal);
  detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal) {
      closeModal();
    }
  });
};

const renderPlanetTabs = () => {
  planetData.forEach((planet, index) => {
    const button = document.createElement("button");
    button.textContent = planet.name;
    button.setAttribute("role", "tab");
    button.dataset.index = index;
    if (index === 2) button.classList.add("active");
    planetTabs.appendChild(button);
  });
};

const updatePlanetDetail = (index) => {
  const planet = planetData[index];
  planetName.textContent = planet.name;
  planetAtmosphere.textContent = planet.atmosphere;
  planetHabitable.textContent = `Can humans live here? ${planet.habitable}`;
  planetSphere.style.background = `linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent), ${planet.color}`;
};

const initPlanetDetail = () => {
  updatePlanetDetail(2);
  planetTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    planetTabs.querySelectorAll("button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    updatePlanetDetail(Number(button.dataset.index));
  });
};

const updateFact = () => {
  factText.classList.remove("visible");
  setTimeout(() => {
    factText.textContent = spaceFacts[currentFactIndex];
    factText.classList.add("visible");
  }, 200);
};

const initFacts = () => {
  currentFactIndex = Math.floor(Math.random() * spaceFacts.length);
  updateFact();

  const nextFact = () => {
    currentFactIndex = Math.floor(Math.random() * spaceFacts.length);
    updateFact();
  };

  generateFactBtn.addEventListener("click", nextFact);
  newFactBtn.addEventListener("click", nextFact);
};

const renderTimeline = () => {
  missionData.forEach((mission) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <h3>${mission.title}</h3>
      <p>${mission.date} · ${mission.agency}</p>
      <p>${mission.description}</p>
    `;
    item.addEventListener("click", () => {
      openModal(`
        <h3>${mission.title}</h3>
        <p><strong>Date:</strong> ${mission.date}</p>
        <p><strong>Agency:</strong> ${mission.agency}</p>
        <p>${mission.impact}</p>
      `);
    });
    timelineTrack.appendChild(item);
  });
};

const renderAstronauts = () => {
  astronautData.forEach((astro) => {
    const card = document.createElement("div");
    card.className = "astronaut-card";
    card.innerHTML = `
      <div class="card-inner" tabindex="0">
        <div class="card-face front">
          <img src="${astro.avatar}" alt="${astro.name}" loading="lazy" />
          <h3>${astro.name}</h3>
        </div>
        <div class="card-face back">
          <h3>${astro.country}</h3>
          <p>Missions: ${astro.missions}</p>
          <p>${astro.achievement}</p>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      openModal(`
        <h3>${astro.name}</h3>
        <p><strong>Country:</strong> ${astro.country}</p>
        <p><strong>Missions:</strong> ${astro.missions}</p>
        <p><strong>Accomplishment:</strong> ${astro.achievement}</p>
      `);
    });
    astronautGrid.appendChild(card);
  });
};

const renderGallery = () => {
  galleryImages.forEach((image, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${image.src}" alt="${image.title}" loading="lazy" />
      <span class="gallery-tag">${image.category}</span>
    `;
    item.addEventListener("click", () => openLightbox(index));
    galleryGrid.appendChild(item);
  });
};

const openLightbox = (index) => {
  currentGalleryIndex = index;
  const image = galleryImages[currentGalleryIndex];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.title;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
};

const navigateLightbox = (direction) => {
  currentGalleryIndex =
    (currentGalleryIndex + direction + galleryImages.length) % galleryImages.length;
  const image = galleryImages[currentGalleryIndex];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.title;
};

const initLightbox = () => {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") navigateLightbox(-1);
    if (event.key === "ArrowRight") navigateLightbox(1);
  });
};

const updateClocks = () => {
  const now = new Date();
  earthTime.textContent = now.toUTCString().split(" ")[4];

  const marsSol = Math.floor(now.getTime() / 88775000);
  const marsMillis = now.getTime() % 88775000;
  const marsDate = new Date(marsMillis);
  const marsClock = marsDate.toUTCString().split(" ")[4];
  marsTime.textContent = `Sol ${marsSol} · ${marsClock}`;
};

const createParticles = () => {
  particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2,
    radius: Math.random() * 2 + 0.5,
  }));
};

const drawSimulation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(4, 6, 17, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    const dx = blackHole.x - particle.x;
    const dy = blackHole.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    const force = Math.min(2.5, 80 / distance);
    particle.vx += (dx / distance) * force * 0.02;
    particle.vy += (dy / distance) * force * 0.02;
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.fillStyle = "rgba(104, 212, 255, 0.8)";
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.beginPath();
  ctx.fillStyle = "rgba(127, 91, 255, 0.9)";
  ctx.arc(blackHole.x, blackHole.y, 24, 0, Math.PI * 2);
  ctx.fill();
};

const animateSimulation = () => {
  drawSimulation();
  requestAnimationFrame(animateSimulation);
};

const initSimulation = () => {
  createParticles();
  animateSimulation();
  canvas.addEventListener("mousedown", (event) => {
    dragging = true;
    blackHole = { x: event.offsetX, y: event.offsetY };
  });
  canvas.addEventListener("mousemove", (event) => {
    if (dragging) {
      blackHole = { x: event.offsetX, y: event.offsetY };
    }
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });
};

const initParallax = () => {
  const hero = document.querySelector(".hero");
  window.addEventListener(
    "scroll",
    () => {
      const offset = window.scrollY * 0.4;
      hero.style.backgroundPositionY = `${offset}px`;
    },
    { passive: true }
  );
};

const initReveal = () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach((item) => observer.observe(item));
};

const init = () => {
  initLoading();
  initCursor();
  initAudio();
  renderOrbits();
  initPlanetModal();
  renderPlanetTabs();
  initPlanetDetail();
  initFacts();
  renderTimeline();
  renderAstronauts();
  renderGallery();
  initLightbox();
  initSimulation();
  initParallax();
  initReveal();
  updateClocks();
  setInterval(updateClocks, 1000);
};

window.addEventListener("DOMContentLoaded", init);
