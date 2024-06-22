import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe, index) => (
        <Grid item key={index} xs={12} sm={12} md={6}>
          <RecipeCard {...recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
