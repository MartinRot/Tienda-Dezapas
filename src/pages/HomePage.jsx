import { Typography } from '@mui/material';
import Header from '../components/Header/Header';
import ItemList from '../components/ItemList/ItemList';

const HomePage = () => {
 
  return (
  
    <div className="App">
              
        <Header />      
        
        <br/>
        
        <ItemList />
    
        <Typography variant="h1" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe.
        </Typography>    
  
    </div>
  
  )
  };



  

export default HomePage;

