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
            '10-19': [35, 45, 51, 56, 57],
            '20-29': [33, 42, 46, 52, 53],
            '30-39': [31, 41, 45, 49, 50],
            '40-49': [30, 39, 44, 48, 49],
            '50-59': [26, 36, 41, 45, 46],
            '60-99': [20, 32, 36, 44, 43]
        }

        const vo2maxFemale = {
            '10-19': [25, 31, 39, 42, 43],
            '20-29': [24, 29, 37, 41, 42],
            '30-39': [23, 27, 36, 40, 41],
            '40-49': [21, 24, 33, 37, 38],
            '50-59': [20, 23, 31, 36, 37],
            '60-99': [17, 20, 30, 31, 32]
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
