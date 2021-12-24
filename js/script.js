"use strict"
/*
class dog {
    constructor(name, year, sex) {
        if (arguments.length == 3) {
            this.name = name;
            this.year = year;
            this.sex = sex;
        } else {
            this.name = this.generate_word();
            this.year = this.generate_year();
            this.sex = this.generate_sex();
        }
    }

    get year() {

        return String(this._year);
    }

    set year(old_year) {
        this._year = old_year;
    }

    generate_word() {
        let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let Length = Math.floor(Math.random() * 3 + 4);
        let str = '';
        for (let i = 0; i < Length; i++) {
            str += letter.charAt(Math.floor(Math.random() * letter.length));
        }
        console.log(str);
        return str;
    }

    generate_sex() {
        let male = ['male', 'female'];
        return male[Math.floor(Math.random() * 2)];
    }

    generate_year() {
        return Math.floor(Math.random() * 100);
    }
};

function SORT(array) {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10 - i; j++) {
            if (Number(array[j].year) > Number(array[j + 1].year)) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
};

let Dog = [];
for (let i = 1; i < 10; i++) {
    Dog[i] = new dog();
}

for (let i = 1; i < Dog.length; i++) {
    console.log(Dog[i]);
}

console.log('READY');
SORT(Dog);

for (let i = 1; i < 10; i++) {
    console.log(Dog[i]);
}*/
function cloock() {
    let MainElement = document.body;
    let clock = MainElement.querySelectorAll('.clock_number');

    let date = new Date();
    let hour_minute = String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
    //alert(date.getHours());
    let i = 0;
    for (let node of clock) {
        node.innerText = hour_minute[i];
        i++;
        if (hour_minute[i] == undefined) {
            hour_minute[i] == 0;
        }
        console.log(hour_minute);
    }
}
setInterval(cloock, 1000);
cloock();