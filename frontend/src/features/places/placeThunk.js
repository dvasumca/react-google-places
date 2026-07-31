import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const saveFavourite = createAsyncThunk(
    "places/saveFavourite",
    async (place) => {

        const response = await api.post("/favorites", place);

        return response.data;
    }
);

export const loadFavourites = createAsyncThunk(
    "places/loadFavourite",
    async () => {

        const response = await api.get("/favorites");

        return response.data;
    }
);

export const deleteFavourite = createAsyncThunk(
    "places/deleteFavourite",
    async (id) => {
        await api.delete(`/favorites/${id}`);
        return id;
    }
);