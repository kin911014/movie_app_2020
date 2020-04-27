import React from "react";
import PropTypes from "prop-types";
// 위는 property들이 알맞게 사용되었는지, 아니라면 어디에 문제가 
// 있는지 console에 오류를 보내준다.


const foodILike = [
  {
    id:1,
    name: "kimchi",
    rating:5.0,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JNs3joXdaQnOz5npvjBCBwHaEK%26pid%3DApi%26h%3D180%26p%3D0&f=1"
  },
  {
    id:2,
    name: "bulgogi",
    rating:4.9,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lj7yyyXRWboA0XYuWFZLWQHaEK%26pid%3DApi&f=1"
  },
  {
    id:3,
    name: "bibimbap",
    rating:4.8,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8BqQLDbDXIf4aoMKmzm8CwHaE8%26pid%3DApi%26h%3D180%26p%3D0&f=1"
  }
];

function Food({name, picture, rating}){
return <div>
<h1>I hate {name}</h1>
<h4>{rating}</h4>
<img src={picture} alt={name}/>
</div>
}

Food.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  // PropTypes.bool/ PropTypes.array / PropTypes.func 
  // PropTypes.number / PropTypes.object / PropTypes.string
  // PropTypes.symbol 이외에도 더있으니 propTypes doc에서 확인할 것
}

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
        /* Food는 컴포넌트로 시작은 대문자, fav는 property, galic은 value이며
        function Food ({fav}){}는  value값을 바로 argument에 대입하는 방법*/
        
  );
}

export default App;
