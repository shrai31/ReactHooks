import "./App.css";
import BasicUseEffect from "./components/useEffect/BasicUseEffect";
import ComponentC from "./components/context/ComponentC";
// import { UserProvider } from "./components/context/UserContext";
// import UseCallbackHooks from "./components/useCallbacks/UseCallbackHooks";
import UseRefsHooks from "./components/useRef/UseRefsHooks";
import UseStatewithObject from "./components/useState/UseStatewithObject";
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Nitin"> 
        {/* <ChannelProvider value="HR"> */}
        <ComponentC />
        {/* <UseContextHooks /> */}
        {/* </ChannelProvider> */}
     </UserProvider>
    </div>
  );
}

export default App;

{/* <UserProvider value="Himanshu">
 <ChannelProvider value="HR">
 <ComponentC />
 <UseContextHooks />
 </ChannelProvider>
</UserProvider>; */}


 