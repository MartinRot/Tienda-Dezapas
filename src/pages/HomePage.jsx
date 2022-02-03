import { Typography } from '@mui/material';
import React from 'react';
import Header from '../components/Header/Header';
import ItemList from '../components/ItemList/ItemList';

const HomePage = () => {
  return (

    <div className="App">
              
        <Header />      
        
        <br/>
        
        <ItemList />

        <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem eum illum totam, iste distinctio quod tenetur beatae sequi quibusdam quia rerum eos nemo dolorum porro possimus odit facere amet.
        </h2>

        <Typography variant="h1" color="initial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus. Inventore deserunt debitis itaque non provident saepe, earum porro delectus in illum temporibus accusantium quis, quae accusamus nisi molestias nihil.       
        </Typography>    

    </div>

  )
};

export default HomePage;

