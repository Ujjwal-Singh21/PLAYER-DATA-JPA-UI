import React from 'react'
import { Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='header'>
          <div>
            <HomeIcon fontSize='large' color='primary' />

            <Button href='/'
             style={{ marginRight: '20px' }}
            > PLAYER MANAGEMENT APPLICATION 
            </Button>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
