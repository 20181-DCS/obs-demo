// app.js
import { Dog, Wolf } from './zoo/zoo';
import { Cat } from './zoo/cat';


var myDog = new Dog('Sherlock', 'beagle');
document.getElementById('content').innerHTML += myDog.bark();

var myWolf = new Wolf('Direwolf');
document.getElementById('content').innerHTML += `<br/>${myWolf.bark()}`;

document.getElementById('loadCat').addEventListener('click', e => {
    require.ensure([], () => {
        //var Cat = require('./cat');
        var myCat = new Cat('Bugsy');
        document.getElementById('content').innerHTML += `<br/>${myCat.meow()}`;
    });
});

//https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/



/////////////////////////////////////////////

function sendNotify(id) {
    console.log(`Usuario ${id} notificado`);
}

function loadUser() {
    console.log('Leyendo nuevo usuario');
    let min = 12345;
    let max = 23456;
    return Math.floor(Math.random() * (max - min)) + min;
}

let usuario_list = [];

setInterval(() => {
  usuario_list.push(loadUser());
  for (var i=usuario_list.length-1; i<usuario_list.length; i++) {    
    sendNotify(usuario_list[i]);
  }
}, 2000);


/*
var usuarios = Rx.Observable.create( (nuevoUser) => {
  setInterval(() => {
    nuevoUser.next(loadUser());
  }, 2000);
});

usuarios.subscribe((id) => {
  sendNotify(id);
});
*/