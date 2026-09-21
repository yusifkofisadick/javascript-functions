function bmiCalculator(weight, height) {
    // Calculate BMI (weight in kg divided by height in meters squared)
    var bmi = weight / (height * height);
    
    // Round the BMI to the nearest whole number or decimal if needed by your validator. 
    // Usually, this challenge expects Math.round(bmi)
    var bmi = Math.round(bmi);

    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}
