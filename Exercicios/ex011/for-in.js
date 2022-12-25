let person = {
    name: "Gui",
    age: 16,
    weight: 80
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}