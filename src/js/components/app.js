import vars from "../_vars";
import {validateIp} from './validation-ip'


vars.searchBtn.addEventListener('click', getData);
vars.inputIp.addEventListener('keydown', handleKey);

function getData() {
  if (validateIp(vars.inputIp.value)) {
    fetch(`
    https://geo.ipify.org/api/v2/country?apiKey=at_IxmA6XU9ddI9mnaqyXLI2gfkxd6lm&ipAddress=${vars.inputIp.value}`)
      .then(response => response.json())
      .then(console.log)
  }

}

function handleKey(e) {
  if (e.key == 'Enter') {
    getData();
  }
}
