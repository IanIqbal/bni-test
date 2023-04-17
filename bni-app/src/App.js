import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import {RouterProvider} from "react-router-dom"
import store from './store';
import router from './router';

function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={router} ></RouterProvider>
    </Provider>
  );
}

export default App;
