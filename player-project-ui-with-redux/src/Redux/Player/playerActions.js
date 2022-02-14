import { ADD_PLAYER } from './playerActionTypes'
import { UPDATE_PLAYER } from './playerActionTypes'
import { DELETE_PLAYER } from './playerActionTypes'
import { SHOW_PLAYER_BY_JERSEY_NUMBER } from './playerActionTypes'
import { SHOW_ALL_PLAYERS } from './playerActionTypes'
// extra 
import { SHOW_PLAYER_BY_NAME } from './playerActionTypes'
import { SHOW_PLAYER_BY_COUNTRY } from './playerActionTypes'
import { SHOW_PLAYER_BY_GREATER_RUNS } from './playerActionTypes'


export const addPlayerr = (data) => {
  return {
    type: ADD_PLAYER,
    payload: data
  }
}

export const updatePlayerr = (data) => {
  return {
    type: UPDATE_PLAYER,
    payload: data
  }
}

export const deletePlayerr = (data) => {
  return {
    type: DELETE_PLAYER,
    payload: data
  }
}

export const showPlayerByJerseyNumber = (data) => {
  return {
    type: SHOW_PLAYER_BY_JERSEY_NUMBER,
    payload: data
  }
}

export const showAllPlayerss = (data) => {
  return {
    type: SHOW_ALL_PLAYERS,
    payload: data
  }
}

// extra 

export const showPlayerByName = (data) => {
  return {
    type: SHOW_PLAYER_BY_NAME,
    payload: data
  }
}

export const showPlayerByCountry = (data) => {
  return {
    type: SHOW_PLAYER_BY_COUNTRY,
    payload: data
  }
}

export const showPlayerByGreaterRuns = (data) => {
  return {
    type: SHOW_PLAYER_BY_GREATER_RUNS,
    payload: data
  }
}
