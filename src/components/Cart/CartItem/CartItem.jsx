import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";
const CartItem = ({ item, onRemoveCartQty, onUpdateCartQty }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={ ()=>onUpdateCartQty( item.id,item.quantity-1)}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>

          {/* CALL BACK FUNCTIONS ARE VERY IMPORTANT  */}
          <Button type="button" size="small" onClick={ ()=> onUpdateCartQty(item.id,item.quantity+1)}>
            +
          </Button>
        </div>
        <Button type="button" color="secondary" variant="contained" onClick={  ()=>(
          onRemoveCartQty(item.id)   
        ) }>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
