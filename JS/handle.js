import { fromOption, fromAmount, toOption, toAmount } from "./document.js"
import { formatter, converter } from "./utils.js";

const handleInput = async () => {
  const rawAmount = await converter(
      fromOption.value,
      toOption.value,
      fromAmount.value
  )
  toAmount.innerHTML = formatter(rawAmount, toOption.value);
}

export default handleInput;