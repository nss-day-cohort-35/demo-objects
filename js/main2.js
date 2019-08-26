console.log("hamster stuff", hamster["name"]);

console.log(`The hamsters children are ${hamster.children[0]}, and ${hamster.children[2]}`);



for (let i = 0; i < hamster.children.length; i++){
    console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`);
}

hamster.children.forEach((item, index) => {
    console.log(`Hamster child ${index} ${item}`);

});