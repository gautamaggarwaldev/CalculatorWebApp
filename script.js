let input = document.getElementById("inputDisplay");
let buttons = document.querySelectorAll("button");
let ans = "";
let arr = Array.from(buttons);

arr.forEach(btn => {
    btn.addEventListener("click", (e)=> {
        if (e.target.innerHTML == '=') {
            ans = ans.replace(/÷/g, '/').replace(/X/g, '*');  // Replace ÷ with / and X with *
            ans = eval(ans);  // Evaluate the mathematical expression
            input.value = ans;
        }
        else if(e.target.innerHTML == 'AC') {
            ans = "";
            input.value = ans; 
        }
        else if(e.target.innerHTML == 'DEL') {
            ans = ans.substring(0, ans.length-1);
            input.value = ans; 
        }
        else if(e.target.innerHTML == '()²') {
            ans = Math.pow(ans, 2);
            input.value = ans;
        }
        else {
            ans += e.target.innerHTML;
            input.value = ans;
        }
    });
});