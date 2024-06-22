import { Container, Paper, Typography } from "@mui/material";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 4 }}>
      <Paper
        elevation={8}
        sx={{
          padding: 2,
          borderRadius: 2,
        }}
      >
        <RecipeForm addRecipe={addRecipe} />
      </Paper>

      <Paper
        elevation={8}
        sx={{
          padding: 2,
          borderRadius: 2,
          marginTop: 2,
        }}
      >
        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <Typography variant="h3">No Recipes</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default App;
