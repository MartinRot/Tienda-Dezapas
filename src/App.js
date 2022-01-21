import './App.css';

import NavBar from './components/NavBar/NavBar';
import { Typography } from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {  
   
  return (
      
  <div className="App">

    
    <NavBar />    
    <Header />

    <br/>
    <ItemListContainer />
    <br/>
    <ItemDetailContainer />
    <br/>

    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem eum illum totam, iste distinctio quod tenetur beatae sequi quibusdam quia rerum eos nemo dolorum porro possimus odit facere amet.
    </h2>
    <Typography variant="h1" color="initial">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.
    </Typography>      

          

  </div>
  );
}

export default App;