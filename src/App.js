import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./action/myAction";

function App() {
  const count=useSelector((state)=>state.modifyValue)
  const dispatch=useDispatch();

  return (
    <div className="App">
      <button onClick={()=>dispatch(increment())}>+</button>
      {count}
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
