import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const RecipeCard = ({ title, ingredients, instructions }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {ingredients}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
