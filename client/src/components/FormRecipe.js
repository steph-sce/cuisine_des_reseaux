import React from "react";
import { FormControl, TextField, Button, Grid } from "@mui/material";

const FormRecipe = ({ handleTextInputChange, onSubmit, recipe }) => (
  <FormControl alignitems="center">
    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          name="title"
          label="Titre recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
          defaultValue={recipe?.title}
          onChange={(e) => handleTextInputChange(e)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          name="author"
          label="Créateur de la recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
          defaultValue={recipe?.author}
          onChange={(e) => handleTextInputChange(e)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Créateur de la recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Créateur de la recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Url de l'image de la recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Auteur de l'image de la recette"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Url du réseaux"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "10px" }}
          fullWidth
        />
      </Grid>
    </Grid>
    <Button variant="outlined" onClick={() => onSubmit()}>
      Enregistrer
    </Button>
  </FormControl>
);

export default FormRecipe;
