import React from 'react'
import loading from './loading.gif'

function Spinner() {
  return (
    <div className='text-center'>
      <img style={{ height: '100px' }} src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
