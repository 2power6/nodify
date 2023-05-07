/*
Run this script on https://pages.ebay.com/sitemap.html to see the output in the console.
*/

const categories = [];
const categoryElements = document.querySelectorAll('#buy .h3content');

categoryElements.forEach(categoryElement => {
  const category = {
    name: categoryElement.querySelector('h3').textContent.trim(),
    subcategories: []
  };

  const subcategoryElements = categoryElement.querySelectorAll('li a,h4 a');
  subcategoryElements.forEach(subcategoryElement => {
    let parent_type = subcategoryElement.parentElement.tagName;
    const subcategory = {
      name: subcategoryElement.textContent.trim(),
      url: subcategoryElement.getAttribute('href'),
      parent_type: parent_type
    };
    category.subcategories.push(subcategory);
  });

  categories.push(category);
});

console.log(categories[0]);