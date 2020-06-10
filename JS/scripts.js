import handleInput from "./handle.js";
import { generateOptions } from "./utils.js";
import { fromOption, toOption , form} from "./document.js";
// Generate all option
const options = generateOptions();
fromOption.innerHTML = options;
toOption.innerHTML = options;
// Event Listener 
form.addEventListener('input',handleInput);