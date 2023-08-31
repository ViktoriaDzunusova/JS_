const foo1=(a,b)=>{
    return a+b
}
console.log(foo1(2,3));
const foo2=(r)=>{
    return 3.14*r*r;
}
console.log(foo2(13));
const foo3=(r,h)=>{
    return (2*Math.PI*r*r)+(2*Math.PI*r*h);
}
console.log(foo3(2,5));
const foo4 = (arr) => {
  for(const item of arr){
      console.log(`item:`,item)
  }
}
foo4([`dsd`,345, true ]);
const foo5 =(text)=>{
   document.write (`<p>${text}</p>`);
}
console.log(foo5 (`sdfs dfkj jj`));
function foo6 (text){
    document.write(`<ul>`);
    for ( let i= 0;  i < 3; i++) {
        document.write(`<li>$(text)</li>`);
    }

    document.write(`</ul>`);
}
foo6(`text1`);
foo6(`text пгп`);
const foo7 = (arr) => {
  document.write(`<ul>`);
  for (const item of arr){
      document.write(`<li>$(item)</li>`);
  }
  document.write(`<ul>`);

}
foo7([`jnj`, `joij`,878, `jnj`, true,89]);
const users = [
    { name:`Vika`, username:`Vikas`,password:123},
    { name:`Oleg`, username:`Oleg3`,password:333},
    { name:`Misha`, username:`Mishal`,password:443},
    { name:`Kira`, username:`KiraSD`,password:4444},
    { name:`Vita`, username:`VitalER`,password:5555},
    { name:`Valya`, username:`ValyaBG`,password:656},
    { name:`Mark`, username:`Mark45`,password:4545},
    { name:`Kolya`, username:`Kolya56`,password:5656},
    { name:`Nina`, username:`Nina23`,password:4309},
    { name:`Tom`, username:`Tomas19`,password:19191}
];
const foo8 = (arr) => {
    for(const user of arr){
        document.write(`
            <div>
             <p> id: $ (user.id)</p>
              <p> id: $ (user.name)</p>
              <p> id: $ (user.age)</p>
            </div>
        `);
    }

}
foo8(users);
function foo9(arrOFNums) {
    let min=arrOFNums[0];
    for (let i=1;i<arrOFNums.length;i++){
        if (arrOFNums[i]< min){
            min=arrOFNums[i];
        }
    }
    return min;

}
const result=foo9([7,4,99,678,3,13,33,-89])
console.log(`foo9:`,result);
const x1=(arrOFNumbers)=>{
    let result=1;
    result+=item;
    return result;
}
console.log(`sum:`, sum([1,-4,7]));
const x2=(arr,indrx1,index2)=>{
    const numIndex1=arr[index1];
    const numIndex2=arr[index2];
    arr[index1]=numIndex2;
    arr[indrx2]=numIndex1;
    return arr;


}
console.log(x2([11,22,33,44],1));
const exchange=(sum,currenxies,resultCurrency)=>{
    for(let cur of currencies){
        if (cur.currency ===resultCurrency){
            return `${sum/cur.value} ${resultCurrency}`
        }
    }
    return `Wrong currency!!!`
}
const currencies=[
    {currency:`USD`, value:40},
    {currency:`EUR`, value:42},
    {currency:`W`, value:2},
    {currency:`DE`, value:6},
    {currency:`SS`, value:25},
    {currency:`RE`, value:13},
    {currency:`PL`, value:8},
]
const result2=exchange(10000,currencies,`PL`)
console.log(`result:`,result2)