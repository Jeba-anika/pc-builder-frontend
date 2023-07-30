const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    "01": {},
    "02": {},
    "03": {},
    "04": {},
    "05": {},
    "06": {}
}

const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        addComponent: (state, action) => {
            const categoryId = action.product.categoryId
            state[categoryId] = action.product
        }
    }
})

export const { } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer