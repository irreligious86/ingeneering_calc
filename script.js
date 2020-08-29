
let mainDisplay = document.querySelector('.mainDisplay'); 
let serviseField = document.querySelector('.servise');
let numberField = document.querySelector('.number');
let operatorField = document.querySelector('.operator');

let keyName;
const createButton = (item) => {
  let button = document.createElement('button');
  keyName = item;
  button.classList.add('btn');
  button.innerHTML = `<em>${item}</em>`;
  return button;
}

//  SERVISE Keys
['M1','RM1','M2','RM2','M3','RM3','#','#','#','#','#','#','#','#','#','#'].forEach(item => serviseField.append(createButton(item)));
//  NUMBER Keys
[1,2,3,4,5,6,7,8,9,0,'.','<='].forEach(item => numberField.append(createButton(item)));
// OPERATOR Keys
['+','-','*','/','(',')','%','sqrt','x^2','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@'].forEach(item => operatorField.append(createButton(item)));


numberField.addEventListener( 'click', function(event) {
    console.log('you ' + event.type + ' key ' + event.target );
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


