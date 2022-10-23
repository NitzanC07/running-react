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
            '13-14': [33, 36, 38, 42, 49],
            '15-16': [36, 38, 40, 45, 51],
            '17-19': [38, 40, 45, 49, 55],
            '20-29': [22, 24, 38, 42, 51],
            '30-39': [20, 22, 31, 40, 49],
            '40-49': [18, 20, 27, 36, 45],
            '50-99': [15, 18, 24, 33, 42]
        }

        const vo2maxFemale = {
            '13-14': [20, 22, 24, 31, 33],
            '15-16': [22, 24, 26, 33, 36],
            '17-19': [24, 27, 29, 36, 40],
            '20-29': [20, 22, 29, 38, 49],
            '30-39': [18, 20, 27, 33, 45],
            '40-49': [13, 16, 22, 31, 40],
            '50-99': [11, 13, 20, 26, 38]
        }

        if (this._gender === 'male') {
            return vo2maxMale;
        } else {
            return vo2maxFemale;
        }
        
    }

    selectOneCell() {
        
    }

}

export default Vo2maxCooperCalculate;
