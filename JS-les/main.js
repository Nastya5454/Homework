console.log('скрипт запущен')

const myDescription = {
  name: "Vasya",
  age: 20,
  occupation: "Student",
  city: "Saint Petersburg",

  greet: function (name) {
    return "Hello, " + name + "!";
  },
};

console.log(myDescription.greet("Petya"));

const users = [
  {
    name: "Anya",
    age: 22,
    isAdmin: false,
  },
  {
    name: "Boris",
    age: 35,
    isAdmin: true,
  },
  {
    name: "Katya",
    age: 28,
    isAdmin: false,
  },
];

let regularUsersCount = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    regularUsersCount = regularUsersCount + 1;
  }
}
console.log("Total regular users: " + regularUsersCount);
