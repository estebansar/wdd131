import recipes from "./recipes.mjs";

const main= document.querySelector('main');


const randomIndex = Math.floor(Math.random() * recipes.length);
const randomRecipe = recipes[randomIndex];
displayRecipes([randomRecipe]);
let currentRecipes = [randomRecipe];


const filterContainer = document.querySelector(".filter-buttons");
if (filterContainer) {
    filterContainer.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const selectedTag = e.target.dataset.tag;
            if (selectedTag === "All") {
                currentRecipes = [...recipes];
            } else {
                currentRecipes = recipes.filter(recipe => recipe.tags.includes(selectedTag));
            }
            displayRecipes(currentRecipes);
         }
    });
}


const sortSelect = document.querySelector("#sort");
if (sortSelect) {
    sortSelect.addEventListener("change" , e => {
        const value = e.target.value;
        if (value === "name") {
            currentRecipes.sort((a,b) => a.name.localeCompare(b.name));
        } else if(value === "rating") {
            currentRecipes.sort((a,b) => b.rating - a.rating);
        }
        displayRecipes(currentRecipes);
    });
}


function displayRecipes(recipesToShow) {
    document.querySelectorAll(".recipe-card").forEach(card => card.remove());

    recipesToShow.forEach(recipe => {
     const section = document.createElement('section');
     section.classList.add('recipe-card');
     section.innerHTML = recipeTemplate(recipe);
     main.appendChild(section);
    });
}

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 !==0;
    const empty = 5 - Math.ceil(rating);
    let stars = '';

    for (let i = 0; i < full; i++) stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;


    if (half) stars += `<span aria-hidden="true" class="icon-star-half">⭐</span>`;

    for (let i = 0; i <empty; i++) stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;

    return stars;
}

function recipeTemplate(recipe) {
    return `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-content">
            <div class="tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h2>${recipe.name}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateStars(recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
        </div>`;
}



const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function (e){
        e.preventDefault();
        const query = searchForm.querySelector('input').value.toLowerCase().trim();

        const filtered = recipes.filter(recipe =>
            recipe.name.toLocaleLowerCase().includes(query) ||
            recipe.description.toLocaleLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLocaleLowerCase().includes(query)) ||
            recipe.recipeIngredient.find(ingredient => ingredient.toLocaleLowerCase().includes(query))
        );

        filtered.sort((a,b) => a.name.localeCompare(b.name));

        displayRecipes(filtered);
    });
}

