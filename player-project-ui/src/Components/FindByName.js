import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerService from '../Services/PlayerService'
import Box from '@mui/material/Box'
import {Table,TableCell,TableContainer,TableRow,Paper,Button,Container} from '@mui/material'

function FindByName () {

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }

  const [playerJerseyNumber, setPlayerJerseyNumber] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [playerRuns, setPlayerRuns] = useState('')
  const [playerCountry, setPlayerCountry] = useState('')

  const param = useParams()
  const name = param.name

  useEffect(() => {
    PlayerService.showPlayerByName(name)
    .then((response) => {
      setPlayerJerseyNumber(response.data.playerJerseyNumber)
      setPlayerName(response.data.playerName)
      setPlayerRuns(response.data.playerRuns)
      setPlayerCountry(response.data.playerCountry)
    })
    .catch((error) => {
        console.log(error);
    })
  }, [])

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
                color='error'
                style={{ float: 'right' }}
                href='/player-component'
              >
                Back To Home
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
