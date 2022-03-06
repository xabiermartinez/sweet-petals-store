import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = async () => {
    const res = await fetch("https://dulces-petalos.herokuapp.com/api/product");
    if (res.ok) {
        return res.json();
    }
};

export const getProductsAsync = createAsyncThunk("products/fetchProducts", async () => {
    return fetchProducts();
});

const initialState = {
    products: []
};

const reducers = {};

const extraReducers = builder => {
    builder
        .addCase(getProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
        });
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers,
    extraReducers
});

export const selectProducts = state => state.product.products;

export default productSlice.reducer;
