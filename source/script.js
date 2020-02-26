// References to the elements in the field
var choicesEl = document.getElementsByClassName("choice-container");
var buttons = document.querySelectorAll('input[name="opt"]');

// Define what happens when the user attempts to clear the response

function clearAnswer() {
  // go through each choice
  for (var i = 0; i < choicesEl.length; i++) {
    choicesEl[i].querySelector('input').checked = false; // uncheck the checkbox input element
    fieldProperties.CHOICES[i].CHOICE_SELECTED = false; // update the current answer 
  }
}

// Save the user's response (update the current answer)

function change() {
  var selected = [];
  // go through each choice
  for (var i = 0; i < fieldProperties.CHOICES.length; i++) {
    var choice = fieldProperties.CHOICES[i];
    if (choice.CHOICE_VALUE === this.value) { // check/uncheck based on the value of the choice
      choice.CHOICE_SELECTED = !choice.CHOICE_SELECTED;
    }
    if (choice.CHOICE_SELECTED) { // include only selected options in the final answer
      selected.push(choice.CHOICE_VALUE);
    }
  }

  setAnswer(selected.join(" "));
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onchange = change;
}
