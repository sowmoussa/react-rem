import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCtx.isFavourite(props.id);

  function toggleFavouritesStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavoutite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "Add to Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
