import React from 'react'
import ComponetA from './ComponetA'

export const UserContext = React.createContext()
export const AdminContext = React.createContext()

const Main = () => {
  return (
    <div>
      <UserContext.Provider value={"Darshan"}>
        <AdminContext.Provider value={"Darshu"}>
            <ComponetA />
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default Main