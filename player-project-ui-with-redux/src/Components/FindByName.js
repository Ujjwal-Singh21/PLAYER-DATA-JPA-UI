import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerService from '../Services/PlayerService'
import Box from '@mui/material/Box'
import {Table,TableCell,TableContainer,TableRow,Paper,Button,Container} from '@mui/material'
import { showPlayerByName } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function FindByName () {

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }

  const playerData = useSelector((state) => state.player)
  const dispatch = useDispatch()

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')

  const param = useParams()
  const name = param.name

  useEffect(() => {
    PlayerService.showPlayerByName(name)
    .then((response) => {
      dispatch(showPlayerByName(response.data))
    })
    .catch((error) => {
        console.log(error);
    })
  }, [])

  useEffect(() => {
    if(playerData){
      setPlayerJerseyNumber(playerData.playerJerseyNumber)
      setPlayerName(playerData.playerName)
      setPlayerRuns(playerData.playerRuns)
      setPlayerCountry(playerData.playerCountry)
    }
  }, [playerData])

  return (
      
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h2 style={{ color: 'red', textAlign: 'center' }}>
        SHOW PLAYER BY NAME
        </h2>
        <Box
          component='form'
          sx={{ '& > :not(style)': { m: 1 } }}
          noValidate
          autoComplete='off'
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableRow>
                <TableCell>
                  <b> Player Jersey Number : </b>
                </TableCell>
                <TableCell>
                  <b>{playerJerseyNumber}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Name: </b>
                </TableCell>
                <TableCell>
                  <b>{playerName}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Runs: </b>
                </TableCell>
                <TableCell>
                  <b>{playerRuns}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Country: </b>
                </TableCell>
                <TableCell>
                  <b>{playerCountry}</b>
                </TableCell>
              </TableRow>

              <br />
              <Button
                variant='contained'
                color='info'
                style={{ float: 'right' }}
                href='/player-component'
              >
                BACK TO HOME
              </Button>

              <br />
              <br />
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Container>
  )
}

export default FindByName
