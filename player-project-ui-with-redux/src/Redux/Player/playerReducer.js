import { ADD_PLAYER } from './playerActionTypes'
import { UPDATE_PLAYER } from './playerActionTypes'
import { DELETE_PLAYER } from './playerActionTypes'
import { SHOW_PLAYER_BY_JERSEY_NUMBER } from './playerActionTypes'
import { SHOW_ALL_PLAYERS } from './playerActionTypes'
// extra
import { SHOW_PLAYER_BY_NAME } from './playerActionTypes'
import { SHOW_PLAYER_BY_COUNTRY } from './playerActionTypes'
import { SHOW_PLAYER_BY_GREATER_RUNS } from './playerActionTypes'

const initialState = {
  players: [],
  player: [],
  deletedPlayer: [],
  error: ''
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        player: action.payload
      }

    case UPDATE_PLAYER: {
      return {
        ...state,
        player: action.payload
      }
    }

    case DELETE_PLAYER:
      return {
        ...state,
        deletedPlayer: action.payload
      }

    case SHOW_PLAYER_BY_JERSEY_NUMBER:
      return {
        ...state,
        players: action.payload
      }

    case SHOW_ALL_PLAYERS:
      return {
        ...state,
        players: action.payload
      }

      // extra 
      
    case SHOW_PLAYER_BY_NAME:
      return {
        ...state,
        player: action.payload
      }

    case SHOW_PLAYER_BY_COUNTRY:
      return {
        ...state,
        players: action.payload
      }

    case SHOW_PLAYER_BY_GREATER_RUNS:
      return {
        ...state,
        players: action.payload
      }

    default:
      return state
  }
}

export default playerReducer
