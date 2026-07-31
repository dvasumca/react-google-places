import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import {
    loadFavourites,
    deleteFavourite
} from "../features/places/placeThunk";

function FavouriteList() {

    const dispatch = useDispatch();

    const favourites = useSelector(
        state => state.places.favourites
    );

    useEffect(() => {
        dispatch(loadFavourites());
    }, [dispatch]);

    return (
        <Paper sx={{ mt: 3, p: 2 }}>

            <Typography variant="h6">
                Favourite Places
            </Typography>

            <List>

                {favourites.length === 0 ? (

                    <Typography color="text.secondary">
                        No favourite places found.
                    </Typography>

                ) : (

                    favourites.map((place) => (

                        <ListItem
                            key={place.id}
                            secondaryAction={
                                <IconButton
                                    color="error"
                                    onClick={() => dispatch(deleteFavourite(place.id))}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >

                            <ListItemText
                                primary={place.placeName}
                                secondary={place.address}
                            />

                        </ListItem>

                    ))

                )}

            </List>

        </Paper>
    );
}

export default FavouriteList;