const express = require('express');
const router = express.Router();
const recipeController = require("../../controllers/recipeController");

router.get('/', recipeController.allRecipes);
router.get('/:id', recipeController.getByIdRecipe);
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;