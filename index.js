class Wallet {
    constructor(v, c){
        this.image = new Image();
        this.value = v;
        this.amount = c;
        this.image.src = wallt[this.value];
    }
}

let box = [];
let wallt = [];  // source of money

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
    shw.hidden = true;
    if (shw.hidden == true){
        for (let c of box){
            let v = c.value * c.amount;
            let l = document.getElementById('look');
            l.innerHTML += `<br> hay $${v} dolares en Billetes de $${c.value}`;
        }
    }
        
        console.log(shw);
});

const bt = document.getElementById('btn');
bt.addEventListener('click', ()=>{
    let number = document.getElementById('num');
    let money = parseInt(number.value);
    let paper = 0;
    let div = 0;
    let delivered = [];

    
    for(b of box){
        if (money > 0){
            div = Math.floor(money / b.value);
            if (div > b.amount){
                paper = b.amount;
            }
            else{
                paper = div;
            }
            delivered.push(new Wallet(b.value, paper));
            money = money - (b.value * paper);
    
        }

    }
    let res = document.getElementById('res');
    console.log(delivered);
    // show the money
    if (money > 0){
        res.innerHTML = `Los siento no tengo $${number.value}`;
    }
    else{
        for (e of delivered){
            if (e.amount > 0){  
                res.innerHTML +=`${e.amount}Billetes de ${e.value}<br/>`;
                res.appendChild(e.image);
                res.innerHTML += `<br/>`
            }
        }
    }
    console.log(delivered);
})

