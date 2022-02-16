// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
window.addEventListener("load", () =>{
    let buttons = document.getElementByTagName('button');
    for (let button of buttons){
        button.addEventListener("click", (event) =>
            {console.log(event.target.textContent);
        })
        //也可以用button.onclick = () => ...
    }
    // 到这一步我们实现了点一个按钮，在console显示点的多少
    // button.addEventListener("click", (event) =>
    //    {console.log(event.target.textContent);
    //是指我们创建了一个function来实现打出这个event，可以写成：
    // 先定义function printTargetText(event){
    //          console.log(event.target.textContent}
    //然后  button.addEventListener("click", printTargetText;
}

)