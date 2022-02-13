import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavoutite: removeFavouriteHandler,
    isFavourite: itemIsFavouriteHandler,
  };
  function addFavouriteHandler(meetup) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.concat(meetup);
    });
  }
  function removeFavouriteHandler(meetupId) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => (meetup.id = meetupId));
  }
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
