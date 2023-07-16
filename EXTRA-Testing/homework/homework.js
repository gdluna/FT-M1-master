const layout = [
  [//A --> 0
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [//B --> 1
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [//C --> 2
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [//D --> 3
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [//E --> 4
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function getRowNumber(letter) {
  return letter.toUpperCase().charCodeAt() - 65;
}

//console.log(getRowNumber('A'));

function getSeat(letter, number) {
  const numberRow = getRowNumber(letter);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  return seat;
}

function checkSeatStatus(row, number) {
  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");

  const seat = getSeat(row, number);
  return seat.booked;
}

function book(row, number) {
  if (checkSeatStatus(row, number))
    return `Seat in ${row}${number} is already booked`;
  
  const seat = getSeat(row, number);
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`;
}

module.exports = {
  checkSeatStatus, /* Se puede exportar también utilizando nombres, por ejemplo
  checkSeatStatus: checkSeatStatus
  o bien
  funcion1: checkSeatStatus*/
  getRowNumber,
  book,
};
