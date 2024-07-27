

// Initialize the SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Initialize the voices array
let voices = []; 

// Select the voice dropdown element
let voiceSelect = document.querySelector("select");

// Function to populate the voices array and the dropdown
window.speechSynthesis.onvoiceschanged = () => {
    // Get the available voices
    voices = window.speechSynthesis.getVoices();
    
    // Set the initial voice
    speech.voice = voices[0];

    // Populate the dropdown with voice options
    voices.forEach((voice, i) => {
        // Create a new option element
        let option = new Option(voice.name, i);
        // Add the option to the dropdown
        voiceSelect.options[i] = option;
    });
};

// Event listener for the voice selection change
voiceSelect.addEventListener('change', () => {
    // Update the speech voice based on the selected option's index
    speech.voice = voices[voiceSelect.value];
});

// Event listener for the button click to convert text to speech
document.querySelector("button").addEventListener("click", () => {
    // Get the text from the textarea
    speech.text = document.querySelector("textarea").value;
    // Speak the text
    window.speechSynthesis.speak(speech);
});
