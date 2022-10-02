class FatPercentageCalculate {
    constructor(waist, weight, gender) {
        this._waist = waist;
        this._waistInches = waist / 2.54;
        this._weight = weight;
        this._weightPounds = weight * 2.2046;
        this._gender = gender;
        
    }

    _roundNumber(value, decimals){
        var shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    compute() {
        if (this._gender === "female") {
            const fp = (-76.76 + (4.15 * this._waistInches) - (0.082 * this._weightPounds))/this._weightPounds;
            const fpResult = this._roundNumber((fp * 100), 2);
            const fatMass =  this._roundNumber((this._weight * fp), 2);
            const skinnyBodyMass = this._roundNumber((this._weight - this._weight * fp), 2);
            return [fpResult, fatMass, skinnyBodyMass]
        }
        else if (this._gender === "male") {
            const fp = (-98.42 + (4.15 * this._waistInches) - (0.082 * this._weightPounds))/this._weightPounds;
            const fpResult = this._roundNumber((fp * 100), 2);
            const fatMass =  this._roundNumber((this._weight * fp), 2);
            const skinnyBodyMass = this._roundNumber((this._weight - this._weight * fp), 2);
            return [fpResult, fatMass, skinnyBodyMass]
        }
    }
}

export default FatPercentageCalculate;