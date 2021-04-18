import React from 'react'
import { List as MaterialUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const transactions = [
    { id: 1, type: 'Expense', category: 'Grocery', amount: '125', date: '18 April 2021'},
    { id: 2, type: 'Income', category: 'Salary', amount: '25', date: '14 April 2021'},
    { id: 3, type: 'Income', category: 'Grandma', amount: '75', date: '12 April 2021'}
  ];

  return (
    <MaterialUIList dense={false} className={classes.list}>
      {transactions.map(transaction => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`${transaction.amount}zł - ${transaction.date}`}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MaterialUIList>
  )
}

export default List;
