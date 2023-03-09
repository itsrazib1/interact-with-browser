// alert('How are you')
const showAlert = () =>{
    alert('Dosto, taka ase dhar dite parbi, just 500?')
}

const lendMoney = () => {
    const result = confirm('Will you send me 500 Taka?')
    console.log(result);
    if (result === true){
        alert('Tui amar jan er dosto!!!')
    }
    else{
        alert('DGM..... toke ajke e block maira dimu.')
    }
}

const getInfo = () => {
    // alert
    // confirm
    const name = prompt('Tell me your name')
    console.log(name);
    if(name === null){
        alert('Naam na dile kaam nai!! Ja foooooot')
    }
    else{
        alert(name+" "+'welcome to this world!!!')
    }
}