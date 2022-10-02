class FatPercentageSkinfoldCalculate {
    constructor(skinfoldWaist, weight, gender, age) {
        this._skinfoldWaist = skinfoldWaist;
        this._weight = weight;
        this._gender = gender;
        this._age = age;
    }

    _roundNumber(value, decimals) {
        const shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    _fatPrecentageTable() {
        const fatPercentage_male = {
            agesGroup20: [2.0, 3.9, 6.2, 8.5, 10.5, 12.5, 14.3, 16.0, 17.5, 18.9, 20.2, 21.3, 22.3, 23.1, 23.8, 24.3, 24.9],
            agesGroup25: [2.5, 4.9, 7.3, 9.5, 11.6, 13.6, 15.4, 17.0, 18.6, 20.0, 21.2, 22.3, 23.3, 24.2, 24.9, 25.4, 25.8],
            agesGroup30: [3.5, 6.0, 8.4, 10.6, 12.7, 14.6, 16.4, 18.1, 19.6, 21.0, 22.3, 23.4, 24.4, 25.5, 25.9, 26.5, 26.9],
            agesGroup35: [4.5, 7.7, 9.4, 11.7, 13.7, 15.7, 17.5, 19.2, 20.7, 22.1, 23.4, 24.5, 25.5, 26.3, 27.0, 27.5, 28.0],
            agesGroup40: [5.6, 8.1, 10.5, 12.7, 14.8, 16.8, 18.6, 20.2, 21.8, 23.2, 24.4, 25.6, 26.5, 27.4, 28.1, 28.6, 29.0],
            agesGroup45: [6.7, 9.2, 11.5, 13.8, 15.9, 17.8, 19.6, 21.3, 22.8, 24.7, 25.5, 26.6, 27.6, 28.4, 29.1, 29.7, 30.1],
            agesGroup50: [7.7, 10.2, 12.6, 14.8, 16.9, 18.9, 20.7, 22.4, 23.9, 25.3, 26.6, 27.7, 28.7, 29.5, 30.2, 30.7, 31.2],
            agesGroup55: [8.8, 11.3, 13.7, 15.9, 18.0, 20.0, 21.8, 23.4, 25.0, 26.4, 27.6, 28.7, 29.7, 30.6, 31.2, 31.8, 32.2],
            agesGroup56: [9.9, 12.4, 14.7, 17.0, 19.1, 21.0, 22.8, 24.5, 26.0, 27.4, 28.7, 29.8, 30.8, 31.6, 32.3, 32.9, 33.3]
        };
        const fatPercentage_female = {
            agesGroup20: [11.3, 13.5, 15.7, 17.7, 19.7, 21.5, 23.2, 24.8, 26.3, 27.7, 29.0, 30.2, 31.3, 32.3, 33.1, 33.9, 34.6],
            agesGroup25: [11.9, 14.2, 16.3, 18.4, 20.3, 22.1, 23.8, 25.5, 27.0, 28.4, 29.6, 30.8, 31.9, 32.9, 33.8, 34.5, 35.2],
            agesGroup30: [12.5, 14.8, 16.9, 19.0, 20.9, 22.7, 24.5, 26.1, 27.6, 29.0, 30.3, 31.5, 32.5, 33.5, 34.4, 35.2, 35.8],
            agesGroup35: [13.2, 15.4, 17.6, 19.6, 21.5, 23.4, 25.1, 26.7, 28.2, 29.6, 30.9, 32.1, 33.2, 34.1, 35.0, 35.8, 36.4],
            agesGroup40: [13.8, 16.0, 18.2, 20.2, 22.2, 24.0, 25.7, 27.3, 28.8, 30.2, 31.5, 32.7, 33.8, 34.8, 35.6, 36.4, 37.0],
            agesGroup45: [14.4, 16.7, 18.8, 20.8, 22.8, 24.6, 26.3, 27.9, 29.4, 30.8, 32.1, 33.3, 34.4, 35.4, 36.3, 37.0, 37.7],
            agesGroup50: [15.0, 17.3, 19.4, 21.5, 23.4, 25.2, 26.9, 28.6, 30.1, 31.5, 32.8, 34.0, 35.0, 36.0, 36.9, 37.6, 38.3],
            agesGroup55: [15.6, 17.9, 20.0, 22.1, 24.0, 25.9, 27.6, 29.2, 30.7, 32.1, 33.4, 34.6, 35.6, 36.6, 37.5, 38.3, 38.9],
            agesGroup56: [16.3, 18.5, 20.7, 22.7, 24.6, 26.5, 28.2, 29.8, 31.3, 32.7, 34.0, 35.2, 36.3, 37.2, 38.1, 38.9, 39.5]
        };

        const skinfolds = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 36];
        let fp = 0; // fp = Fat Percentage.

        if (this._gender === "female") {
                if(this._age <= 20){
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup20[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup20[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 20) && (this._age <= 25)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup25[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup25[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 25) && (this._age <= 30)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup30[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup30[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 30) && (this._age <= 35)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup35[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup35[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 35) && (this._age <= 40)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup40[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup40[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 40) && (this._age <= 45)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup45[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup45[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 45) && (this._age <= 55)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup55[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup55[i];
                        return fp;
                    }
                }
            }
            else if(this._age > 55) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_female.agesGroup56[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_female.agesGroup56[i];
                        return fp;
                    }
                }
            }
        }
        else if (this._gender === "male"){
            if(this._age <= 20) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup20[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup20[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 20) && (this._age <= 25)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup25[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup25[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 25) && (this._age <= 30)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup30[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup30[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 30) && (this._age <= 35)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup35[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup35[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 35) && (this._age <= 40)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup40[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup40[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 40) && (this._age <= 45)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) { 
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup45[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup45[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 45) && (this._age <= 50)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup50[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup50[i];
                        return fp;
                    }
                }
            }
            else if((this._age > 50) && (this._age <= 55)) {
                for(let i = 0; i <= skinfolds.length; i=i+1) {
                    if(i === 16) {
                        fp = fatPercentage_male.agesGroup55[i];
                        return fp;
                    } 
                    else if(this._skinfoldWaist <= skinfolds[i]) {
                        fp = fatPercentage_male.agesGroup55[i];
                        return fp;
                    }
                }
            }
            else if(this._age > 55) {
              for(let i = 0; i <= skinfolds.length; i=i+1) {
                if(i === 16) {
                    fp = fatPercentage_male.agesGroup56[i];
                    return fp;
                } 
                else if(this._skinfoldWaist <= skinfolds[i]) {
                    fp = fatPercentage_male.agesGroup56[i];
                    return fp;
                    }
                }
            }
        }
    }

    compute() {
        const fatPercentage = this._fatPrecentageTable();
        const fatMass = this._roundNumber(this._weight * (fatPercentage / 100), 2)
        const skinnyBodyMass = this._roundNumber(this._weight - fatMass, 2)
        return [fatPercentage, fatMass, skinnyBodyMass];
    }
}

export default FatPercentageSkinfoldCalculate;