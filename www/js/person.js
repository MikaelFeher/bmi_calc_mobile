function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
}

Person.prototype.calculate_bmi = function(method) {
  calculator = new BMICalculator();

    if(method == "metric") {
      calculator.metric_bmi(this);
    } else {
      calculator.imperial_bmi(this);
    }
};
