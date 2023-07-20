import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import FormRecipe from "components/FormRecipe";
import { createRecipe } from "api/recipes";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});

  const handleTextInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    createRecipe(recipe);
    navigate("/");
  };

  return (
    <Container align="center">
      <Link to="/">Retour à l'accueil</Link>
      <h1>Ajouter une recette</h1>
      <FormRecipe
        handleTextInputChange={handleTextInputChange}
        onSubmit={onSubmit}
        recipe={recipe}
      />
    </Container>
  );
};

export default CreateRecipe;
