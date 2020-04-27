import React from "react";

function Food({name, picture}){
return <div>
<h1>I hate {name}</h1>
<img src={picture} />
</div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JNs3joXdaQnOz5npvjBCBwHaEK%26pid%3DApi%26h%3D180%26p%3D0&f=1"
  },
  {
    name: "bulgogi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lj7yyyXRWboA0XYuWFZLWQHaEK%26pid%3DApi&f=1"
  },
  {
    name: "bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8BqQLDbDXIf4aoMKmzm8CwHaE8%26pid%3DApi%26h%3D180%26p%3D0&f=1"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish =><Food name={dish.name} picture={dish.image}/>)}
    </div>
        /* Food는 컴포넌트로 시작은 대문자, fav는 property, galic은 value이며
        function Food ({fav}){}는  value값을 바로 argument에 대입하는 방법*/
        
  );
}

export default App;
