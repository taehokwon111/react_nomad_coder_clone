import React from 'react';

function Food({fav}){
  return <h1>나는 {fav}가 조아요</h1>
}

function App() {
  return ( 
  <div className="App">
    <h1>임 주 녕</h1>
    <Food fav = "kimchi"/>
    <Food fav = "raman"/>
    <Food fav = "you"/>
    <Food fav = "rice"/>
    </div>
    )

}
 
export default App;
