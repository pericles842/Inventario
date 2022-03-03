
let input_four = document.getElementById('input_four').value
let result = document.getElementById('result')

button_add.addEventListener('click',add)
button_search.addEventListener('click',search)    //eventosDeFuncioes  
button_delete.addEventListener('click',eliminate)

function add(){
    let input_two = document.getElementById('input_two').value
    let input_one = document.getElementById('input_one').value
    name_key[input_two] = input_one
    console.log(name_key);  
}

function search(){  
    let input_three = document.getElementById('input_three').value

    if (name_key.hasOwnProperty(input_three)) {

        console.log(name_key.hasOwnProperty(input_three))
    } else {
        for (const property in name_key) {
            console.log(`${property}: ${name_key[property]}`);
        }
        console.log('¡Alerta No precionar mas de una vez!')
    }
}

function eliminate() {
    
}