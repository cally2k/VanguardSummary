const moneyStart = document.getElementById("moneyStart");
const returnEst = document.getElementById("returnEst");
const years = document.getElementById("years");
const result = document.getElementById("estimateResult");

// Calc
const investEstimate = (moneyStart, returnEst, years) => {
    const purchasingPower = (1 - inflationAverage) ** years;
    return (
    `Starting with £${moneyStart}, with an average return of ${returnEst}x each year, in ${years} years you will have approximately £` +
    moneyStart * returnEst ** years +
    `. However, accounting for inflation, this will have the equivalent purchasing power that £${
    purchasingPower * (moneyStart * returnEst ** years)
    } does today.`
    );
};

// Avg. Inflation
const inflationPast = [
    0.0445,
    0.0516,
    0.0363,
    0.0407,
    0.0461,
    0.0522,
    0.07,
    0.0752,
    0.0423,
    0.0253,
    0.0199,
    0.0263,
    0.0243,
    0.0183,
    0.0156,
    0.0133,
    0.008,
    0.0123,
    0.0126,
    0.0136,
    0.0134,
    0.0206,
    0.0233,
    0.0232,
    0.036,
    0.0217,
    0.033,
    0.0446,
    0.0283,
    0.0257,
    0.0146,
    0.0004,
    0.0066,
    0.0268,
    0.0248,
    0.181,
];
let inflationTotal = 0;
for (var i = 0; i < inflationPast.length; i++) {
    inflationTotal += inflationPast[i];
    console.log();
}
const inflationAverage = inflationTotal / inflationPast.length;

const click = () => {
    document.getElementById("estimateResult").innerHTML = investEstimate(moneyStart.value, returnEst.value, years.value);
}

document.getElementById("button").addEventListener("click", click)
