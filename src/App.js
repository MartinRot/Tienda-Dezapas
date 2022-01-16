import './App.css';

import NavBar from './components/NavBar/NavBar';
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {  
   
  return (
      
  <div className="App">

    <Container>
    <NavBar />
    
    <ItemListContainer />

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

    <ItemListContainer />
    </Container>      

  </div>
  );
}

export default App;