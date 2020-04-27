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
    {/* Food는 컴포넌트로 시작은 대문자, fav는 property, galic은 value이며
    function Food ({fav}){}는  value값을 바로 argument에 대입하는 방법*/}
    </div>
  )
}

export default App;
