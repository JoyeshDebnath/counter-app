const count = document.querySelector('.count_num');
const increase=document.querySelector('.increament_btn');
const decrease=document.querySelector('.decreament_btn');

let counter = 0;

increase.addEventListener('click',increse_count);

function increse_count() {
    counter++;
    count.innerHTML=counter;
    // console.log(count.innerHTML);
    if(count.innerHTML < '0'){      
        count.style.color='#F08080';
    }else if(count.innerHTML > '0'){
        count.style.color='#DADD98';
    }
}




decrease.addEventListener('click',decrease_count);

function decrease_count() {
    counter--;
    count.innerHTML=counter;
    // console.log(count.innerHTML);
    if(count.innerHTML < '0'){      
        count.style.color='#F08080';
    }else if(count.innerHTML > '0'){
        count.style.color='#DADD98';
    }
}