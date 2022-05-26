var a = [
  '',
  'one ',
  'two ',
  'three ',
  'four ',
  'five ',
  'six ',
  'seven ',
  'eight ',
  'nine ',
  'ten ',
  'eleven ',
  'twelve ',
  'thirteen ',
  'fourteen ',
  'fifteen ',
  'sixteen ',
  'seventeen ',
  'eighteen ',
  'nineteen ',
];
var b = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

export const inWords = num => {
  if ((num = parseInt(num).toString()).length > 15) return 'overflow';
  let n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
      : '';
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
      : '';
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) +
        'rupees only '
      : '';
  console.log(str);
  return str === '' ? 'zero' : str;
};
export const getContent = amount => {
  const pay = amount === '' ? 0 : parseInt(amount);
  console.log(pay == NaN);

  const year = pay;
  const month = pay / 12;
  const day = month / 30;
  const hour = day / 24;
  const minute = hour / 60;
  const second = minute / 60;
  return [
    {
      title: 'Year 😎',
      amount: `₹ ${parseInt(year)}`,
      amountInWord: inWords(year),
    },
    {
      title: 'Month',
      amount: `₹ ${parseInt(month)}`,
      amountInWord: inWords(month),
    },
    {
      title: 'Day',
      amount: `₹ ${parseInt(day)}`,
      amountInWord: inWords(day),
    },
    {
      title: 'Hour',
      amount: `₹ ${parseInt(hour)}`,
      amountInWord: inWords(hour),
    },
    {
      title: 'Minute',
      amount: `₹ ${parseInt(minute)}`,
      amountInWord: inWords(minute),
    },
    {
      title: 'Second',
      amount: `₹ ${parseInt(second)}`,
      amountInWord: inWords(second),
    },
  ];
};
