import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import RecipeSVG from "../assets/cooking.svg";

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission will go here
    addRecipe({ title, ingredients, instructions });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={RecipeSVG} alt="Share Your Recipe" className="image" />

      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Recipe Title"
          name="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="ingredients"
          label="Ingredients"
          id="ingredients"
          multiline
          rows={4}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="instructions"
          label="Instructions"
          id="instructions"
          multiline
          rows={6}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RecipeForm;
