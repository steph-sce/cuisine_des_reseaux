const RecipeModel = require("../models/RecipeModel");

const allRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (error) {
    res.status(404).json({ norecipesfound: "No Recipes found" });
  }
};

const getByIdRecipe = async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.status(404).json({ norecipefound: 'No Recipe found' });
  }
};

const createRecipe = async (req, res) => {
  try {
    await RecipeModel.create(req.body);
    res.json({ msg: 'Recipe added successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Unable to add this recipe' });
  }
};

const updateRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: 'Updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Unable to update the Database' });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await RecipeModel.findByIdAndRemove(req.params.id, req.body);
    res.json({ msg: 'Recipe entry deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'No such a recipe' });
  }
};

module.exports = {
  allRecipes,
  getByIdRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
