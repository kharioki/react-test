export function resolveTicker(values) {
  const keys = [
    'BID',
    'BID_SIZE',
    'ASK',
    'ASK_SIZE',
    'DAILY_CHANGE',
    'DAILY_CHANGE_RELATIVE',
    'LAST_PRICE',
    'VOLUME',
    'HIGH',
    'LOW',
  ];

  const rest = values.reduce((res, field, index) => {
    res[keys[index]] = field;
    return res;
  }, {});

  return rest;
}

export function resolveTrades(values) {
  const arr = [];
  const keys = ['ID', 'MTS', 'AMOUNT', 'PRICE'];
  values.map(x => {
    const trades = x.reduce((res, field, index) => {
      res[keys[index]] = field;
      return res;
    }, {});
    arr.push(trades);
    return x;
  });
  return arr;
}
