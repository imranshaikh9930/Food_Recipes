# Food_Recipes

https://imranshaikh9930foodrecipes.netlify.app/

![Uploading Cookpal - Home.png…]()

Recipes Array:

An array named recipes contains objects, each representing a recipe. Each recipe has properties such as name, imageSrc, time, type (veg or non-veg), isLiked (boolean indicating whether the recipe is liked), and rating.

Rendering Function (renderRecipes):
The renderRecipes function takes an array of recipes as an argument and dynamically creates HTML elements to display each recipe card on the webpage.
It appends the created cards to a container with the class .recipes-list.

Like Button Event Listener (updateLike Function):
The updateLike function toggles the isLiked property of a recipe when the like button is clicked.
It visually represents the like status by changing the color of the like button. Liked recipes have a red button, while unliked recipes have a black button.
The updateLike function is called when a like button is clicked.

Filtering Functionality:
The code includes filtering functionality based on user input, recipe type, and rating.
The input field with the ID input filters recipes based on the entered text.
Buttons with IDs all, veg, and nonVeg filter recipes based on whether they are vegetarian, non-vegetarian, or display all recipes, respectively.
Checkboxes with IDs checkbox1 and checkbox2 filter recipes based on their rating being above or below 4.0, respectively.
Event Listeners:

Event listeners are added to various HTML elements, such as input fields and buttons, to trigger filtering and rendering based on user interactions.
Initial Rendering:

The renderRecipes function is initially called with the entire recipes array to display all recipes on the webpage.
