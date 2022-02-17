// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

/*
Afficher dans la console la touche cliquee
Afficher dans l'ecran
Concatener dans l'ecran
Trainter les cas du zero
Faire l'addition
Faire les autres operations

*/


function printTargetText(event){
    let screen = document.getElementsByClassName("calculator__display")[0];
    screen.textContent = screen.textContent + event.target.textContent;
    a = event.target.textContent;
    console.log(event.target.textContent);
}

function Addition(x, L){
    y = L.pop();
    return x + y;
}


window.addEventListener("load", () =>{
    let buttons = document.getElementsByTagName("button");
    L = [];
    number = 0;
    res = 0
    for (let button of buttons){
        button.addEventListener("click",(event) =>
            {printTargetText(event);
            a = event.target.textContent;
            let screen = document.getElementsByClassName("calculator__display")[0];
            switch(a){
                case '=':
                    console.log('+++++++++++=====')
                    res = 0;
                    while(L.length != 0){
                        x = L.pop(0);
                        if (x == "+"){
                            y = L.pop(0);
                            L[0] = res + y;
                        }
                        else{res = x;}
                    }
                    number = res;
                    screen.textContent = res;
                    break;
                case 'AC':
                    console.log('+++++++++++ccc')
                    screen.textContent = 0;
                    L = [];
                    res = 0;
                    number = 0;
                    break;
                case "+":
                    number = 0;
                    console.log(a)
                    L.push(a);
                    L.push(number)
                    break;
                default:
                    number = number*10 + parseInt(a);
                    L.pop();
                    L.push(number);
                    break;
            }
            
            console.log(L)
            }
        );
        
        //也可以用button.onclick = () => ...
    }
    // 我们实现了点一个按钮，在console显示点的多少:
    //for (let button of buttons){
    // button.addEventListener("click", (event) =>
    //    {console.log(event.target.textContent);}
    //是指我们创建了一个function来实现打出这个event，可以替换成：
    // 先定义function printTargetText(event){
    //          console.log(event.target.textContent}
    //然后  button.addEventListener("click", printTargetText;

    
}
)