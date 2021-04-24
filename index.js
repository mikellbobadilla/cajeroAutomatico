class Wallet {
    constructor(v, c){
        this.image = new Image();
        this.value = v;
        this.amount = c;
        this.image.src = wallt[this.value];
    }
}

let box = [];
let delivered = [];
let money = 0;
let wallt = [];  // source of money
let paper;

// Dictionary's
wallt[5] = 'billete_de_5.jpg';
wallt[10] = 'billete_de_10.jpg';
wallt[20] = 'billete_de_20.jpg';
wallt[50] = 'billete_de_50.jpg';
wallt[100] = 'billete_de_100.jpg';

// adding wallets
box.push(new Wallet(100,10));
box.push(new Wallet(50,10));
box.push(new Wallet(20,10));
box.push(new Wallet(10,10));
box.push(new Wallet(5,10));

// show you how many are there in the ATM
const shw = document.getElementById('show');
shw.addEventListener('click', ()=>{
    for (let c of box){
        let v = c.value * c.amount;
        let l = document.getElementById('look');
        l.innerHTML += `<br> hay $${v} dolares en Billetes de $${c.value}`;
    }
})

