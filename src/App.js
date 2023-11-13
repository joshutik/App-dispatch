import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/Landpage/Landingpage';
import Lotery from './Components/Lottry/Lotery';
import Ownerslogin from './Components/Ownerlogin/Ownerslogin';
import Adminslogin from './Components/Adminlogin/Adminslogin';
import Confirm from './Components/Confirmation/Confirm';


function App() {
  return (
    <div className="App">
     {/* <Landingpage />
     <Lotery/>
     <Ownerslogin/>
     <Adminslogin/> */}
    <Confirm/>
    </div>
  );
}

export default App;
