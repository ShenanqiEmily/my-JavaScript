
//MOdel Data Base
const houses = [
{
    code:"SM",
    name: "Smith"
},
{
    code:"TM",
    name: "Tomash"
},
{
    code:"EE",
    name: "Baifern"
},
{
    code:"BF",
    name: "Baifern"
}
]
const getFamily = houseCode => {
    switch(houseCode){
        case "SM":
            return ["Mario","Karen","Taylor"];
        case "TM":
            return ["Deen","Jasmin","Atlemta"];
        case "EE":
            return ["Robbi","Lolo","Sia"];
        case "BF":
            return ["Baifern","Karen","Taylor"];
        default:
            return [];
        
    }
}
const creatOptionElement = (text,value) => {
    const element = document.createElement("option");
    element.textContent = text; 
    element.value = value;
    return element;
} 

const createLiElement = text =>{
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}
const houseElement = document.querySelector("select");
//fill the list
houses.forEach(house => {
    houseElement.appendChild(creatOptionElement(house.name, house.code));
})

//Controller -Brain
houseElement.addEventListener("change",e => {
    const fams = getFamily(e.target.value);
    const famsElement = document.getElementById("family");

    famsElement.innerHTML = "";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})