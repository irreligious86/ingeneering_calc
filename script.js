
let mainDisplay = document.querySelector('.mainDisplay'); 
let serviseField = document.querySelector('.servise');
let numberKeys = document.querySelector('.number');
let deleteKey = document.createElement('button');
let equalKey = document.createElement('button');
let operatorField = document.querySelector('.operator');
let input = document.createElement('input');

let state = { value: '', 
            buffer: '',
            dataStorage: '',
            result: ''
};

//----------------------------------------------------------------------

const renderDisplay = () => input.setAttribute('value', state.buffer);

//--------------------------------------------------------------------

const styles = (elem, style={}) => {
    let res = "";
    for (let key in style) {
        //console.log(key, style[key]);
        res += `${key}: ${style[key]}; `
    }
    elem.style.cssText = res;
}

//-----------------------------------------------------------

function settingInput () {
mainDisplay.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('placeholder', '0'); 
styles(input, { color: "green"});
input.classList.add('input');
}
settingInput();


//--------------------------------------------------------------------------

const createButton = (item, index) => {
  let button = document.createElement('button');
  button.classList.add('btn');
  button.dataset.id = index;
  button.dataset.value = item;
  button.innerHTML = `<em>${item}</em>`;
  return button;
}

//-------------------------------------------------------------

//  SERVISE Keys
['M1','RM1','M2','RM2','M3','RM3','#','#'].forEach(item => serviseField.append(createButton(item)));
//  NUMBER Keys
[1,2,3,4,5,6,7,8,9,0,'.'].forEach((item, index) => numberKeys.append(createButton(item, index)));
//
numberKeys.appendChild(deleteKey);
deleteKey.innerHTML = 'DEL';
//deleteKey.classList.add('')

//---------------------------------------------------------------
/*
function settingEqual () {
    createButton('=');
    numberKeys.appendChild(equalKey);
    equalKey.innerHTML = '=' ;
    //equalKey.classList.add('equal');
    equalKey.classList.add('btn');
    //equalKey.setAttribute();
    //equalKey.classList.add('equal');
}
settingEqual();
*/
//------------------------------------------------




// OPERATOR Keys
['+','-','*','/','(',')','sqrt','x^2'].forEach(item => operatorField.append(createButton(item)));


//console.log(deleteKey);
//console.log(equalKey);

numberKeys.addEventListener( 'click', function(event) {
        const id = event.target.dataset.id;
        const elem = event.target;
        const value = event.target.dataset.value;

        //let qqq = eval(state.buffer);
        //console.log('результат: ' + qqq);
    if (event.target.matches('.btn') ) {
    if (!isNaN(value)) {
        state.value += value;
        state.buffer = state.dataStorage + state.value;
        console.log("state.value: " + state.value);
        console.log("state.buffer: " + state.buffer);
        };
        renderDisplay();
    }
});

operatorField.addEventListener( 'click', function(event) {
    if (event.target.matches('.btn') ) {
        const id = event.target.dataset.id;
        const elem = event.target;
        const value = event.target.dataset.value;
        state.value = value;
        state.buffer = state.buffer + " " + value + " ";
        state.value = "";  
        state.dataStorage = state.buffer;                  
        console.log("state.value: " + state.value);
        console.log("state.buffer: " + state.buffer);
        renderDisplay();
    }
});
