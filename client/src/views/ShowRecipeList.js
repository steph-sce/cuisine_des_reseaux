import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeCard from "components/RecipeCard";
import Box from "@mui/material/Box";

function ShowRecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowRecipeList", err);
      });
  }, []);

  const recipeList =
    recipes.length === 0
      ? "there is no recipe record!"
      : recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ));

  return (
    <div className="ShowRecipeList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Recipes List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-recipe"
              className="btn btn-outline-warning float-right"
            >
              + Add New Recipe
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {recipeList}
        </Box>
      </div>
    </div>
  );
}

export default ShowRecipeList;
