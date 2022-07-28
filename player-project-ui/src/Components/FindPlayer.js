import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {Paper,Button,Container} from '@mui/material'

function FindPlayer () {
 
  const [playerName, setPlayerName] = useState('')
  const [country, setCountry] = useState('')
  const [runs, setRuns] = useState('')

  return (
    <div>
         {/* one  */}
      <Container>
        <Paper>
          <h2 style={{ color: 'blueviolet', textAlign: 'center' }}>
            <marquee> - FIND YOUR PLAYER - </marquee>
          </h2>
        </Paper>

        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete='off'
          
        >              
          <Button variant='contained' color='warning' href='/player-component'>
              BACK TO HOME
          </Button> <br /> <br /> 

          <TextField
            id='standard-basic'
            label=' Enter Player Name :'
            variant='standard'
            onChange={e => setPlayerName(e.target.value)}
          />

          <Button
            variant='contained'
            style={{ marginLeft: '30px' }}
            href={`/find-by-name/${playerName}`}
          >
            <b> Search </b>
          </Button>
        </Box>
      </Container>

     {/* Two  */}
      <Container>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='standard-basic'
            label=' Enter Country :'
            variant='standard'
            onChange={e => setCountry(e.target.value)}
          />

          <Button
            variant='contained'
            style={{ marginLeft: '30px' }}
            href={`/find-by-country/${country}`}
          >
            <b> Search </b>
          </Button>

        </Box>
      </Container>    

      {/* Three  */}
       <Container>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='standard-basic'
            label=' Enter Runs Limit :'
            variant='standard'
            onChange={e => setRuns(e.target.value)}
          />

          <Button
            variant='contained'
            style={{ marginLeft: '30px' }}
            href={`/find-by-gt-runs/${runs}`}
          >
            <b> Search </b>
          </Button>

        </Box>
      </Container>    
    </div>
  )
}

export default FindPlayer
