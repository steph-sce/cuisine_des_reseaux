import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RecipeCard(props) {
  const navigate = useNavigate();
  const { recipe } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardHeader
        title={recipe.title}
        onClick={() => navigate(`/show-recipe/${recipe._id}`)}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Recette"
      />
    </Card>
  );
}
