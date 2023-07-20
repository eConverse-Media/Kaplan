// Only change code below this line
class Thermostat {
    constructor(temp) {
      this._temperature = temp;
    }
    get temperature() {
        console.log(this._temperature);
      //fTemp = this._temperature;
      //fToCTemp = 5/9 * (fTemp - 32);
      return this._temperature;
    }
    set temperature(updatedTemp) {
      this._temperature = updatedTemp;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius