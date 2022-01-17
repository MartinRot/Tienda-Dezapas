import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSize() {
  const [talle, setTalle] = React.useState('');

  const handleChange = (event) => {
    setTalle(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Talle</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={talle}
          onChange={handleChange}
          autoWidth
          label="Talle"
        >
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={37}>37</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={39}>39</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={41}>41</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={43}>43</MenuItem>
          <MenuItem value={44}>44</MenuItem>
          <MenuItem value={45}>45</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}