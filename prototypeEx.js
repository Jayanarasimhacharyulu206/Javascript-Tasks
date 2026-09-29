let person = {
  name: "Narasimha",
  age: 21,
};
// console.log(person);

var abc = {
  talk: () => {
    console.log("I am talk method from abc");
  },
};
//syntax:prototype
//objectName.__proto__=prototype(objectName)
person.__proto__ = abc;
//After making abc as the prototype to the person
// person.talk();
//abc.talk();

var xyz = {
  walk: () => {
    console.log("I am Walk methon from xyz");
  },
};
abc.__proto__ = xyz;
// person.walk();
console.log(person);
