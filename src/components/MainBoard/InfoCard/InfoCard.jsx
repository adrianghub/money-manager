import React from 'react'

const isIncome = Math.round(Math.random());

function InfoCard() {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br />
      Add {isIncome ? 'income ' : 'expense '}
      for {isIncome ? '100zł ' : '25zł '} 
      in Category {isIncome ? 'Salary ' : 'Gifts '} 
      for {isIncome ? 'Friday ' : 'Sunday'}. 
    </div>
  )
}

export default InfoCard
