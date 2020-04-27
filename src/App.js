import React from "react";

function Food({fav}){
return <h1>I hate {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>hello !</h1>
      <Food 
        fav="kimchi" 
      />
      <Food 
        fav="ramen" 
      />
      <Food 
        fav="gulbi" 
      />
      <Food 
        fav="galic" 
      />
    </div>
  )
}

export default App;
