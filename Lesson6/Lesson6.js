const x='hello world';
console.log(x.slice());
const x1='lorem ipsum';
console.log(x1.slice());
const x2='javascript is cool';
console.log(x2.slice());
let pass1='hello world';
let pass2='lorem ipsum';
let pass3='javascript is cool';
let case1=pass1.toUpperCase();
console.log(case1);
let case2=pass2.toUpperCase();
console.log(case2);
let case3=pass3.toUpperCase();
console.log(case3);

let pass4='HELLO WORLD';
let pass5='LOREM IPSUM';
let pass6='JAVASCRIPT IS COOL';
let case4=pass4.toLowerCase();
console.log(case4);
let case5=pass5.toLowerCase();
console.log(case5);
let case6=pass6.toLowerCase();
console.log(case6);

let str = 'dirty string';
let replace=str.replaceAll(` `,``);
console.log(replace);

let str1 = 'Ревуть воли як ясла повні';
let split=str1.split(` `);
console.log(split);

let sortNum1=[21,11,3];
sortNum1.sort((a,b)=>a-b);
console.log(sortNum1);
let sortNum=[3,11,21];
sortNum.sort((a,b)=>b-a);
console.log(sortNum);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort=coursesAndDurationArray.sort((u1,u2)=>
{
    return u2.monthDuration-u1.monthDuration
});
console.log(sort);
