import productReducer from "./productSlice";

describe("counter reducer", () => {
    const initialState = {
        products: []
    };
    it("should handle initial state", () => {
        expect(productReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });
});
