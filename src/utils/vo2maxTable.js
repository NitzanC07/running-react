class Vo2maxDataTable {
    constructor(gender, age, distance) {
        this._gender = gender;
        this._age = age;
        this._distance = distance;
    }

    maleDetails() {
        const vo2maxMale = {
            ages20to29: [30, 37, 47, 59, 60],
            ages30to39: [28, 35, 43, 55, 56],
            ages40to49: [25, 32, 39, 51, 52],
            ages50to59: [23, 28, 35, 47, 48],
            ages60up: [20, 25, 32, 43, 44]
        }

        return vo2maxMale;
    }

    femaleDetails() {
        const vo2maxFemale = {
            ages20to29: [27, 33, 42, 54, 55],
            ages30to39: [25, 31, 40, 50, 51],
            ages40to49: [22, 29, 36, 46, 47],
            ages50to59: [20, 26, 33, 42, 43],
            ages60up: [18, 22, 28, 37, 38]
        }

        return vo2maxFemale;
    }

}

export default Vo2maxDataTable;