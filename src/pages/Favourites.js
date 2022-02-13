import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesMeetupPage() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;
  if(favouriteCtx.totalFavourites === 0) {
      content = <p>You got no Favourite. Satrt adding some ?</p>
  } else {
      content = <MeetupList meetups={favouriteCtx.favourites} />
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
}

export default FavouritesMeetupPage;
