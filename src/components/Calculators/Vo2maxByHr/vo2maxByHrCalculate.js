class Vo2maxByHrCalculate {
    constructor(age, gender, hrRest) {
        this._age = age;
        this._gender = gender;
        this._hrRest = hrRest * 4;
    }

    _roundNumber(value, decimals){
        var shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    compute() {
        let hrMax = 0;
        if (this._gender === "female") {
            hrMax = 226 - this._age;
        }
        else if (this._gender === "male") {
            hrMax = 220 - this._age;
        }

        const vo2max = this._roundNumber(((hrMax / this._hrRest) * 15.3), 2);
        const results = {
            vo2max: vo2max, 
            hrMax: hrMax,
            hrRest: this._hrRest
        }
        return results;
    }
}

export default Vo2maxByHrCalculate;