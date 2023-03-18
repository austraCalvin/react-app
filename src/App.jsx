import './App.css';
import { Routing } from "./Components/Routing.jsx";
import { routeComponent } from "./Components/pathData.jsx";
import { routingNav } from "./Components/pathData.jsx";
import UserGlobal from './Context/UserGlobal.jsx';

function App() {
  return (

    <>
      <UserGlobal>
        <Routing routeComponent={routeComponent} routingNav={routingNav} />
      </UserGlobal>
    </>

  );
}

export default App;