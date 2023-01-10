"use strict";

const categoryContainer = document.getElementById("category-container");
const allCategories = categoryContainer.children;
let isSingleCategory = false;

function showSingleCategory(clickedCategory, clickedButton) {
    for (let i = 0; i < allCategories.length; i++) {
        const category = allCategories[i];
        category.classList.add("hidden");
    }
    clickedCategory.classList.remove("hidden");
    clickedCategory.classList.add("single-category");
    clickedButton.textContent = "Go Back";
    isSingleCategory = true;
}
function showAllCategory() {
    for (let i = 0; i < allCategories.length; i++) {
        const category = allCategories[i];
        const button = category.querySelector("button.see-all-products-btn");

        category.classList.remove("hidden", "single-category");
        button.textContent = "See All Products";
    }
    isSingleCategory = false;
}

for (let i = 0; i < allCategories.length; i++) {
    const category = allCategories[i];
    const button = category.querySelector("button.see-all-products-btn");

    button.addEventListener("click", () => {
        if (isSingleCategory) {
            showAllCategory();
        } else {
            showSingleCategory(category, button);
        }
    });
}
