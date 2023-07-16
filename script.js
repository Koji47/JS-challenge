function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge
    alert(yearsLeft + " Years left until retirement")

}

function getGreetingInFrench(event){
    const greeting = event.target.value;
    
    if(greeting == "Hello") {
        alert('Bonjour')
    } else if (greeting =="Goodbye") {
        alert('Au revior')
    } else {
        alert('not regognised')

    }
}