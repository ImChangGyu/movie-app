import React from 'react';

function Food({ name }){
  return <h1>I like {name}</h1>;
}

const foodILike = [{
  id:1,
  name:"Bibimbap"
},
{
  id:2,
  name:"kimbap"
}
]

function App() {
  return (
    <div>  
      <h1>Hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name}/>)}
    </div>
  );
} 

export default App;