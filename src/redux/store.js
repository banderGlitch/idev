import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';

export default configureStore({
    reducer : reducers
})