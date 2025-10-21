// Create an object
let person = {
  name: "venthan",
  age: 25,
  
  // Method
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// Access properties
console.log("Name:", person.name);
console.log("Age:", person.age);

// Modify properties
person.age = 26;
person.name = "neethi";
console.log("Updated Name:", person.name);
console.log("Updated Age:", person.age);

// Call method
person.sayHello();
