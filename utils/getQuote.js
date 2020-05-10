import moment from 'moment';

export default function getQuote(vehiclePrice, deposit, deliveryDate, months) {
  const startDate = moment(deliveryDate).add(1, 'M').startOf('month');
  const loan = vehiclePrice - deposit;
  const monthly = loan / months;
  const arrangementFee = 88;
  const completionFee = 20;
  const totalLoan = loan + arrangementFee + completionFee;

  let payments = [];
  for (let i = 1; i <= months; i++) {
    const key = moment(startDate).add(i, 'M');
    const amount = monthly;
    payments.push({ key, amount });
  }
  payments[0].amount = payments[0].amount + arrangementFee;
  payments[0].note = `£${arrangementFee} arrangement fee included`;
  payments[payments.length - 1].amount = payments[payments.length - 1].amount + completionFee;
  payments[payments.length - 1].note = `£${completionFee}  completion fee included`;

  return {
    vehiclePrice,
    deliveryDate,
    deposit,
    months,
    totalLoan,
    payments,
  };
}
