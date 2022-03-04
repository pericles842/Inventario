
let input_four = document.getElementById('input_four').value
let result = document.getElementById('result')

button_add.addEventListener('click',add)
button_search.addEventListener('click',search)    //eventosDeFuncioes  
button_delete.addEventListener('click',eliminate)
console.log('¡Repetir el serial remplazara el valor anterior!');

function add(){
    
    let input_two = document.getElementById('input_two').value
    let input_one = document.getElementById('input_one').value
    
    if (input_two.length == 3 ) {
        name_key[input_two] = input_one
        name_one.push(input_one);
       /*  console.log(name_key); 
        console.log(name_one); */
        alert('Elemento Añadido')

    }else if(input_two.length > 3  ){
        alert('Solo tres digitos')
    }else{
        alert('Faltan digitos ')
    }
}

function search(){  

    let input_three = document.getElementById('input_three').value

    if (name_key.hasOwnProperty(input_three)) {
        for(i in name_key){
            if (i == input_three) {
            console.log(`${i}: ${name_key[i]}`);
            } 
        }
    }else {
        for (const property in name_key) {
            console.log(`${property}: ${name_key[property]}`);
        }
            console.log('¡Alerta No presionar mas de una vez!')
    }
   
}

function eliminate() {
    

}