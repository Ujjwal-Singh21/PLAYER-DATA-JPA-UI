import axios from 'axios';

const PLAYER_BASE_URL = 'http://localhost:9191/api/player/'

class PlayerService {

    addPlayer(player){

        return axios.post(PLAYER_BASE_URL + 'add-Player', player)
    }

    updatePlayer(jerseyNumber, player) {

        return axios.put(PLAYER_BASE_URL + 'update-player' + '/' + jerseyNumber, player )
    }

    deletePlayer(jerseyNumber) {

        return axios.delete(PLAYER_BASE_URL + 'delete-player' + '/' + jerseyNumber )
    }

    showPlayerByJerseyNumber(jerseyNumber) {

        return axios.get(PLAYER_BASE_URL + 'show-by-jerseyNumber' + '/' + jerseyNumber)

    }

    showAllPlayers(){
        return axios.get(PLAYER_BASE_URL + 'show-all-players')
    }

    // EXTRA METHODS

    showPlayerByName(playerName) {
        
        return axios.get(PLAYER_BASE_URL + 'show-by-playerName' + '/' + playerName)
    }

    showPlayerByCountry(playerCountry) {
        
        return axios.get(PLAYER_BASE_URL + 'show-by-country' + '/' + playerCountry)
    }

    showPlayerByGreaterRuns(playerRuns) {

        return axios.get(PLAYER_BASE_URL + 'show-by-GreaterRuns' + '/' + playerRuns)
    }

}

export default new PlayerService()