myData = [
    'Ra',
    'Akimov',
    1984,
    'programming test',
    ['Katy', 'Mich']
 ];
 console.log(myData[4]);
 
 raObject = {
    name: 'Ra',
    lastname: 'Akimov',
    birthYear: 1984,
    job: 'programming test',
    familyMembers: ['Katy', 'Mich', 'Ra']
 };
 
 // console.log(youraObject);
 
 console.log(raObject.name);
 console.log(raObject['name']);
 
 const baseName = 'name';
 console.log(raObject['last' + baseName]);
 
 // const userInput = prompt('What do you want to know about Ra? Choose between name, lastname, birthYear, job, familyMembers');
 
 // if (youraObject[userInput]) {
 //    console.log(youraObject[userInput]);
 // } else {
 //    console.log('This property does not exist! Choose between name, lastname, birthYear, job, familyMembers');
 // }
 
 
 // Create new properties
 raObject.location = 'USA';
 const telega = 'telegram'
 raObject[telega] = '@RaAll';
 console.log(raObject);
 
 // Challenge
 // 'Ra has 3 family members and the first one is Katy'
 
 console.log(`${raObject.name} has ${raObject.familyMembers.length} family members and the first one is ${raObject.familyMembers[0]}`);
 
 