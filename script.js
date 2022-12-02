/*console.log("Hello  Emily");
document.getElementById("text").innerHTML = "Emily.B"; 
document.write ("Hello Document who=ite");
window.alert("Hello Alert Box"); 
// 
var x= 5;
var y= 5;
var z= x+y;
console.log(z);

/*--------------------------------------------------------- */
var FirstName= "Emily";
var LastName = "B.";
var FullName = FirstName + " " + LastName;
console.log(FullName);
  
function myFunction(value1, value2){
    return value1*value2;
}
console.log(myFunction(5,5));
 
function changBg(){
    document.body.style.backgroundColor = "pink";
}
//celsios --> farenheit
function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32 ;
    var message = cTemp + " \xB0C is " + cToFahr + "\xB0F";
    console.log(message);
}

cToF(30);

//farenheit --> celsios
function fToC(farenheit){
    var ftemp = farenheit;
    var fToCel = (ftemp - 32) * 5 / 9;
    var message = ftemp + "\xB0F is " + fToCel + "\xB0C";
    console.log(message);
}

fToC(86);
//object
var person = {
    firstName : "Ford",
    lastName: "BB",
    eyeColor: "black",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
    
};
console.log(person.fullName());
/*----------------------------------------------------------*/ 
//New function 1
fullname2=(fname,lanme)=>{
    return fname+lanme
}

//console.log(fullname2("Emily.B","Anqi"));
//New function 2 if the line not too much Code {} not inportant
//arrow function
fullname3=(fname,lanme)=> fname+lanme
setAge=(age)=>"อายุ ="+age
console.log(setAge(20));

const username="Emily"
const age = 21
const address = "Chonburi"


const customer = {
    cName : username,
    age,
    address,
    showData(){
        console.log("Customer data = "+username)
    }
}
console.log(customer);

//Speard Operator
let cusName = "Emily"
let tel = "0898922892"
const add ="NameCustomer : ${cusName}" 

const newArr = [100,200,300]
const data = [10,20,...newArr] 

console.log(data.length);

const colors = ["Green","White","Blue"]
const allColor = ["Red","Pink",...colors]
const newColor = ["Black","Gray"]


allColor.push(...newColor)
console.log(allColor);
//Rest Parametor

summation =(...numberArr)=>{
    let total = 0 
    for(let number of numberArr) total+=number 
    return total

}
console.log(summation(500,1000));
console.log(summation(500,1000,800));
//pamametor array -> loop -> output

//Array
const colorsNew  = ["Green","Pink","Yellow"]
const [green,pink,yellow] = colorsNew
//ต้องการเฉพาะบางตัวเท่านั้น
//const [,,yellow] = colorsNew
console.log(green)

//object Destructroling
const productType = {
productName : "Laptop",
price : 8000,
stock : 10

}
const {productName:productName,price:price,stock:stock} = productType
console.log(productName)
console.log(price)
console.log(stock)


//`Use Defult Parametor variable="Data"
getDataCustomer=(customerName,customerAddress="China")=>{
    
    const address = `customer name : ${customerName}
                    Address : ${customerAddress}`
    return address
}
console.log(getDataCustomer("Emily","Chonburi"));
console.log(getDataCustomer("JOjo","Chaimiang"));
console.log(getDataCustomer("Shenanqi"));

//join ,concat data=>string
const dta = [100,200,300] 
const dta2 = [400,500]


console.log(dta)
const allData = dta.concat(dta2)//bring tatal of dta2 concat with dta together
const result = dta.join("*") //if don't have(,) it's default ,
console.log(allData)
//push pop shift unshift

const data3 =[10,20,30]
console.log(data)

data3.push(...[500,1000,2000])
console.log(data3)

data3.pop()//delete the last one of array
console.log(data3)

data3.shift()//delete the first one of array
console.log(data3)

data3.unshift(999)//delete the first one of array
console.log(data3)
//splice & slice
//splice => position to delete (index,amount for delete)
//slice => (start point , the last point-1)

