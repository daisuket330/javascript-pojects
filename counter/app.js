// set initial count
let count = 0;

// select value and buttns
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease1")){
        count--;
    }
    else if(styles.contains("decrease5")){
        count-=5;
    }
    else if(styles.contains("decrease10")){
        count-=10;
    }
    else if(styles.contains("decrease100")){
        count-=100;
    }
    else if(styles.contains("decrease1000")){
        count-=1000;
    }
    else if(styles.contains("increase1")){
        count ++;
    }
    
    else if(styles.contains("increase5")){
        count +=5;
    }
    
    else if(styles.contains("increase10")){
        count +=10;
    }
    
    else if(styles.contains("increase100")){
        count +=100;
    }
    else if(styles.contains("increase1000")){
        count +=1000;
    }
    else if(styles.contains("increase100")){
        count +=100;
    }
    else{
        count= 0
    }
    value.textContent = count
    })
});
