
function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

const createCell = (value) => ({
  value,
  isRevealed: false
})

const createBoard = (size) => {
  var values = [
    'Mouse', 'Mouse',
    'Rabbit', 'Rabbit',
    'Guinea Pig', 'Guinea Pig',
    'Dog', 'Dog',
    'Cat', 'Cat',
    'Rat', 'Rat',
    'Parrot', 'Parrot',
    'Duck', 'Duck'
  ]
  values = shuffle(values)

  return Array(size).fill(0).map(
    () => Array(size).fill(0).map(
      () => createCell(values.pop())
    )
  )
}

export default createBoard
