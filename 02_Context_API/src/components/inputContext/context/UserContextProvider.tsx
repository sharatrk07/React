import { useState } from 'react'
import UserContext from './UserContext.js'

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  // we use this setUser value to get the details of the user in login page
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
