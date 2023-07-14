import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container } from "@mui/material";
import FormRecipe from "components/FormRecipe";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    authorRecipe: "",
    image: "",
    imageUrl: "",
    authorImage: "",
    description: "",
  });

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/recipes", recipe)
      .then(() => {
        setRecipe({});

        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateRecipe!", err);
      });
  };

  return (
    <Container align="center">
      <Link to="/">Retour à l'accueil</Link>
      <h1>Ajouter une recette</h1>
      <FormRecipe />
    </Container>
  );
};

export default CreateRecipe;
