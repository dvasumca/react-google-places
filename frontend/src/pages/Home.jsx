import { Container, Typography } from "@mui/material";

import SearchBox from "../components/SearchBox";
import MapView from "../components/MapView";
import SearchHistory from "../components/SearchHistory";
import PlaceDetails from "../components/PlaceDetails";
import FavouriteList from "../components/FavouriteList";

function Home() {

  return (

    <Container maxWidth="md" sx={{mt:5}}>

      <Typography
        variant="h3"
        align="center"
        gutterBottom>

        Google Places Search

      </Typography>

      <SearchBox/>

      <MapView/>
	  
	  <PlaceDetails />

      <SearchHistory/>
	  
	  <FavouriteList />

    </Container>

  );

}

export default Home;