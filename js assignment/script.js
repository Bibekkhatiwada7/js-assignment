// Define options for each button
const options = {
    options1: ["A curious child discovers", "once upon a time", "In a magical garden"],
    options2: ["a hidden key", "A young explorer ventures into the dense forest", "a lonely flower blooms"],
    options3: ["that unlocks a door to a magical realm", "revealing a secret that brings joy"],
    options4: ["filled with wonders and dangers.", "creatures along the way", "and wonder to all who discover it."],
    options5: ["The end.", "The end.", "The end."]
  };
  
// Function to randomly select an index from an array
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to display the final story
function viewStory() {
    let story = '';
    const optionIds = ['options1', 'options2', 'options3', 'options4', 'options5'];
    optionIds.forEach(optionId => {
      const btnText = document.getElementById(optionId).textContent;
      story += btnText + ' ';
    });
    document.getElementById('story-output').textContent = story;
  }
  
// Function to cycle through options 
  function cycleoptions(btnId) {
  const btn = document.getElementById(btnId);
  const optionsArr = options[btnId];
  let currentIndex = 1; // Start from the second option
  btn.addEventListener('click', function() {
    btn.textContent = optionsArr[currentIndex];
    currentIndex = (currentIndex + 1) % optionsArr.length;
  });
}

// Function to generate a random story
function generateRandomStory() {
  let randomStory = ''; 
  for (let i = 1; i <= 5; i++) {
    const randomOption = options[`options${i}`][Math.floor(Math.random() * 3)];
    randomStory += randomOption + ' '; 
  }
  document.getElementById('story-output').textContent = randomStory;
}


// Add event listeners to cycle through each option from the story
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= 5; i++) {
    cycleoptions(`options${i}`);
  }
  // Add event listener for the "Generate Random Story" button
  const randomStoryButton = document.getElementById('generate-random-story');
  randomStoryButton.addEventListener('click', generateRandomStory);
});
