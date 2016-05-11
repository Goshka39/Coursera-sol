// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************

// Wrap the entire contents of script.js inside of an IIFE
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name in the loop.
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter == 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})(window);