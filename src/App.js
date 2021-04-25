import Login from "./components/Login";
import Player from "./components/Player";
const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return  code ? <Player code={code}/> :<Login/>
    
}

export default App;
