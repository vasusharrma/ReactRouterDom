import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='py-5 text-3xl font-bold text-gray-700 bg-gray-200'>User : {userid} </div>
  )
}

export default User