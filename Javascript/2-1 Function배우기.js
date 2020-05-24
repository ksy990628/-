function sayHello(name,age){
  return `Hello ${name} you are ${age} years old`;
}


const greet = sayHello("Nicolas",22)
console.log(greet)


const calculator = {
  plus: function(a,b){
    return a+b;
  }

}

const plus = calculator.plus(5,5)
console.log(plus)