class BmiCalculate {
    constructor(weight, height, age) {
        this._weight = weight;
        this._height = height / 100;
        this._age = age;
        this._textResult = "";
    }

    _roundNumber(value, decimals) {
        const shifter = Math.pow(10, decimals);
        return Math.round(value * shifter) / shifter;
    }

    _verbalsResult(bmi) {
        if (this._age < 50) {
            if (bmi <= 18.5){
              return this._textResult = "לא תקין, תת-משקל.";
            }else if ((bmi > 18.5) && (bmi <= 25)){
              return this._textResult = "המשקל נמצא בטווח התקין.";
            }else if ((bmi > 25) && (bmi <= 30)){          
              return this._textResult = "לא תקין, עודף משקל.";
            }else if((bmi > 30) && (bmi <= 40)){
              return this._textResult = "לא תקין, השמנה."
            }else if ((bmi > 40)){
              return this._textResult = "לא תקין, השמנת יתר חמורה."
            }
        } else if (this._age >= 50) {
            if (bmi <= 18.5){
              return this._textResult = "לא תקין, תת-משקל."
            }else if ((bmi > 18.5) && (bmi <= 27)){
              return this._textResult = "המשקל נמצא בטווח התקין."
            }else if ((bmi > 27) && (bmi <= 30)){
              return this._textResult = "לא תקין, עודף משקל."
            }else if((bmi > 30) && (bmi <= 40)){
              return this._textResult = "לא תקין, השמנה."
            }else if ((bmi > 40)){
              return this._textResult = "לא תקין, השמנת יתר חמורה."
            }
        }
    }

    compute() {
        const bmi = (this._weight / (this._height ** 2));
        this._textResult = this._verbalsResult(bmi);
        return [this._roundNumber(bmi, 2), this._textResult];
    }

}

export default BmiCalculate;