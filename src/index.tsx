import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './styles/global.scss';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// async function example() {
//     const response = await fetch('https://api.edamam.com/api/food-database/v2/nutrients?app_id=b9b5075e&app_key=bfb38903c2fd0251dcf47f98780cc404', {
//         method: 'POST',
//         body: JSON.stringify({
//             'ingredients': [
//                 {
//                   'quantity': 1,
//                   'measureURI': 'kilogram',
//                   'foodId': 'food_bwrgmmqau78xrdazxx79obeezumz'
//                 }
//               ]
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     const json = await response.json();
//     console.log(json);
// }
// example();

// cors header 'access-control-allow-origin' missing
// async function ex() {
//     const response = await axios.get('https://api.edamam.com/auto-complete?app_id=b9b5075e&app_key=bfb38903c2fd0251dcf47f98780cc404')
//     console.log(response);
// }
// ex();
