const input = document.querySelector("#input");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#below4");
const all = document.querySelector("#All");
const veg = document.querySelector("#Veg");
const nonVeg = document.querySelector("#Non-Veg");

const recipes = [
  // The recipe objects you provided go here
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

function renderRecipes(recipes) {
  const recipeList = document.querySelector(".recipes-list");
  recipeList.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.imageSrc}" alt="${recipe.name}">
      <p>${recipe.type}</p>
      <div class="d-flex align-items-center justify-content-between gap-2">
        <h4 style="font-size: 22px;" class="Rname">${recipe.name}</h4>
        <p>⭐ ${recipe.rating}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between" id="time">
        <p>${recipe.time}</p>
        <button class="btns like-button " data-index="${index}">
        <span  class="material-symbols-outlined  ">favorite</span>
       
          <span style="color:black"class="material-symbols-outlined">mode_comment</span>
        </button>
      </div>
    `;

    recipeList.appendChild(card);

    // Adding event listener to the like button
    const likeButton = card.querySelector(".like-button");
    likeButton.addEventListener("click", () => {
      updateLike(index);
    });
  });
}

renderRecipes(recipes);

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query)
  );
  renderRecipes(filteredRecipes);
});

all.addEventListener("click", () => {
  renderRecipes(recipes);
});

veg.addEventListener("click", () => {
  const filteredRecipes = recipes.filter((recipe) => recipe.type === "veg");
  renderRecipes(filteredRecipes);
});
nonVeg.addEventListener("click", () => {
  const filteredRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
  renderRecipes(filteredRecipes);
});

checkbox1.addEventListener("click", () => {
  const filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.0);
  renderRecipes(filteredRecipes);
});
checkbox2.addEventListener("click", () => {
  const filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  renderRecipes(filteredRecipes);
});

function updateLike(index) {
  // Your logic for updating the like status and visual representation
  const likedRecipe = recipes[index];
  likedRecipe.isLiked = !likedRecipe.isLiked;

  // Add your code to visually represent the like status, e.g., changing button color
  const likeButton = document.querySelector(`[data-index="${index}"]`);
  likeButton.style.color = likedRecipe.isLiked ? "red" : "black";
}
