
let input_four = document.getElementById('input_four').value

button_add.addEventListener('click',add)
button_search.addEventListener('click',search)

function add(){
    let input_two = document.getElementById('input_two').value
    let input_one = document.getElementById('input_one').value
    name_key[input_two] = input_one
    console.log(name_key);  
} 
function search(){ 
    let result = document.getElementById('result') 
    let input_three = document.getElementById('input_three').value
  for (const property in name_key) {
      console.log(`${property}: ${name_key[property]}`);
    }

    
    
}