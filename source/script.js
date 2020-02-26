// References to the elements in the field
var choicesEl = document.getElementsByClassName("choice-container");
var buttons = document.querySelectorAll('input[name="opt"]');

// Define what happens when the user attempts to clear the response

function clearAnswer() {
  // go through each choice
  for (var i = 0; i < choicesEl.length; i++) {
    choicesEl[i].classList.remove("chceked"); // remove the 'checked' class from the parent element
    choicesEl[i].querySelectorAll('input').checked = false; // uncheck the checkbox input element
    fieldProperties.CHOICES[i].CHOICE_SELECTED = false; // update the current answer 
  }
}

// Save the user's response (update the current answer)

function change() {
  fieldProperties.CHOICES[this.value].CHOICE_SELECTED = !fieldProperties
    .CHOICES[this.value].CHOICE_SELECTED;
  var selected = [];
  for (var i = 0; i < fieldProperties.CHOICES.length; i++) {
    var choice = fieldProperties.CHOICES[i];
    if (choice.CHOICE_SELECTED) {
      selected.push(choice.CHOICE_INDEX);
    }
  }
  setAnswer(selected.join(" "));
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onchange = change;
}
