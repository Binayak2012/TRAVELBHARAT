
const destinations = [
  { id: 1, name: "Taj Mahal", state: "Uttar Pradesh", city: "Agra", category: "Heritage", label: "TIMELESS HERITAGE", description: "A breathtaking marble mausoleum and enduring symbol of love, admired for its symmetry, craftsmanship and gardens.", bestTime: "October – March", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Taj+Mahal+Agra", duration: "2–3 hours" },
  { id: 2, name: "Hawa Mahal", state: "Rajasthan", city: "Jaipur", category: "Heritage", label: "ROYAL ARCHITECTURE", description: "Jaipur's iconic Palace of Winds is known for its honeycomb façade, pink sandstone and rich royal history.", bestTime: "October – March", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Hawa+Mahal+Jaipur", duration: "1–2 hours" },
  { id: 3, name: "Kerala Backwaters", state: "Kerala", city: "Alappuzha", category: "Nature", label: "SLOW TRAVEL", description: "Drift past coconut groves, quiet villages and lush waterways in one of southern India's most peaceful landscapes.", bestTime: "September – March", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Alappuzha+Backwaters+Kerala", duration: "Half day – 1 day" },
  { id: 4, name: "Varanasi Ghats", state: "Uttar Pradesh", city: "Varanasi", category: "Religious", label: "SPIRITUAL INDIA", description: "Ancient riverside steps, sacred rituals and winding lanes create a powerful glimpse into India's living traditions.", bestTime: "October – March", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi", duration: "Half day" },
  { id: 5, name: "Hampi", state: "Karnataka", city: "Vijayanagara", category: "Heritage", label: "ANCIENT WONDERS", description: "Explore the atmospheric ruins of the Vijayanagara Empire among giant boulders, temples and striking stone architecture.", bestTime: "October – February", image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585", map: "https://maps.google.com/?q=Hampi+Karnataka", duration: "1–2 days" },
  { id: 6, name: "Palolem Beach", state: "Goa", city: "Canacona", category: "Beach", label: "COASTAL ESCAPE", description: "A crescent-shaped tropical beach framed by palms, with calm scenery and a relaxed coastal atmosphere.", bestTime: "November – February", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Palolem+Beach+Goa", duration: "Half day – 1 day" },
  { id: 7, name: "Manali", state: "Himachal Pradesh", city: "Kullu", category: "Adventure", label: "MOUNTAIN ADVENTURE", description: "A Himalayan town surrounded by pine forests, high peaks and trails, popular for outdoor adventures and mountain views.", bestTime: "March – June; October", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85", map: "https://maps.google.com/?q=Manali+Himachal+Pradesh", duration: "2–4 days" },
  { id: 8, name: "Mysore Palace", state: "Karnataka", city: "Mysuru", category: "Heritage", label: "ROYAL LEGACY", description: "An ornate palace celebrated for Indo-Saracenic architecture, elaborate interiors and the city's royal heritage.", bestTime: "October – March", image: "https://karnatakatourism.org/_next/image/?url=https%3A%2F%2Fweb-cms.karnatakatourism.org%2Fwp-content%2Fuploads%2F2025%2F06%2FMysuru-Palace-banner-1920_1100.jpg&w=3840&q=75", map: "https://maps.google.com/?q=Mysore+Palace", duration: "2–3 hours" }
];

const stateInfo = {
  "Rajasthan": { tag: "THE LAND OF KINGS", description: "Desert dunes, magnificent forts and colourful cities steeped in royal history.", image: "https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg", place: "Hawa Mahal" },
  "Kerala": { tag: "GOD'S OWN COUNTRY", description: "Lush tea gardens, serene backwaters and a coastline rich with culture and flavour.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85", place: "Kerala Backwaters" },
  "Uttar Pradesh": { tag: "A LAND OF STORIES", description: "Discover iconic monuments, sacred riverfronts and centuries of living history.", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85", place: "Taj Mahal" },
  "Himachal Pradesh": { tag: "THE MOUNTAIN ESCAPE", description: "Snow-dusted peaks, pine forests and charming hill towns in the Himalayas.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85", place: "Manali" },
  "Goa": { tag: "SUN, SAND & SOUL", description: "Golden beaches, Portuguese-era streets and a laid-back coastal spirit.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85", place: "Palolem Beach" },
  "Karnataka": { tag: "WHERE CULTURES MEET", description: "From royal palaces to ancient ruins, explore a state shaped by many eras.", image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585", place: "Hampi" }
};


const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
let activeCategory = "all";

function renderDestinations() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value !== "all" ? categoryFilter.value : activeCategory;
  const filtered = destinations.filter(place => {
    const matchesQuery = [place.name, place.state, place.city, place.category, place.description].some(value => value.toLowerCase().includes(query));
    const matchesCategory = category === "all" || place.category === category;
    return matchesQuery && matchesCategory;
  });

  grid.innerHTML = filtered.map(place => `
    <article class="destination-card" tabindex="0" role="button" aria-label="View details for ${place.name}" data-id="${place.id}">
      <div class="card-image-wrap">
        <img class="card-image" src="${place.image}" alt="${place.name}" loading="lazy">
        <span class="card-category">${place.category}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
      <div class="card-copy">
        <div class="card-location">${place.city}, ${place.state}</div>
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <div class="card-footer"><span>◷ &nbsp;${place.duration}</span><strong>Discover place&nbsp; ↗</strong></div>
      </div>
    </article>`).join("");
  resultCount.textContent = `${filtered.length} destination${filtered.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  grid.classList.toggle("hidden", filtered.length === 0);
  grid.querySelectorAll(".destination-card").forEach(card => {
    card.addEventListener("click", () => openDetails(Number(card.dataset.id)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openDetails(Number(card.dataset.id)); }
    });
  });
}

function openDetails(id) {
  const place = destinations.find(item => item.id === id);
  if (!place) return;
  document.getElementById("dialogImage").src = place.image;
  document.getElementById("dialogImage").alt = place.name;
  document.getElementById("dialogCategory").textContent = `${place.category} · ${place.city}, ${place.state}`;
  document.getElementById("dialogTitle").textContent = place.name;
  document.getElementById("dialogDescription").textContent = place.description;
  document.getElementById("dialogBestTime").textContent = place.bestTime;
  document.getElementById("dialogLocation").textContent = `${place.city}, ${place.state}`;
  document.getElementById("mapLink").href = place.map;
  document.getElementById("detailsDialog").showModal();
}

searchInput.addEventListener("input", renderDestinations);
categoryFilter.addEventListener("change", () => {
  activeCategory = "all";
  document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "all"));
  renderDestinations();
});

document.getElementById("searchButton").addEventListener("click", () => {
  renderDestinations();
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("quickFilters").addEventListener("click", event => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  activeCategory = chip.dataset.category;
  categoryFilter.value = "all";
  document.querySelectorAll(".chip").forEach(item => item.classList.toggle("active", item === chip));
  renderDestinations();
});

document.getElementById("resetSearch").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  activeCategory = "all";
  document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "all"));
  renderDestinations();
});

document.getElementById("dialogClose").addEventListener("click", () => document.getElementById("detailsDialog").close());
document.getElementById("detailsDialog").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

document.getElementById("stateList").addEventListener("click", event => {
  const button = event.target.closest(".state-item");
  if (!button) return;
  const state = button.dataset.state;
  const info = stateInfo[state];
  document.querySelectorAll(".state-item").forEach(item => item.classList.toggle("selected", item === button));
  document.getElementById("stateImage").src = info.image;
  document.getElementById("stateImage").alt = `Travel destination in ${state}`;
  document.getElementById("stateTag").textContent = info.tag;
  document.getElementById("stateTitle").textContent = state;
  document.getElementById("stateDescription").textContent = info.description;
  document.getElementById("stateExplore").setAttribute("aria-label", `Explore ${state}`);
});

document.getElementById("stateExplore").addEventListener("click", () => {
  const state = document.getElementById("stateTitle").textContent;
  searchInput.value = state;
  categoryFilter.value = "all";
  activeCategory = "all";
  document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === "all"));
  renderDestinations();
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("newsletterMessage").textContent = "Thanks! This demo form is working locally; connect a backend to collect subscriptions.";
  document.getElementById("emailInput").value = "";
});

const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderDestinations();
