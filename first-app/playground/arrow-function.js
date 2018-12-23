var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Bohdan',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
};

user.sayHi("a1","a2","a3");