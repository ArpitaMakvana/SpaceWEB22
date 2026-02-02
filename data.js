const planetData = [
  {
    name: "Mercury",
    color: "#b1b1b1",
    distance: "57.9",
    gravity: "3.7 m/s²",
    temperature: "167°C",
    moons: 0,
    fact: "Mercury completes three rotations for every two orbits around the Sun.",
    atmosphere:
      "A thin exosphere of oxygen, sodium, hydrogen, helium, and potassium.",
    habitable: "No — extreme temperature swings and no breathable air.",
  },
  {
    name: "Venus",
    color: "#e2b66b",
    distance: "108.2",
    gravity: "8.87 m/s²",
    temperature: "464°C",
    moons: 0,
    fact: "Venus spins backwards compared to most planets.",
    atmosphere:
      "Thick carbon dioxide clouds with sulfuric acid, creating a runaway greenhouse effect.",
    habitable: "No — crushing pressure and extreme heat dominate Venus.",
  },
  {
    name: "Earth",
    color: "#3da5ff",
    distance: "149.6",
    gravity: "9.81 m/s²",
    temperature: "15°C",
    moons: 1,
    fact: "Earth is the only known planet with liquid water on its surface.",
    atmosphere:
      "Nitrogen-oxygen rich air with protective ozone and balanced greenhouse gases.",
    habitable: "Yes — Earth is our home base for life.",
  },
  {
    name: "Mars",
    color: "#c3562c",
    distance: "227.9",
    gravity: "3.71 m/s²",
    temperature: "-65°C",
    moons: 2,
    fact: "Mars hosts Olympus Mons, the tallest volcano in the solar system.",
    atmosphere:
      "Thin carbon dioxide atmosphere with dust storms and traces of water vapor.",
    habitable: "Not yet — future habitats could support human missions.",
  },
  {
    name: "Jupiter",
    color: "#d1a27a",
    distance: "778.5",
    gravity: "24.79 m/s²",
    temperature: "-110°C",
    moons: 95,
    fact: "Jupiter's Great Red Spot is a storm larger than Earth.",
    atmosphere:
      "Hydrogen and helium clouds with swirling ammonia storms.",
    habitable: "No — it's a gas giant with no solid surface.",
  },
  {
    name: "Saturn",
    color: "#e6d7a8",
    distance: "1434",
    gravity: "10.44 m/s²",
    temperature: "-140°C",
    moons: 146,
    fact: "Saturn's rings are made of ice and rock fragments.",
    atmosphere:
      "Hydrogen and helium atmosphere with hazy golden clouds.",
    habitable: "No — gas giant with intense winds.",
  },
  {
    name: "Uranus",
    color: "#7ad0e6",
    distance: "2871",
    gravity: "8.69 m/s²",
    temperature: "-195°C",
    moons: 27,
    fact: "Uranus rotates on its side, making its seasons extreme.",
    atmosphere:
      "Hydrogen, helium, and methane create a blue-green glow.",
    habitable: "No — frigid, icy giant conditions.",
  },
  {
    name: "Neptune",
    color: "#2e5cff",
    distance: "4495",
    gravity: "11.15 m/s²",
    temperature: "-200°C",
    moons: 14,
    fact: "Neptune has winds faster than 2,000 km/h.",
    atmosphere:
      "Methane-rich atmosphere with high-speed storms.",
    habitable: "No — icy giant with supersonic storms.",
  },
];

const spaceFacts = [
  "A day on Venus is longer than a year on Venus.",
  "Neutron stars can spin at 600 rotations per second.",
  "The footprints on the Moon will last for millions of years.",
  "Saturn could float in water because it is less dense than water.",
  "The Sun contains 99.86% of the mass in the solar system.",
  "Jupiter's magnetic field is 14 times stronger than Earth's.",
  "Olympus Mons on Mars is nearly three times the height of Mount Everest.",
  "There are more trees on Earth than stars in the Milky Way.",
  "Mars sunsets appear blue due to dust in the atmosphere.",
  "The Milky Way galaxy will collide with Andromeda in about 4.5 billion years.",
  "A spoonful of a neutron star would weigh about a billion tons.",
  "The ISS travels at 28,000 km/h and orbits Earth every 90 minutes.",
  "Light from the Sun takes 8 minutes and 20 seconds to reach Earth.",
  "One million Earths could fit inside the Sun.",
  "The coldest place in the universe may be the Boomerang Nebula.",
  "Mercury has almost no atmosphere to retain heat.",
  "Uranus has faint rings discovered in 1977.",
];

const missionData = [
  {
    title: "Apollo 11",
    date: "1969",
    agency: "NASA",
    description: "First crewed mission to land on the Moon.",
    impact:
      "Neil Armstrong and Buzz Aldrin walked on the lunar surface, proving human capability beyond Earth.",
  },
  {
    title: "Curiosity Rover",
    date: "2012",
    agency: "NASA",
    description: "Mars rover exploring Gale Crater.",
    impact:
      "Curiosity confirmed Mars once had habitable conditions and continues analyzing Martian soil.",
  },
  {
    title: "International Space Station",
    date: "1998",
    agency: "NASA / Roscosmos / ESA",
    description: "Orbital research laboratory and global collaboration.",
    impact:
      "The ISS serves as a microgravity laboratory and a stepping stone for deep-space missions.",
  },
  {
    title: "SpaceX Starship",
    date: "2023",
    agency: "SpaceX",
    description: "Fully reusable deep-space transport system.",
    impact:
      "Starship aims to enable lunar bases and Mars settlements with rapid reusability.",
  },
];

const astronautData = [
  {
    name: "Mae Jemison",
    country: "United States",
    missions: 1,
    achievement: "First Black woman to travel in space.",
    avatar: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Yuri Gagarin",
    country: "Soviet Union",
    missions: 1,
    achievement: "First human to orbit Earth.",
    avatar: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sally Ride",
    country: "United States",
    missions: 2,
    achievement: "First American woman in space.",
    avatar: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chris Hadfield",
    country: "Canada",
    missions: 3,
    achievement: "Recorded music videos aboard the ISS.",
    avatar: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Valentina Tereshkova",
    country: "Russia",
    missions: 1,
    achievement: "First woman in space.",
    avatar: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Akihiko Hoshide",
    country: "Japan",
    missions: 3,
    achievement: "ISS commander and spacewalk leader.",
    avatar: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=400&q=80",
  },
];

const galleryImages = [
  {
    category: "Planets",
    title: "Saturn Rings",
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Planets",
    title: "Earth Horizon",
    src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Planets",
    title: "Mars Dust",
    src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Planets",
    title: "Jupiter Storm",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Galaxies",
    title: "Spiral Galaxy",
    src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Galaxies",
    title: "Andromeda Glow",
    src: "https://images.unsplash.com/photo-1473929735474-72f6a763d6e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Galaxies",
    title: "Deep Space",
    src: "https://images.unsplash.com/photo-1473929735474-72f6a763d6e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Galaxies",
    title: "Cosmic Bloom",
    src: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Nebulae",
    title: "Nebula Clouds",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Nebulae",
    title: "Orion Dust",
    src: "https://images.unsplash.com/photo-1473929735474-72f6a763d6e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Nebulae",
    title: "Carina Glow",
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Nebulae",
    title: "Stellar Nursery",
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
  },
];
