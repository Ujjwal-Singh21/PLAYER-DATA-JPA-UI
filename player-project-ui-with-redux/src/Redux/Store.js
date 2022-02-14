import {createStore} from 'redux'
import playerReducer from './Player/playerReducer'

const store = createStore(playerReducer)

export default store