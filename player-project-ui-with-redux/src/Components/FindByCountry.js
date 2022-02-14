import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlayerService from '../Services/PlayerService'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button} from '@mui/material'
import {showPlayerByCountry} from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function FindByCountry () {

  const playerData = useSelector((state) => state.players)
  const dispatch = useDispatch()
 
  const [players, setPlayers] = useState([])

  const param = useParams()
  const country = param.country

  useEffect(() => {
    PlayerService.showPlayerByCountry(country)
      .then((response) => {
        dispatch(showPlayerByCountry(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if(playerData){
      setPlayers(playerData)
    }
  },[playerData])

  return (
    <div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b> JERSEY NUMBER </b>
                </TableCell>
                <TableCell>
                  <b> PLAYER NAME </b>
                </TableCell>
                <TableCell>
                  <b> PLAYER RUNS </b>
                </TableCell>
                <TableCell>
                  <b> PLAYER COUNTRY </b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {players.map(player => (
                <TableRow
                  key={player.playerJerseyNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {player.playerJerseyNumber}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {player.playerName}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {player.playerRuns}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {player.playerCountry}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

          <Button variant='contained' color='warning' href='/player-component'>
              Back To Home
          </Button> <br /> <br /> 

      </div>
    </div>
  )
}

export default FindByCountry
