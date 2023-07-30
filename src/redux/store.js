const { configureStore } = require("@reduxjs/toolkit");
import pcBuilderReducer from './features/pcBuilder/pcBuilderSlice.js'

const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer
    }
})
export default store