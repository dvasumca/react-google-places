import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPlace } from "../features/places/placeSlice";

function SearchBox() {

    const dispatch = useDispatch();

    const handleKeyDown = (event) => {

        if (event.key === "Enter") {

            const value = event.target.value.trim();

            if (value !== "") {

                dispatch(
                    setPlace({
                        placeId: Date.now().toString(),
                        placeName: value,
                        address: value,
                        latitude: 17.385,
                        longitude: 78.486
                    })
                );

                event.target.value = "";
            }
        }
    };

    return (
        <TextField
            fullWidth
            label="Search Place"
            placeholder="Type a place and press Enter"
            onKeyDown={handleKeyDown}
        />
    );
}

export default SearchBox;