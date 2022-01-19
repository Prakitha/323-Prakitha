const input=document.querySelector("input")
    const letterCount=document.querySelector(".letter")
    const wordCount=document.querySelector(".words")
    const button=document.querySelector("button")

    function texyFieldChangeEvent(){
        const textvalue=input.value;
        const letters=textvalue.length;

        letterCount.textContent=`${letters};`

        const words=textvalue.split(" ");
        const wordsCount=words[words.length-1]===""? words.length-1:words.length;
wordCount.textContent=`${wordsCount}`;
    }

    input.addEventListener("input", texyFieldChangeEvent);

    button.addEventListener("click",function(){
        input.value="";
        letterCount.textContent="0";
        wordCount.textContents="0";
    })