
let mainDisplay = document.querySelector('.mainDisplay'); 
let serviseField = document.querySelector('.servise');
let numberField = document.querySelector('.number');
let operatorField = document.querySelector('.operator');
let state = { value: 0, };
let mainBox = {}; 


const styles = (elem, style={}) => {
    let res = "";
    for (let key in style) {
        //console.log(key, style[key]);
        res += `${key}: ${style[key]};`
    }
    elem.style.cssText = res;
}
styles(mainDisplay, {       //
    color: "green"
});
/*      // why can't apply more than one style?!
styles(mainDisplay, {
    fontSize: "20 px"  // not allows !!!
});

styles(mainDisplay, {
    background: "#004"
});*/

const renderDisplay = () => mainDisplay.innerHTML = state.value;
renderDisplay();


//--------------------------------------------------------------------------

const createButton = (item, index) => {
  let button = document.createElement('button');
  keyName = item;
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
        };
        console.log(state.value);
        renderDisplay();
    }
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


operatorField.addEventListener( 'click', function(event) {
    if (event.target.matches('.btn') ) {
        const id = event.target.dataset.id;
        const elem = event.target;
        const value = event.target.dataset.value;
        console.log({id, elem, value});
        console.log(state.value);
    }
});


/********/

///// code from Foma
/*
const parent = document.querySelector('div');
const arr = [
    {
        id:1,
        name:'vasya'
    },
    {
        id:2,
        name:'petya'
    },
] 
const createUser = name => ({name, id:arr.length});
const findUser = id => arr.find(user => user.id === +id);
const delUser = id => arr = [...arr].filter(user => user.id !== +id);
const updateUser = user => arr = [...arr].map( u => u.id === + user.id ? user : u);
const userCard = ({id, name}) => (`
    <div>
        <h2>${name}</h2>
        <button data-id='${id}' class='btn-del'>del</button>
        <button data-id='${id}' class='btn-upt'>update</button>
    </div>
`)
const render = () => parent.innerHtml = arr.map(userCard).join('')
render();
parent.addEventListener('click', e => {
    if(e.target.matches('.btn-del')){
        const id = e.target.dataset.id
        delUser(id);
        render();
    }
    if(e.target.matches('.btn-upt')){
        const id = e.target.dataset.id
        const user = findUser(id);
        updateUser({...user, name: 'update name'});
        render();
    }
})
*/


