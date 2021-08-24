
import './App.css';
import ItemList from "./components/ItemList";
import Form from "./components/Form";
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);

  const addNewUser = (user)=>{
    setUserList([...userList,user])

  }
  return (
    <>
      <Form onClick = {addNewUser}/>
      <ItemList userList={userList}/>
    </>
  );
}

export default App;
