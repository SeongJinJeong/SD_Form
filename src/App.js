import React from 'react'
import Form from './Form'

function App() {
  return (
    <div className="App" style={appStyle}>
      <Form />
    </div>
  );
}

const appStyle = {
  backgroundColor : "gray",
  height : "100%",
  width: "100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}

export default App;
