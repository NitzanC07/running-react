class Vo2maxCooperCalculate {
    constructor(distance, weight, gender, age) {
        this._distance = distance;
        this._weight =  weight;
        this._gender = gender;
        this._age = age;
    }

    _roundNumber(value, decimals) {
        const shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    compute() {
        const VO2max = (this._distance - 504.9) / 44.73;
        const VO2maxPersonal = (VO2max * this._weight)/1000;
        return [this._roundNumber(VO2max, 2), this._roundNumber(VO2maxPersonal, 2)];
    }
}

export default Vo2maxCooperCalculate;
