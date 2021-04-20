import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { MoneyManagerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
}

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(MoneyManagerContext);

  const submitTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }

    addTransaction(transaction);

    // Reset state to add new transaction
    setFormData(initialState);
  }

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" varient="subtitle2" gutterBottom>
          {/* Words that will be use by Speechly */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((cat) => <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amout" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </Grid>
      <Button className={classes.transaction} varient="contained" color="inherit"  onClick={submitTransaction}>Submit</Button>
    </Grid>
  )
}

export default Form;
