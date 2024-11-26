// script.js

// Function to load saved data from localStorage
function loadSavedData() {
    const savedGameNights = JSON.parse(localStorage.getItem("gameNights")) || [];
    
    const savedGameNightsDiv = document.getElementById("saved-game-nights");
    if (savedGameNights.length > 0) {
        const ul = document.createElement("ul");
        
        savedGameNights.forEach((gameNight, index) => {
            const li = document.createElement("li");
            li.textContent = `Game Night ${index + 1} - Name: ${gameNight.name}, Date: ${gameNight.date}, Time: ${gameNight.time}`;
            ul.appendChild(li);
        });
        
        savedGameNightsDiv.appendChild(ul);
    } else {
        savedGameNightsDiv.innerHTML = "No saved game nights yet.";
    }
}

// Function to save the form data to localStorage
function saveFormData(event) {
    event.preventDefault(); // Prevent the form from submitting

    const nameValue = document.getElementById("name").value;
    const dateValue = document.getElementById("date").value;
    const timeValue = document.getElementById("time").value;

    // If all fields are filled out, proceed with saving the data
    if (nameValue && dateValue && timeValue) {
        const savedGameNights = JSON.parse(localStorage.getItem("gameNights")) || [];
        
        // Push the new game night details to the array
        savedGameNights.push({
            name: nameValue,
            date: dateValue,
            time: timeValue
        });
        
        // Save the updated array back to localStorage
        localStorage.setItem("gameNights", JSON.stringify(savedGameNights));
        
        alert("Your game night details have been saved!");
        
        // Clear the form after submission
        document.getElementById("game-night-form").reset();
        
        // Reload the saved data to update the list of game nights
        loadSavedData();
    } else {
        alert("Please fill out all fields (name, date, and time).");
    }
}

// Load saved data when the page loads
window.onload = function() {
    loadSavedData();

    // Add event listener to the form
    document.getElementById("game-night-form").addEventListener("submit", saveFormData);
};
