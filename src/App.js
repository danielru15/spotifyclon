import { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDispatch } from "react-redux";
import { getToken } from "./Features/tokenSlice";
const code = new URLSearchParams(window.location.search).get("code")
console.log(code)
function App() {
  let dispatch = useDispatch()
  useEffect(() => {
  if (code ){
    dispatch(getToken(code))
    console.log('token asignado')
  }
  
  }, [code])
  
  return  code ? <Player code={code}/> :<Login/>
    
}

export default App;
