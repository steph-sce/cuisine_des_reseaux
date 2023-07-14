import React from "react";
import { FormControl, TextField, Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const FormRecipe = () => (
  <FormControl alignitems="center">
    <Grid
      container
      spacing={2}
      columns={{ xs: 6, sm: 12, md: 12 }}
    >
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Titre recette"
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
    <Button variant="outlined" startIcon={<DeleteIcon />}>
      Enregistrer
    </Button>
  </FormControl>
);

export default FormRecipe;
