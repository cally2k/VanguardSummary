//FUND DATA AND DISPLAY

// Array of funds and their data

const funds = [
  {
    number: 26,
    rank: 2,
    name: "FTSE Developed World",
    type: "Equity|Global",
    risk: 5,
    availability: 132,
    monthlyPerformance: 0.011,
    annualPerformance: 0.1261
  },
  {
    number: 48,
    rank: 3,
    name: "S&P 500 UCITS ETF",
    type: "Equity|USA",
    risk: 5,
    availability: 97,
    monthlyPerformance: 0.011,
    annualPerformance: 0.1246
  },
  {
    number: 49,
    rank: 1,
    name: "U.S. Equity Index Fund",
    type: "Equity|USA",
    risk: 6,
    availability: 132,
    monthlyPerformance: 0.0135,
    annualPerformance: 0.155
  },
]

const searchFund = () => {
  let searchFundInput = prompt("Enter Fund No.");
  console.log ("You searched for fund number " + searchFundInput);

  const searchedFund = funds.filter (fund => {
    return fund.number === 49;
    // return fund.number === searchFundInput;
  })
  console.log(searchFundInput);
  console.log(searchedFund);
}

// const searchFund = () => {
//   let searchFundInput = prompt("Enter Fund No.");
//   console.log ("You searched for fund number " + searchFundInput);

//   const searchedFund = []
//   const searchedFundArray= funds.forEach (fund => {
//     if (searchFundInput === fund.number) {
//       return fund.number === searchFundInput;
//     }
//   })
//   console.log(searchFundInput);
//   console.log(searchedFund);
// }

searchFund();

// 

// const searchedFundArray = funds.filter(num => {
//   console.log("pre-test");
//   return num > 5;
// })
