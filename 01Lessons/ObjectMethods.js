raObject = {
    name: 'Ra',
    lastname: 'Akimov',
    birthYear: 1984,
    job: 'programming test',
    familyMembers: ['Katy', 'Mich', 'Ra'],
    hasDriverLicense: false,
    // calcAge: function (birthYear) {
    //    return 2023 - birthYear;
    // }
    // calcAge: function () {
    //    // console.log(this);
    //    return 2023 - this.birthYear;
    // }
 
    calcAge: function () {
       // console.log(this);
       this.age = 2023 - this.birthYear;
       return 2023 - this.birthYear;
    },
 
    getSummary: function () {
       return `${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
    }
 };
 
//  console.log(raObject.calcAge());
 
//  console.log(raObject['calcAge'](1984));
//  console.log(raObject.calcAge());
//  console.log(raObject.calcAge());
//  console.log(raObject.calcAge());
//  console.log(raObject.calcAge());
//  console.log(raObject.age);
//  console.log(raObject.age);
//  console.log(raObject.age);
 
 
 // Challenge
 
 // 'Ra is a 37-year old programming test and he has a/no driver license'
 
 console.log(raObject.getSummary());
 