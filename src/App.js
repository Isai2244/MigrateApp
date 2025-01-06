import logo from './logo.svg';
import './App.css';
import Routing from './RouteConfig/RouteHandler';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './assets/css/login.css'
function App() {
  return (
    <div className="App">
    <Provider store={store} >
    <Routing/>
    </Provider>
    </div>
  );
}

export default App;
