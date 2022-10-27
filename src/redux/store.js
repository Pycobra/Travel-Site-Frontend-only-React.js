import { createStore, applyMiddleware } from "redux"
import rootReducer from "./root-reducer"
// import ReduxThunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";
import rootSaga  from "./root-sagas.js";



const sagaMiddleware = createSagaMiddleware()

// const middleware = [ReduxThunk]
const middleware = [sagaMiddleware]

//we cud use the below but cos we want to ability to add more middleware, we made it an array like above
//const store = createStore(rootReducer, applyMiddleware(logger))
export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)


export default { store };


