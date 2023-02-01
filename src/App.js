import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react'

function App() {
  const [userData, setuserData] = useState([])

  useEffect(() => {
    getUserData()
  }, [])


  const getUserData = () => {
    axios.get('https://my-json-server.typicode.com/Ritunjai/dataset/userdata')
      .then(response => {
        // Updating the state value
        setuserData(response?.data)
      })
      .catch(error => {
        // Handling the error
        // console.log("error", error)
      })
  }

  function calculatePoints(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}

  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Amount $</th>
          <th>Rewards</th>
        </tr>
        {userData?.length > 0 ? userData.map(item => <tr>
          <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>{calculatePoints(item.amount)}</td>
        </tr>) : 
        <>     Loading...   </>
        }
      </table>
    </div>
  );
}

export default App;
