import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../data/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(PRODUCTS);
        }, 500);
      });
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "products/fetchCategory",
  async (_, thunkApi) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const categories = [
            ...new Set(PRODUCTS.map((product) => product.category)),
          ];
          resolve(categories);
        }, 500);
      });
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id, thunkApi) => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const product = PRODUCTS.find((product) => product.id === id);
          resolve(product);
        }, 500);
      });
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    categories: [],
    product: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
