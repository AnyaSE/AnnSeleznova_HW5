const studentsArray = ['Olga', 'Paul', 'Michael', 'John', 'Bob', 'Rob', 'Kevin', 'Vicky', 'David', 'Karina'];

studentsArray.push('Vova', 'Alfred');

studentsArray.unshift('Prannay','Vijay');

studentsArray.pop ();

console.log(studentsArray);

studentsArray.shift();

console.log(studentsArray);

console.log(studentsArray.includes('Vova'));

const studentsArrayNew = studentsArray.slice(4,8);

console.log(studentsArrayNew);

const studentsArrayUnique = ['Carry', 'Viktoria', 'Cleyton', 'Bridget', 'Connie'];

const studentsArrayAll = studentsArrayNew.concat(studentsArrayUnique); 

console.log(studentsArrayAll);

studentsArrayAll.splice(3,1);

console.log(studentsArrayAll);

studentsArrayAll.splice(5,1,'Ivan');

console.log(studentsArrayAll);

console.log(studentsArrayAll.join(' - '));


