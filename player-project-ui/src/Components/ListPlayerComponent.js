import React, { useState, useEffect } from 'react'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button, colors} from '@mui/material'
import PlayerService from '../Services/PlayerService'
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

function ListPlayerComponent () {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    showAllPlayers()
  }, [])

  const showAllPlayers = () => {
    PlayerService.showAllPlayers()
      .then((response) => {
        setPlayers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const deletePlayer = (playerJerseyNumber) => {
    PlayerService.deletePlayer(playerJerseyNumber)
      .then((response) => {
        alert(` Player deleted successfully `)
        showAllPlayers()
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
     
        <h2 style={{ color: 'red' }}>
          <b> <marquee> - LIST OF ALL PLAYERS FROM DATABASE - </marquee> </b>
        </h2>
     
      <Button variant='contained'
         startIcon={<SaveIcon />}
        href='/add-player'>
        <b> Add New Player </b>
      </Button>

      <PersonSearchIcon fontSize='large' color='primary'  style={{ float: 'right' }} />
      <Button variant='contained' href='/find-player'  style={{ float: 'right' }} >
        <b> Find Your Player </b>
      </Button>

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
              <TableCell >
                <b> ACTIONS </b>
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

                <TableCell component='th' scope='row'>

                  <Button
                    variant='contained'
                    style={{ marginRight: '20px' }}
                    href = {`/update-player/${player.playerJerseyNumber}`}
                  >
                    <b> Update </b>
                  </Button>


                  <Button
                    variant='contained'
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePlayer(player.playerJerseyNumber)}
                  >
                    <b> Delete </b>
                  </Button>

                  <Button
                    variant='contained'
                    style={{ marginLeft: '20px' }}
                    href = {`/show-player/${player.playerJerseyNumber}`}
                  >
                    <b> Show Player </b>
                  </Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListPlayerComponent
