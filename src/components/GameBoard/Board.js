import React, { useState } from 'react';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Board = ({setplayer,player}) => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
 
  const navigate = useNavigate();

  const handleClick = (index) => {
     setplayer(!player ? true : false)
    if (winner || cells[index]) return;

    const newCells = [...cells];
    newCells[index] = xIsNext ? 'X' : 'O';
    setCells(newCells);

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
          setWinner(newCells[a]);
          navigate('/win'); // Navigate to '/win' route upon winning
          return;
        }
      }
    setXIsNext(!xIsNext);
  };

  const renderCell = (index) => (
    <Button
      size="lg"
      fontSize="3xl"
      onClick={() => handleClick(index)}
      disabled={cells[index] || winner}
      w={'100%'}
      h={'100px'}
    >
      {cells[index]}
    </Button>
  );

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      borderRadius="md"
      boxShadow='15px 15px 30px -1px gray'
      p={4}
    >
      {cells.map((cell, index) => (
        <GridItem key={index}  display="flex" justifyContent="center" alignItems="center">
          {renderCell(index)}
        </GridItem>
      ))}
    </Grid>
  );
};

export default Board;
