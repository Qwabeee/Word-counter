let inputTextArea = document.getElementById('input-textarea');
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener('input', () =>  {
    //counts number of characters 
    characCount.textContent = inputTextArea.value.length
    //removes all the whitespace from both sides of thestring
    let txt = inputTextArea.value.trim();
    //split text at whitespaces into array of substrings
    //filter empty string
    //count length of this array
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
})