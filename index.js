// Handlebars.registerHelper('displayIngredient', function() {
//   return new Handlebars.SafeString(this.ingredient)
// })

// Handlebars.registerPartial('displayIngredient', document.getElementById("recipe-details-partial").innerHTML)
// function renderMain() {
//   var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
//   var html = template({name: 'Gordon Ramsay'});
// }

function init() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.ingredient)
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var html = template({name: 'Gordon Ramsay'});
  }

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-details-partial").innerHTML)
  function renderMain() {
    let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  }
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// var recipe = {
//   description: 'yummy chicken noodle soup',
//   ingredient: [
//     {quantity: "1 cup", name: 'chicken'},
//     {quantity: "3 nanoliters", name: 'stock'},
//     {quantity: "12", name: 'noodles'}
//   ]
// }

// var template = Handlebars.compile(document.getElementById("my-template").innerHTML);
// var html = template(recipe);
