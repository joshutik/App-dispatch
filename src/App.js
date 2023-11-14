// import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/Landpage/Landingpage';
// import Lotery from './Components/Lottry/Lotery';
import Ownerslogin from './Components/Ownerlogin/Ownerslogin';
import Adminslogin from './Components/Adminlogin/Adminslogin';
// import Confirm from './Components/Confirmation/Confirm';
// import Rider from './Components/Riderpage/Rider';
// import Ownerslog from './Components/Overview/Ownerslog';
// import Lottery from './Components/Lotery/Lottery';


function App() {
  return (
    <div className="App">
     <Landingpage />
     {/* <Lotery/> */}
     <Ownerslogin/>
     <Adminslogin/> 
      {/* <Confirm /> */}
     {/* <Rider/>
     <Lottery/>
     <Lotery/> */}
     {/* <Ownerslog /> */}
    </div>
  );
}

export default App;
