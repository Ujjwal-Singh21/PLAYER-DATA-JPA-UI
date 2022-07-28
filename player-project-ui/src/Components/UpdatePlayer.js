import React, { useState, useEffect } from 'react'
import PlayerService from '../Services/PlayerService'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Paper } from '@mui/material'

function UpdatePlayer () {

  const paperStyle = { padding: '50px 20px', width: 500, margin: '30px auto' }

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setplayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const updatePlayer = (event) => {

    const player = { playerJerseyNumber, playerName, playerRuns, playerCountry }

    // Updation Logic
    //---------------
    PlayerService.updatePlayer(id, player)

      .then((resp) => {
        console.log(resp.data)
        alert(playerName.toUpperCase() + ' Profile Updated successfully')
      })
      .catch(err => {
        console.log(err)
      })

    navigate('/player-component')
  }

  // Initial render
  //---------------
  useEffect(() => {
    PlayerService.showPlayerByJerseyNumber(id)
      .then((response) => {
        setPlayerJerseyNumber(response.data.playerJerseyNumber)
        setplayerName(response.data.playerName)
        setPlayerRuns(response.data.playerRuns)
        setPlayerCountry(response.data.playerCountry)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Container>

        <Paper elevation={3} style={paperStyle}>
          
          <hr color='red' size='2'  width='75%'  />

          <h2 style={{ color: 'goldenrod', textAlign: 'center' }}>
            UPDATE {playerName.toUpperCase()} PROFILE
          </h2>

          <hr color='red' size='3' width='100%' /> <br />

          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='outlined-basic'
              label=' Enter Jersey Number :'
              variant='outlined'
              value={playerJerseyNumber}
              onChange={e => setPlayerJerseyNumber(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Name :'
              variant='outlined'
              value={playerName}
              onChange={e => setplayerName(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Runs :'
              variant='outlined'
              value={playerRuns}
              onChange={e => setPlayerRuns(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Country :'
              variant='outlined'
              value={playerCountry}
              onChange={e => setPlayerCountry(e.target.value)}
            />

            <br />

            <Button variant='contained' onClick={event => updatePlayer(event)}>
              UPDATE PLAYER
            </Button>

            <Button variant='contained' color='success' href='/player-component'>
              BACK TO HOME
            </Button>

          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default UpdatePlayer
