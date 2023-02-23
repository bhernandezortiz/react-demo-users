import React, { useEffect,useState } from 'react'
import SingleUser from './components/SingleUser'
import Users from './components/Users'

const App = () => {
  const [users, setUsers] = useState ([])
  const [singleUser, setSingleUser] = useState(null)

  useEffect(()=> {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/')
      const data = await response.json()
      setUsers(data)
    }
    getData()
  },[])

  const changeSingleUserState = async (id) => {
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    setSingleUser(data)
  }

  const setSingleUserToNull = () => {
    setSingleUser(null)
  }

  if(!singleUser) {
    return(
      <>
      <Users users={users} changeSingleUserState={changeSingleUserState}/>
      </>
    )
  }

  return <SingleUser singleUser={singleUser} setSingleUserToNull={setSingleUserToNull}/>

}

export default App;
