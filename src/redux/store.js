import { createStore, applyMiddleware } from 'redux'
import { save, load } from 'redux-localstorage-simple'
import rootReducer from './ducks/index'

// los que se guardan en el localStorage
// const states = ['opciones', 'login', 'encuestas']
const states = ['menu']

const createStoreWithMiddleware = applyMiddleware(save({ states }))(createStore)

const store = createStoreWithMiddleware(rootReducer, load({ states }))

export default store