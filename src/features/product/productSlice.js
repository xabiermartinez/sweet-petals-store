import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = async () => {
    const res = await fetch("https://dulces-petalos.herokuapp.com/api/product");
    if (res.ok) {
        return res.json();
    }
};

const fetchProduct = async id => {
    const res = await fetch(`https://dulces-petalos.herokuapp.com/api/product/${id}`);
    if (res.ok) {
        return res.json();
    }
};

export const getProductsAsync = createAsyncThunk("products/fetchProducts", async () => {
    return fetchProducts();
});

export const getProductAsync = createAsyncThunk("products/fetchProduct", async id => {
    return fetchProduct(id);
});

const initialState = {
    products: [],
    filteredProducts: [],
    product: null
};

const reducers = {
    filterProducts: (state, action) => {
        const byNames = product => {
            const matchesName = product.name.toLowerCase().includes(action.payload.toLowerCase());
            const matchesBinomialName = product.binomialName.toLowerCase().includes(action.payload.toLowerCase());

            return matchesName || matchesBinomialName;
        };
        state.filteredProducts = state.products.filter(byNames);
    }
};

const extraReducers = builder => {
    builder
        .addCase(getProductsAsync.fulfilled, (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        })
        .addCase(getProductAsync.fulfilled, (state, action) => {
            state.product = action.payload;
        });
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers,
    extraReducers
});

export const { filterProducts } = productSlice.actions;

export const selectFilteredProducts = state => state.product.filteredProducts;
export const selectProduct = state => state.product.product;

export default productSlice.reducer;
