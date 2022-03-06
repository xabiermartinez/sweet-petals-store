import productReducer from "./productSlice";

describe("counter reducer", () => {
    const initialState = {
        product: null,
        products: [],
        filteredProducts: []
    };
    it("should handle initial state", () => {
        expect(productReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });
});
