
let mainDisplay = document.querySelector('.mainDisplay'); 
let serviseField = document.querySelector('.servise');
let numberField = document.querySelector('.number');
let operatorField = document.querySelector('.operator');


let state = { value: '', 
            buffer: '',
            result: '',
};


let input = document.createElement('input');
mainDisplay.appendChild(input);
input.classList.add('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', '0');
console.log(input);



const styles = (elem, style={}) => {
    let res = "";
    for (let key in style) {
        //console.log(key, style[key]);
        res += `${key}: ${style[key]}; `
    }
    elem.style.cssText = res;
}

styles(input, { color: "green"});

const renderDisplay = () => input.setAttribute('value', state.buffer);

//--------------------------------------------------------------------------

const createButton = (item, index) => {
  let button = document.createElement('button');
  button.classList.add('btn');
  button.dataset.id = index;
  button.dataset.value = item;
  button.innerHTML = `<em>${item}</em>`;
  return button;
}

//  SERVISE Keys
['M1','RM1','M2','RM2','M3','RM3','#','#','#','#','#','#','#','#','#','#'].forEach(item => serviseField.append(createButton(item)));
//  NUMBER Keys
[1,2,3,4,5,6,7,8,9,0,'.','<='].forEach((item, index) => numberField.append(createButton(item, index)));
// OPERATOR Keys
['+','-','*','/','(',')','%','sqrt','x^2','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@'].forEach(item => operatorField.append(createButton(item)));


numberField.addEventListener( 'click', function(event) {
    if (event.target.matches('.btn') ) {
        const id = event.target.dataset.id;
        const elem = event.target;
        const value = event.target.dataset.value;
        console.log({id, elem, value});
        if (!isNaN(state.value)) {
        state.value = state.value += value;
        state.buffer = state.value;
        };
        console.log("state.value: " + state.value);
        renderDisplay();
    }
});

operatorField.addEventListener( 'click', function(event) {
    if (event.target.matches('.btn') ) {
        const id = event.target.dataset.id;
        const elem = event.target;
        const value = event.target.dataset.value;
        console.log({id, elem, value});
        state.buffer += (" " + state.value + " ");
        state.value = value; //                              ???????
        console.log("state.value: " + state.value);
        console.log("state.buffer: " + state.buffer);
        
    }
    //return;
});




/*
если (поле === 0) {
  если (ввод === .) {
    ставим . после ноля
  }
  иначе {
    стираем 0 и ставим ввод в поле 
  }
}
*/

