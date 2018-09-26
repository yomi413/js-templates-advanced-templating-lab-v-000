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
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    // var html = template({name: 'Gordon Ramsay'});
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

function createRecipe() {
  // let name = document.getElementById("name").value;
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
}

function updateRecipe() {
  displayEditForm()
}