const data4 = [10,20,30,40,50]
data4.splice(1,1,999) //delete start index 1 amount 3 ,(increase function use the new data for instead )
console.log(data4)

const lastdata4 =data4.slice(1,2) //output 999
console.log(lastdata4)
// Loop Array
// For loop ,Foreach, Forof

const testData = [10,20,30,40,50]
for(let i = 0; i<data.length; i++){
    if(testData[i] > 30) break
    console.log(`ลำดับที่ ${i} =${testData[i]}`);
}

testData.forEach(e => {
    console.log(`สมาชิกใน Array Data4 =${e}`)

});
let sum = 0 
data4.forEach(e=> {
    sum+=e
    console.log(`ผลรวม = ${sum}`);

});
for (const element of data){
    if(element>=30) break
    console.log(`สมาชิก Array Data = ${element}`)
}
// find out the data in Array
//indexOf(data) => find index for data string findIndex for number of data if could'not found show -1
//find (data) =>
const fruit =["Mango","Banana","Apple"]
const index = fruit .indexOf("Banana") // position of index (-1 can't find out)
console.log(index);
//find index for data string findIndex for number of data
const search = fruit.findIndex(element=>element == "Apple");
console.log(search);

// Array Map
const numbers2 = [10,20,30,40,50]
console.log(`number = ${numbers2}`)
numbers2.map(e =>{ 
    const a = e*2 
    return a
})
console.log(numbers2)
// Array Map2
const number1 =[10,20,30,40]
const result1 = number1.map(e=>e*e)
console.log(`Array Map = ${result1}`);

const weatherDay = ["Raining","cloudy","Ternado","Stuning","Strom","Blue Sky"]
const TodayWhatwheather = weatherDay.map((e,i)=>{
    return `Today is ${i+1}, Weather = ${e}`
})
console.log(TodayWhatwheather);

const dateData = [
    {day:"29/11/2565",weather1:"Sunny",temp:30},
    {day:"30/11/2565",weather1:"Cloudy",temp:25},
    {day:"01/12/2565",weather1:"Strom",temp:26}
]
const todayW = dateData.map(e=>{
    return e.weather1
})
console.log(todayW);
//Array Filter
const glass = [10,20,30]
const jieshu = glass.filter(e=>{
    return e>20
})
console.log(`The Glass :${jieshu}`);

const Employee = [
    {name:"Fern",salary:60000, department:"Programmer"},
    {name:"Emily",salary:55000, department:"Tainner"},
    {name:"Patcharin",salary:55000, department:"Beauty"},
    {name:"Shen Anqi",salary:60000, department:"Businiess Women"}
]
const totalSa = Employee.filter(e=>e.salary >= 50000).filter(e=>e.department =="Programmer")
console.log(totalSa);

//Array Reduce
const message = [10,20,30,40]
const mapMes = message.map(e=>100) //ได้ความยาวของArray เท่ากับความยาวของต้นแบบ
const filterMes = message.filter(e=>e>20) //ได้ความยาวของArray ไม่ท่ากับความยาวของต้นแบบ

console.log(mapMes);
const data5 = [10,20,30,40]

//array.reduce((ค่าที่ถูกประมวณผล ，e)=>{},ค่าเริ่มต้น) //value =0
const summation2 = data5.reduce((value3,e)=>{
    const total = e+value3
    return total

},0)
console.log(summation2);
//value = 0 เพิ่มขึ้นตามรอบเรื่อยๆ ที่รีเทรินตามลูป
/*const summation2 = data5.reduce((value3,e)=>e+value3,0)
console.log(summation2);   โค้ดสั้น*/ 
//total = 10+0 ,20+10, 30+30 , 40+60, 
const cart = [
            {name2: "Bag",price:500},
            {name2: "Assessociries",price:1000},
            {name2: "Clothes",price:2000},

]
const summation3 = cart.reduce((value3,e)=>{ //วนลูปเพื่อหาผลรวม
    const total = e.price+value3
    return total

},0)
console.log(`Total price is ${summation3}`)
