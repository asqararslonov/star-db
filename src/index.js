// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./Components/App/App"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

fetch("https://swapi.dev/api/people/5").then((response) => {
  return response.json();
}).then((response)=> {
for(let key in response){
  document.body.innerHTML +=`${key}: <strong>${response[key]}</strong>`  + '<br />'
}
}) 