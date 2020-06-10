import * as doc from "./document.js";
const { currencysArr, baseEndPoint, currencys } = doc;

export const generateOptions = () => {
    return currencysArr.map(([currencyId, currencyName]) => {
      return `<option value="${currencyId}">${currencyId} - ${currencyName}</option>`
    }).join("\n");
  }
  
export const fetchByBase = async (base = "USD") => {
  const res = await fetch(`${baseEndPoint}?base=${base}`);
  const data = await res.json();
  return data;
}

export const converter = async(from, to, amount) => {
  if(!currencys[from]){
    currencys[from] = await fetchByBase(from);
  }
  const rate = currencys[from].rates[to];
  return amount * rate;
}

export const formatter = (amount, base) => {
  return Intl.NumberFormat("en-US",{
      style: 'currency',
      currency: base
   }).format(amount);
}