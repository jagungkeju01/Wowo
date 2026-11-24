/* Interaksi TINGGSFOOD: daftar resep, pencarian, tema, detail, favorit, dan formulir resep. */
(() => {
  const $ = (selector) => document.querySelector(selector);
  const grid = $("#recipeGrid");
  const searchInput = $("#recipeSearch");
  const categoryList = $("#categoryList");
  const recipeModal = $("#recipeModal");
  const detailModal = $("#detailModal");
  const recipeForm = $("#recipeForm");
  const imageInput = $("#recipeImage");
  const imagePreview = $("#imagePreview");
  const toast = $("#toast");

  const STORAGE_KEY = "tinggsfood-recipes-v1";
  const THEME_KEY = "tinggsfood-theme";
  let recipes = loadRecipes();
  let activeCategory = "Semua";
  let selectedImage = "";
  let toastTimeout;

  function loadRecipes() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : window.initialRecipes.map((recipe) => ({ ...recipe, isCustom: false }));
    } catch (error) {
      console.warn("Data resep lokal tidak dapat dibaca.", error);
      return window.initialRecipes.map((recipe) => ({ ...recipe, isCustom: false }));
    }
  }

  function saveRecipes() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
      return true;
    } catch (error) {
      showToast("Penyimpanan browser penuh. Coba gunakan gambar yang lebih kecil.");
      return false;
    }
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
  }

  function safeImage(url) {
    const fallback = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";
    if (typeof url !== "string") return fallback;
    if (url.startsWith("data:image/") || /^https:\/\/images\.unsplash\.com\//.test(url)) return url;
    return fallback;
  }

  function renderRecipes() {
    const term = searchInput.value.trim().toLocaleLowerCase("id");
    const filtered = recipes.filter((recipe) => {
      const searchable = [recipe.name, recipe.category, recipe.description, ...(recipe.ingredients || [])].join(" ").toLocaleLowerCase("id");
      const matchesTerm = searchable.includes(term);
      const matchesCategory = activeCategory === "Semua" || recipe.category === activeCategory;
      return matchesTerm && matchesCategory;
    });

    $("#recipeCount").textContent = `${filtered.length} resep`;
    $("#emptyState").classList.toggle("hidden", filtered.length > 0);
    grid.innerHTML = filtered.map((recipe) => `
      <article class="recipe-card">
        <div class="recipe-card-image-wrap">
          <img class="recipe-card-image" src="${escapeHTML(safeImage(recipe.image))}" alt="${escapeHTML(recipe.name)}" loading="lazy">
          <span class="recipe-category">${escapeHTML(recipe.category)}</span>
          <button class="favorite-button ${recipe.favorite ? "is-favorite" : ""}" type="button" data-favorite="${escapeHTML(recipe.id)}" aria-label="${recipe.favorite ? "Hapus dari" : "Tambah ke"} favorit" title="Tandai favorit">${recipe.favorite ? "♥" : "♡"}</button>
        </div>
        <div class="recipe-card-body">
          <h3>${escapeHTML(recipe.name)}</h3>
          <p>${escapeHTML(recipe.description)}</p>
          <div class="card-bottom">
            <span class="card-time"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>${Number(recipe.time) || 0} menit</span>
            <button class="view-recipe" type="button" data-detail="${escapeHTML(recipe.id)}">Lihat resep →</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function openRecipeModal() {
    recipeModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => recipeForm.elements.name.focus(), 50);
  }

  function closeRecipeModal() {
    recipeModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function openDetail(id) {
    const recipe = recipes.find((item) => item.id === id);
    if (!recipe) return;
    $("#detailImage").src = safeImage(recipe.image);
    $("#detailImage").alt = recipe.name;
    $("#detailCategory").textContent = recipe.category;
    $("#detailTitle").textContent = recipe.name;
    $("#detailDescription").textContent = recipe.description;
    $("#detailMeta").innerHTML = [
      `◷ ${Number(recipe.time) || 0} menit`,
      `♧ ${Number(recipe.servings) || 1} porsi`,
      `◇ ${recipe.difficulty || "Mudah"}`
    ].map((item) => `<span>${escapeHTML(item)}</span>`).join("");
    $("#detailIngredients").innerHTML = (recipe.ingredients || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
    $("#detailSteps").innerHTML = (recipe.steps || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
    detailModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeDetail() {
    detailModal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    const button = $("#themeToggle");
    const isDark = theme === "dark";
    button.setAttribute("aria-label", isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
    button.title = isDark ? "Mode terang" : "Mode gelap";
    button.innerHTML = isDark
      ? '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>'
      : '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path></svg>';
  }

  function makeId() {
    return `user-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  }

  $("#themeToggle").addEventListener("click", () => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  $("#openAddRecipe").addEventListener("click", openRecipeModal);
  $("#heroAddRecipe").addEventListener("click", openRecipeModal);
  $("#communityAddRecipe").addEventListener("click", openRecipeModal);
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeRecipeModal));
  document.querySelector("[data-close-detail]").addEventListener("click", closeDetail);

  recipeModal.addEventListener("click", (event) => {
    if (event.target === recipeModal) closeRecipeModal();
  });
  detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal) closeDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeRecipeModal();
      closeDetail();
    }
  });

  searchInput.addEventListener("input", renderRecipes);
  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    categoryList.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip === button));
    renderRecipes();
  });

  grid.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail]");
    const favoriteButton = event.target.closest("[data-favorite]");
    if (detailButton) openDetail(detailButton.dataset.detail);
    if (favoriteButton) {
      const recipe = recipes.find((item) => item.id === favoriteButton.dataset.favorite);
      if (!recipe) return;
      recipe.favorite = !recipe.favorite;
      saveRecipes();
      renderRecipes();
      showToast(recipe.favorite ? "Resep ditambahkan ke favorit." : "Resep dihapus dari favorit.");
    }
  });

  $("#resetSearch").addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "Semua";
    categoryList.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.category === "Semua"));
    renderRecipes();
  });

  imageInput.addEventListener("change", () => {
    const file = imageInput.files && imageInput.files[0];
    selectedImage = "";
    imagePreview.classList.add("hidden");
    $("#uploadTitle").textContent = "Pilih gambar dari perangkat";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      imageInput.value = "";
      showToast("Gunakan gambar JPG, PNG, atau WebP.");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      imageInput.value = "";
      showToast("Ukuran gambar maksimal 3 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      selectedImage = String(reader.result || "");
      imagePreview.src = selectedImage;
      imagePreview.classList.remove("hidden");
      $("#uploadTitle").textContent = file.name;
    };
    reader.onerror = () => showToast("Gambar gagal dibaca. Coba pilih file lain.");
    reader.readAsDataURL(file);
  });

  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(recipeForm);
    const name = String(formData.get("name") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const ingredients = String(formData.get("ingredients") || "").split("\n").map((item) => item.trim()).filter(Boolean);
    const steps = String(formData.get("steps") || "").split("\n").map((item) => item.trim()).filter(Boolean);

    if (!name || !description || ingredients.length === 0 || steps.length === 0) {
      showToast("Lengkapi nama, deskripsi, bahan, dan langkah memasak.");
      return;
    }

    const newRecipe = {
      id: makeId(),
      name,
      category: String(formData.get("category")),
      author: "Resep Saya",
      time: Number(formData.get("time")),
      servings: Number(formData.get("servings")),
      difficulty: String(formData.get("difficulty")),
      image: selectedImage || "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      description,
      ingredients,
      steps,
      favorite: false,
      isCustom: true
    };

    recipes.unshift(newRecipe);
    if (!saveRecipes()) {
      recipes.shift();
      return;
    }
    recipeForm.reset();
    selectedImage = "";
    imagePreview.src = "";
    imagePreview.classList.add("hidden");
    $("#uploadTitle").textContent = "Pilih gambar dari perangkat";
    closeRecipeModal();
    searchInput.value = "";
    activeCategory = "Semua";
    categoryList.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.category === "Semua"));
    renderRecipes();
    showToast("Resep berhasil ditambahkan ke koleksi!");
    $("#resep").scrollIntoView({ behavior: "smooth" });
  });

  $("#menuToggle").addEventListener("click", () => {
    const nav = $(".main-nav");
    nav.classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(nav.classList.contains("open")));
  });
  document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => $(".main-nav").classList.remove("open")));

  $("#currentYear").textContent = new Date().getFullYear();
  let savedTheme = "light";
  try { savedTheme = localStorage.getItem(THEME_KEY) || "light"; } catch (_) {}
  setTheme(savedTheme === "dark" ? "dark" : "light");
  renderRecipes();
})();