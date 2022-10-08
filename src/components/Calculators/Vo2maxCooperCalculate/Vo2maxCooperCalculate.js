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

    dataTables() {
        const vo2maxMale = {
            '20-29': [30, 37, 47, 59, 60],
            '30-39': [28, 35, 43, 55, 56],
            '40-49': [25, 32, 39, 51, 52],
            '50-59': [23, 28, 35, 47, 48],
            '60 ומעלה': [20, 25, 32, 43, 44]
        }

        const vo2maxFemale = {
            '20-29': [27, 33, 42, 54, 55],
            '30-39': [25, 31, 40, 50, 51],
            '40-49': [22, 29, 36, 46, 47],
            '50-59': [20, 26, 33, 42, 43],
            '60 ומעלה': [18, 22, 28, 37, 38]
        }

        if (this._gender === 'male') {
            return vo2maxMale;
        } else {
            return vo2maxFemale;
        }
        
    }

}

export default Vo2maxCooperCalculate;
