import { createSlice } from "@reduxjs/toolkit";

import {
    saveFavourite,
    loadFavourites,
    deleteFavourite
} from "./placeThunk";

const initialState = {

    selectedPlace: null,

    history: [],

    favourites: []

};

const placeSlice = createSlice({

    name: "places",

    initialState,

    reducers: {

        setPlace(state, action) {

            state.selectedPlace = action.payload;

            // Remove duplicate history
            state.history = state.history.filter(
                item => item.placeName !== action.payload.placeName
            );

            // Add latest search on top
            state.history.unshift(action.payload);

        }

    },

    extraReducers: (builder) => {

        builder.addCase(saveFavourite.fulfilled, (state, action) => {

            state.favourites.push(action.payload);

        });

        builder.addCase(loadFavourites.fulfilled, (state, action) => {

            state.favourites = action.payload;

        });

        builder.addCase(deleteFavourite.fulfilled, (state, action) => {

            state.favourites = state.favourites.filter(
                item => item.id !== action.payload
            );

        });

    }

});

export const { setPlace } = placeSlice.actions;

export default placeSlice.reducer;