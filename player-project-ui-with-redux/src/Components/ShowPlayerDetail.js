import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerService from '../Services/PlayerService'
import Box from '@mui/material/Box'
import {Table,TableCell,TableContainer,TableRow,Paper,Button,Container} from '@mui/material'
import { showPlayerByJerseyNumber } from '../Redux'
import { connect } from 'react-redux'

function ShowPlayerDetail (props) {
  
  const { playerData, showPlayerByJerseyNumber } = props

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }

  const params = useParams()
  const id = params.id

  useEffect(() => {
    PlayerService.showPlayerByJerseyNumber(id)
      .then((response) => {
        showPlayerByJerseyNumber(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <Container>

      <Paper elevation={3} style={paperStyle}>

        <h2 style={{ color: 'red', textAlign: 'center' }}>
          {playerData.playerName} Details
        </h2>

        <Box
          component='form'
          sx={{ '& > :not(style)': { m: 1 } }}
          noValidate
          autoComplete='off' >

          <TableContainer component={Paper}>

            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              
              <TableRow>
                <TableCell>
                  <b> Player Jersey Number : </b>
                </TableCell>
                <TableCell>
                  <b>{playerData.playerJerseyNumber}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Name: </b>
                </TableCell>
                <TableCell>
                  <b>{playerData.playerName}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Runs: </b>
                </TableCell>
                <TableCell>
                  <b>{playerData.playerRuns}</b>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b> Player Country: </b>
                </TableCell>
                <TableCell>
                  <b>{playerData.playerCountry}</b>
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

const mapStateToProps = (state) => {
  return {
    playerData: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPlayerByJerseyNumber: (data) => dispatch(showPlayerByJerseyNumber(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPlayerDetail)
