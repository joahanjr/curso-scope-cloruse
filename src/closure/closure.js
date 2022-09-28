function greeting (){
    let userName = "joahan";

    function displayUsername() {
        return "hello " + userName;
    }
    return displayUsername; 
}

const g = greeting();

console.log(g);
console.log(g());