const RecipeModel = require("../models/RecipeModel");

const allRecipes = (req,res) => {
  RecipeModel.find()
    .then(recipes => res.json(recipes))
    .catch(() => res.status(404).json({ norecipesfound: "No Recipes found" }));
};

const getByIdRecipe = (req,res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(() => res.status(404).json({ norecipefound: 'No Recipe found' }));
};

const createRecipe = (req,res) => {
  Recipe.create(req.body)
    .then(() => res.json({ msg: 'Recipe added successfully' }))
    .catch(() => res.status(400).json({ error: 'Unable to add this recipe' }));
};

const updateRecipe = (req,res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: 'Updated successfully' }))
    .catch(() =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
};

const deleteRecipe = (req,res) => {
  Recipe.findByIdAndRemove(req.params.id, req.body)
    .then(() => res.json({ mgs: 'Recipe entry deleted successfully' }))
    .catch(() => res.status(404).json({ error: 'No such a recipe' }));
};

module.exports = {
  allRecipes,
  getByIdRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
}