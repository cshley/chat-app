import React from 'react';
import React, { Components } from 'react'
import MessageList from "./components/MessageList"
import SendMessageForm from "./components/SendMessageForm"
import RoomList from "./components/RoomList"
import NewRoomForm from "./components/NewRoomForm"



class App extends Components { 
  render() {
  return (
    <div className="App">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
  
    </div>
    );
  }
}

export default App;
