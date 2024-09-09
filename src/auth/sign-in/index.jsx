import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function Signin() {
  return (
    <div className='flex mt-20 justify-center'>
      <SignIn/>
    </div>
  )
}

export default Signin
