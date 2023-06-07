const getAge2 = function (birthYear, yearNow) {
    return yearNow - birthYear;
 }
 
 const myAge2 = getAge2(1984, 2023);
 console.log(myAge2);
 
 const getAge3 = (birthYear, yearNow) => yearNow - birthYear;
 
 const myAge3 = getAge3(1984, 2023);
 console.log(myAge3);
 
 const canBuyAlcohol = (birthYear, yearNow) => {
    const age = yearNow - birthYear;
    const isPersonOlderThan21 = age >= 18 ? true : false;
    return isPersonOlderThan21;
 }
 
 console.log(canBuyAlcohol(2003, 2023));
 