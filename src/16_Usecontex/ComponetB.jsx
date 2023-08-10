import React from 'react'
import { UserContext } from './Main'
import { AdminContext } from './Main'
import { useContext } from 'react'

const ComponetB = () => {

    const user = useContext(UserContext)
    const admin = useContext(AdminContext)

  return (
    <div>
        <h1>
            {user} : {admin}
        </h1>
    </div>
  )
}

export default ComponetB