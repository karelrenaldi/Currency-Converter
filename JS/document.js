import currencies from "./currencys.js";

export const fromOption = document.querySelector('[name="from_currency"]'); 
export const toOption = document.querySelector('[name="to_currency"]');
export const fromAmount = document.querySelector('[name="from_amount"]');
export const toAmount = document.querySelector('.to_amount');
export const form = document.querySelector('form');
export const currencysArr = Object.entries(currencies);
export const baseEndPoint = "https://api.exchangeratesapi.io/latest";
export const currencys = {};