function openPopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.style.display = 'block'; // Show the popup
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.style.display = 'none'; // Hide the popup
}


function chooseCharacter(character) {
    console.log("You have choosed " + character + " as your player!");
    
    // You can highlight the selected image or show a confirmation message
    const allButtons = document.querySelectorAll('.character-btn');
    allButtons.forEach(button => {
        button.style.border = 'none'; // Remove any previous border
    });

    // Add a border or highlight the selected image
    const selectedButton = [...allButtons].find(button => button.querySelector('img').alt === character);
    selectedButton.style.border = '5px dotted navy'; // Highlight the selected character with a solid navy border

    const characters = ['Kitten', 'Doggy', 'Chicks'];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    // console.log("The randomly chosen character is: " + randomCharacter);

    const resultDisplay = document.getElementById('result-display');
    resultDisplay.innerHTML = character + " was chosen. ";

    setTimeout(function(){
        resultDisplay.innerHTML += "<br>" + "Alina picked " + randomCharacter + " randomly!";
    }, 1000)

    
    // Determine the winner based on the rules
    setTimeout(function() {

        let resultMessage;
        if (character === randomCharacter) {
            // in terms of a tie
            if (character === 'Chicks') {
                resultMessage  = "Its a tie! The two chicks started pecking each other and shared a sunflower seed nest <3"
            } else if (character === 'Kitten') {
                resultMessage  = "Its a tie! The two kitten curled together and created a cute knitted ball together and slept!"
            } else if (character === 'Doggy') {
                resultMessage = "Its a tie! The two doggy buffed around the lawn until one of them passed out!"
            }
        } else {
            // Determine winner and loser
            if (
                (character === 'Kitten' && randomCharacter === 'Chicks') ||
                (character === 'Doggy' && randomCharacter === 'Kitten') ||
                (character === 'Chicks' && randomCharacter === 'Doggy')
            ) {
                if (character === 'Kitten' && randomCharacter === 'Chicks') {
                    resultMessage = "The Kitten pounced on the Chicks and won! Meow, victory is mine!";
                } else if (character === 'Doggy' && randomCharacter === 'Kitten') {
                    resultMessage = "The Dog chased the Kitten away! Woof, I’m the winner!";
                } else if (character === 'Chicks' && randomCharacter === 'Doggy') {
                    resultMessage = "The Chicks scared the Dog away! Oh no, looks like the dog ran off in fear!";
                }
            } else {
                if (randomCharacter === 'Kitten' && character === 'Chicks') {
                    resultMessage = "The Kitten pounced on the Chicks! The poor Chicks didn’t stand a chance!";
                } else if (randomCharacter === 'Doggy' && character === 'Kitten') {
                    resultMessage = "The Dog chased the Kitten away! Better luck next time, Kitten!";
                } else if (randomCharacter === 'Chicks' && character === 'Doggy') {
                    resultMessage = "The Chicks scared the Dog away! Woof, you’ve been outsmarted!";
                }
            }
        }

        // Display the result on the screen instead of an alert
        // After the delay, update the result message
        resultDisplay.innerHTML += "<br>" + resultMessage;
    }, 2000); // 2000 ms = 2 seconds delay
}