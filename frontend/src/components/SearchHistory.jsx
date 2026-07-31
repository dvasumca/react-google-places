import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@mui/material";

import { useSelector } from "react-redux";

function SearchHistory() {

    const history = useSelector(
        state => state.places.history
    );

    return (

        <Paper sx={{ mt: 3, p: 2 }}>

            <Typography variant="h6">
                Search History
            </Typography>

            {
                history.length === 0 ? (

                    <Typography color="text.secondary">
                        No searches yet.
                    </Typography>

                ) : (

                    <List>

                        {
                            history.map((item, index) => (

                                <ListItem key={index}>

                                    <ListItemText
                                        primary={item.placeName}
                                        secondary={item.address}
                                    />

                                </ListItem>

                            ))
                        }

                    </List>

                )
            }

        </Paper>

    );

}

export default SearchHistory;