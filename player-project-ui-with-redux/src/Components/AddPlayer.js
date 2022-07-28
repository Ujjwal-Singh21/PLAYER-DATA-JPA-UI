import React, { useState, useEffect } from 'react'
import PlayerService from '../Services/PlayerService'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Paper } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addPlayerr } from '../Redux'

function AddPlayer () {
  const paperStyle = { padding: '50px 20px', width: 500, margin: '30px auto' }

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setplayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const addPlayer = (event) => {
    event.preventDefault()

    const player = { playerJerseyNumber, playerName, playerRuns, playerCountry }

    PlayerService.addPlayer(player)
      .then((response) => {
        dispatch(addPlayerr(response.data))
        alert(`player added successfully`)
      })

      .catch((error) => {
        console.log(error)
      })

    navigate('/player-component')
  }

  return (
    <div>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h2 style={{ color: 'darkgreen', textAlign: 'center' }}>
            ADD NEW PLAYER
          </h2>

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
              onChange={e => setPlayerJerseyNumber(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Name :'
              variant='outlined'
              onChange={e => setplayerName(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Runs :'
              variant='outlined'
              onChange={e => setPlayerRuns(e.target.value)}
            />

            <TextField
              id='outlined-basic'
              label=' Enter Player Country :'
              variant='outlined'
              onChange={e => setPlayerCountry(e.target.value)}
            />

            <br />

            <Button
              variant='contained'
              onClick={event => addPlayer(event)}
            >
              ADD PLAYER
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

export default AddPlayer
