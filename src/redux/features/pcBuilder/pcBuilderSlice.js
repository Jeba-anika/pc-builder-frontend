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
            const categoryId = action.payload.categoryId
            state[categoryId] = action.payload
        }
    }
})

export const { addComponent } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer