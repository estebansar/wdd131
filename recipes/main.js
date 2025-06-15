import recipes from "./recipes.mjs";

const main= document.querySelector('main');

recipes.forEach(recipe => {
    const section = document.createElement('section');
    section.classList.add('recipe-card');

    section.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">

        <div class="recipe-content"> 

         <div class="tags">
             ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
         </div>

         <h2>${recipe.name}</h2>
         <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
             ${generateStars(recipe.rating)}
         </div>
         <p class="description">${recipe.description}</p>
        </div>
    
    `;

    main.appendChild(section);

});

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 !==0;
    const empty = 5 - Math.ceil(rating);
    let stars = '';

    for (let i = 0; i < full; i++) {
        stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    }

    if (half) {
        stars += `<span aria-hidden="true" class="icon-star-half">⭐</span>`;
    }

    for (let i = 0; i <empty; i++) {
        stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }

    return stars;
}

