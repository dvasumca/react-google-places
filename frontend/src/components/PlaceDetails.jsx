import { Paper, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { saveFavourite } from "../features/places/placeThunk";

function PlaceDetails() {

    const dispatch = useDispatch();

    const place = useSelector((state) => state.places.selectedPlace);

    const handleFavourite = () => {

        if (!place) {
            alert("Please select a place");
            return;
        }

        console.log(place);

        dispatch(saveFavourite(place))
            .unwrap()
            .then(() => {
                alert("Favourite Saved");
            })
            .catch((err) => {
                console.error(err);
                alert("Save Failed");
            });

    };

    return (

        <Paper sx={{ mt: 3, p: 2 }}>

            <Typography variant="h6">
                Selected Place
            </Typography>

            {place ? (
                <>
                    <Typography>
                        Name : {place.placeName}
                    </Typography>

                    <Typography>
                        Latitude : {place.latitude}
                    </Typography>

                    <Typography>
                        Longitude : {place.longitude}
                    </Typography>

                    <Typography>
                        Address : {place.address}
                    </Typography>

                    <Button
                        sx={{ mt: 2 }}
                        variant="contained"
                        color="success"
                        onClick={handleFavourite}
                    >
                        ⭐ ADD FAVOURITE
                    </Button>
                </>
            ) : (
                <Typography>No Place Selected</Typography>
            )}

        </Paper>

    );
}

export default PlaceDetails;