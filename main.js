let input_counter = document.querySelector('#input-counter');
let start_counter = document.querySelector('#start-counter');
let timerNum = document.querySelector('.c100 >span');
let start_box = document.querySelector('.start-box');
let timerCircle = document.querySelector('.c100');
let seconds , originalSecond , timerId;


// set action for start button
start_counter.addEventListener('click', function(e) {

    seconds=parseInt(input_counter.value);
    // put alert message for time when user give a wrong type of input
    if(isNaN(seconds)){alert('زمان را به درستی وارد کنید ');return;}
    
    // hide input field when user click the button and show the timer
    toggleTimerShow({show : true});
    toggleLoadingMessage({show : true});
    toggleTimer({show :true , seconds});
    
    // set the input number into the timer
    originalSecond = seconds;
    let lastPercent = "p100";
    // start the timer 
    timerId = setInterval(() => {
        // reset the timer bar
        if(lastPercent) timerCircle.classList.remove(lastPercent);
        if(seconds<=0){
            clearInterval(timerId);
            toggleLoadingMessage({show : false});
            toggleTimer({show:false});
            input_counter.value = "";
            return;
        }
        seconds -=1
        timerNum.textContent = seconds;
    
        let percent = lastPercent = `p${ Math.abs(Math.floor((((originalSecond - seconds)/originalSecond)*100)-100))}`;
        timerCircle.classList.add(percent);
    }, 1000);

});

let toggleLoadingMessage = ({show}) =>{
    let loadingMessage = document.querySelector('.message .loading');
    let successMessage = document.querySelector('.message .success');
    if(show){
        loadingMessage.style.display = "block";
        successMessage.style.display = "none";
    }else{
        loadingMessage.style.display = "none";
        successMessage.style.display = "block";
    }
};

let toggleTimerShow = ({show}) =>{
    if(show){
        start_box.style.display = "none";
        timerCircle.style.display = "block";
    }else{
        start_box.style.display = "block";
        timerCircle.style.display = "none";
    }

};
let toggleTimer = ({show , seconds}) => {
    if(show){
        start_box.style.display = "block";
        timerNum.textContent = seconds;
    }else{
        timerCircle.style.display = "none";
    }
};