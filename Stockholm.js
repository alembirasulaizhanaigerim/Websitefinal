let userInput = document.getElementById('userInput');
let chatBody = document.getElementById('chatBody');
let userName = '';
let userDistrict = '';
let userPreferences = '';
let userHousePreference = '';

function openChat() {
  chatContainer.style.display = 'block';
  addMessage("Hi! I'm a bot. What's your name?", 'bot');
}

function closeChat() {
  chatContainer.style.display = 'none';
}

function toggleChat() {
  let chatContainer = document.getElementById('chatContainer');
  if (chatContainer.style.display === 'none') {
    openChat();
  } else {
    closeChat();
  }
}

function sendMessage() {
  let userMessage = userInput.value;
  addMessage(userMessage, 'user');
  handleUserResponse(userMessage);
  userInput.value = '';
}

function addMessage(message, sender) {
  let messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('chat-message');
  messageElement.classList.add(sender + '-message');
  chatBody.appendChild(messageElement);
}

function handleUserInput(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
}

function handleUserResponse(message) {
  if (!userName) {
    userName = message;
    addMessage('Nice to meet you, ' + userName + '! In which district would you like to live? Please choose one of the following options: A) Downtown, B) Suburbs, C) Coastal area.', 'bot');
  } else if (!userDistrict) {
    if (message.toLowerCase() === 'a' || message.toLowerCase() === 'b' || message.toLowerCase() === 'c') {
      userDistrict = message;
      addMessage('What are your preferences regarding the surrounding infrastructure, such as shops, restaurants, parks, and schools? Please choose one of the following options: A) Well-developed, B) Moderate, C) Minimal.', 'bot');
    } else {
      addMessage('Invalid option. Please choose one of the following options: A) Downtown, B) Suburbs, C) Coastal area.', 'bot');
    }
  } else if (!userPreferences) {
    if (message.toLowerCase() === 'a' || message.toLowerCase() === 'b' || message.toLowerCase() === 'c') {
      userPreferences = message;
      addMessage('Do you prefer low-rise houses with private yards or high-rise buildings with panoramic views? Please choose one of the following options: A) Low-rise houses, B) High-rise buildings.', 'bot');
    } else {
      addMessage('Invalid option. Please choose one of the following options: A) Well-developed, B) Moderate, C) Minimal.', 'bot');
    }
  } else if (!userHousePreference) {
    if (message.toLowerCase() === 'a' || message.toLowerCase() === 'b') {
      userHousePreference = message;
      let apartmentOptions = ['Madrid', 'Stockholm', 'Florence'];
      let randomOption = apartmentOptions[Math.floor(Math.random() * apartmentOptions.length)];
      addMessage('Thank you for providing your preferences, ' + userName + '! We have taken them into account and would like to recommend our apartment in ' + randomOption + ' residential complex. For more detailed information, please contact us.', 'bot');
      addMessage('Apartment Details:', 'bot');
      addMessage('- Location: ' + Astana, 'bot');
      addMessage('- Amenities: Gym, swimming pool, playground', 'bot');
      addMessage('- Price range: $1000 - $1500 per month', 'bot');
    } else {
      addMessage('Invalid option. Please choose one of the following options: A) Low-rise houses, B) High-rise buildings.', 'bot');
    }
  }
}  
$(document).ready(function() {
  // Animation for pagination links
  $(".page-link").on("click", function(e) {
    e.preventDefault();
    
    // Fade out the current page link
    $(this).fadeOut(400, function() {
      // Redirect to the target page
      window.location.href = $(this).attr("href");
    });
  });
});