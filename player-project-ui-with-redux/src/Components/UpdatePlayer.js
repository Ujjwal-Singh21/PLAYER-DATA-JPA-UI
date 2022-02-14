import React, { useState, useEffect } from 'react'
import PlayerService from '../Services/PlayerService'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Paper } from '@mui/material'
import { updatePlayerr } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function UpdatePlayer () {

  const paperStyle = { padding: '50px 20px', width: 500, margin: '30px auto' }

  const playerData = useSelector(state => state.player)
  const dispatch = useDispatch()

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setplayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const updatePlayer = event => {
    event.preventDefault()

    const player = { playerJerseyNumber, playerName, playerRuns, playerCountry }

    PlayerService.updatePlayer(id, player)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })

    navigate('/player-component')
  }

  useEffect(() => {
    PlayerService.showPlayerByJerseyNumber(id)
      .then((response) => {
        dispatch(updatePlayerr(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (playerData) {
      setPlayerJerseyNumber(playerData.playerJerseyNumber)
      setplayerName(playerData.playerName)
      setPlayerRuns(playerData.playerRuns)
      setPlayerCountry(playerData.playerCountry)
    }
  }, [playerData] )

  return (
    <div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h2 style={{ color: 'deepskyblue', textAlign: 'center' }}>
            UPDATE EXISTING PLAYER
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

            <Button variant='contained' onClick={event => updatePlayer(event)}>
              Submit
            </Button>

            <Button variant='contained' color='error' href='/player-component'>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default UpdatePlayer
