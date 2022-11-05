let age = '4324';
age = +age
if (!isNaN(age)) {
    if (age>18) {
        console.log('вам больше 18');
    }else if(age < 18) {
        console.log('тебе меньше 18');
    }else if(age===18){
        console.log('18');
    }else if(age>150) {
        console.log('okay');
    }
}else {
    console.log('введите корректные данные');
};


const gender = 'muj'