
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { useState } from 'react';
import './App.scss';
import { UserProvider } from "src/context/UserContext";



const App = () => {

  const [closeMenu, setCloseMenu] = useState(false);
  const handleCloseMenu = () => {setCloseMenu(!closeMenu)}


  return (
 
        <UserProvider>
        <Navigation closeNav={closeMenu}/>
        <Main closeNav={handleCloseMenu}/>
        <Footer closeNav={handleCloseMenu}/>
        </UserProvider>
    

  );
}

export default App;
