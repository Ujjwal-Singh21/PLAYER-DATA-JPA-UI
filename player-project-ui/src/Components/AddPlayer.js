import React, { useState } from 'react'
import PlayerService from '../Services/PlayerService'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Paper } from '@mui/material'

function AddPlayer () {

  const paperStyle = { padding: '50px 20px', width: 500, margin: '30px auto' }

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setplayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')
  const navigate = useNavigate()

  const addPlayer = (event) => {
    event.preventDefault()

    const player = { playerJerseyNumber, playerName, playerRuns, playerCountry }

    PlayerService.addPlayer(player)
      .then((response) => {
        console.log(response.data)
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

        <hr color='blue' size='2'  width='60%'  />

          <h2 style={{ color: 'red', textAlign: 'center' }}>
            ADD NEW PLAYER
          </h2>

        <hr color='blue' size='3' width='75%' /> <br />

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

            <Button variant='contained' onClick={event => addPlayer(event)}>
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
