/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formattd Text" when underline button is clicked
 * TODO: Toggle the align syle for "Formatted Text" when when the appropriate button is clicked
 */


 /**
  * Update the output text as a user types in the textarea
  * HINT: Use the onclick function inside HTML
  */
updateText = () => {
     //CODE GOES HERE
     let text = document.getElementById('text-input').value;
     document.getElementById('text-output').innerText = text;
 }

 /**
  * Toggle the bold class for the output text
  * HINT: Use the onclick function inside HTML
  * HINT: Look into using this keyword
  * HINT: Use the classList property
  * HINT: Toggle .active class for the button
  */
makeBold = (elem) => {
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold')
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
    //CODE GOES HERE
    elem.classList.toggle('active');
    let formattedText = document.getElementById('text-output');
    if (formattedText.classList.contains('underline')){
        formattedText.classList.remove('underline');
    } else{
        formattedText.classList.add('underline');
    }
}

/**
 * Toggle the style textAlign attribut
 * Toggle the active state for the align buttons
 * HINT: Use the style property of the element to the 
 * HINT: Make sure to untoggle the active state for all
 */
alignText = (elem, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType;
    let alignButtons = document.getElementsByClassName('align');
    console.log(alignButtons);
    for(let button of alignButtons){
        button.classList.remove('active');
        console.log(button)
    }
    elem.classList.toggle('active');
}