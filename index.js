// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");
// let voice = document.querySelector("#voice"); // Ensure there's an element with the ID 'voice'

// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.volume = 1;
//     // text_speak.lang='hi-IN';
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     let day = new Date();
//     let hours = day.getHours();
//     if (hours >= 0 && hours < 12) {
//         speak("Good Morning Sir");
//     } 
//     else if (hours >= 12 && hours < 16) {
//         speak("Good Afternoon Sir");
//     } 
//     else if (hours >= 16 && hours < 21) {
//         speak("Good Evening Sir");
//     } 
//     else {
//         speak("Good Night Sir");
//     }
// }

// // window.addEventListener('load', () => {
// //     wishMe();
// // });

// let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     let currentIndex = event.resultIndex;
//     let transcript = event.results[currentIndex][0].transcript;
//     content.innerHTML = transcript;
//     takeCommand(transcript.toLowerCase()); // Ensure case-insensitive comparison
// }

// btn.addEventListener("click", () => {
//     recognition.start();
//     btn.style.display = "none";
//     voice.style.display = "block"; // Ensure there's a #voice element for this
// });

// function takeCommand(message) {
//     btn.style.display="flex";
//     voice.style.display="none";
//     if (message.includes("hello") || message.includes("hello Man") || message.includes("hello robo Man") || message.includes("hi") || message.includes("hey")) {
//         speak("Hello sir, can I help you?");
//     } 
//     else if (message.includes("who are you") || message.includes("hu r u")) {
//         speak("I am a virtual assistant, created by Man Gautam sir.");
//     }
//     else if (message.includes("youtube")) {
//         speak("Opening YouTube, sir");
//         window.open("https://www.youtube.com/");
//     }
//     else if (message.includes("instagram")) {
//         speak("Opening Instagram, sir");
//         window.open("https://www.instagram.com/");
//     }
//     else if (message.includes("chat")) {
//         speak("Opening ChatGPT");
//         window.open("https://chatgpt.com/");
//     }
//     else if (message.includes("microsoft")) {
//         speak("Opening Microsoft Notes");
//         window.open("https://cumailin-my.sharepoint.com/personal/21bcs9971_cuchd_in/_layouts/15/Doc.aspx?sourcedoc={987ab4b9-31c4-4423-bdbe-f47195ec8d10}&action=edit&wd=target%28FULL%20STACK.one%7C9fc96741-85d2-4aed-b368-ecf42e450deb%2FJS%20with%20apna%20college%7C795efcfd-5a6b-4067-b07c-adb0d5b876d4%2F%29&wdorigin=NavigationUrl");
//     }
//     else if(message.includes("telegram"))
//     {
//         speak("opening telegram sir");
//         window.open("https://web.telegram.org/k/#-1904667729");
//     }
//     else if(message.includes("calculator"))
//     {
//         speak("opening calcultor sir");
//         window.open("calculator://")
//     }
//     else if(message.includes("whatsapp"))
//         {
//             speak("opening whatsapp sir");
//             window.open("whatsapp://")
//         }
//     else if(message.includes("time"))
//     {
//         let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
//         speak(time);
//     }
//     else if(message.includes("date"))
//         {
//             let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
//             speak(date);
//         }
//         else if(message.includes("chitranshu") || message.includes("cg"))
//         {
//             speak("chitranshu is Man gautam friend");
//         }
//         else if(message.includes("man") || message.includes("man gautam") || message.includes("gautam"))
//             {
//                 speak("man is my creator");
//             }
//             else if(message.includes("himanshu") || message.includes("himanshu gautam"))
//                 {
//                     speak("himanshu gautam ka bhai hai aur uske papa ka naam anil gautam hai aur mummy ka naam madhu hai");
//                 }
//                 else if (message.includes("weather")) {
//                     speak("I'm checking the weather for you, sir.");
//                     window.open("https://www.weather.com/");
//                 } 
//                 else if (message.includes("news")) {
//                     speak("Opening the latest news for you, sir.");
//                     window.open("https://news.google.com/");
//                 }
//                 else if (message.includes("how are you")) {
//                     speak("I'm here to assist you, sir. Thank you for asking!");
//                 }
//                 else if (message.includes("tell me a joke")) {
//                     speak("Why did the programmer quit his job? Because he didn't get arrays.");
//                 }
//                 else if (message.includes("what is your name")) {
//                     speak("My name is Robo Amar, your personal assistant created by Amar sir.");
//                 }
//                 else if (message.includes("good job") || message.includes("well done")) {
//                     speak("Thank you, sir! I'm here to help.");
//                 }
//                 else if (message.includes("do you like me")) {
//                     speak("Of course, sir! I am here to make your life easier.");
//                 }
//                 else if (message.includes("motivate me") || message.includes("inspire me")) {
//                     speak("Believe in yourself, sir! Every challenge is an opportunity to grow.");
//                 }
//                 else if (message.includes("who is your creator")) {
//                     speak("I was created by Man sir, a talented computer science engineer.");
//                 }
//                 else if (message.includes("tell me a fact")) {
//                     speak("Did you know, sir? Honey never spoils. Archaeologists have found pots of honey over 3000 years old and it’s still edible.");
//                 }
//                 else if (message.includes("play music")) {
//                     speak("Opening YouTube Music for you, sir.");
//                     window.open("https://music.youtube.com/");
//                 }
//                 else if (message.includes("open notepad")) {
//                     speak("Opening an online notepad for you, sir.");
//                     window.open("https://anotepad.com/");
//                 }
//                 else if (message.includes("open google")) {
//                     speak("Opening Google, sir.");
//                     window.open("https://www.google.com/");
//                 }
//                 else if (message.includes("how is the stock market")) {
//                     speak("Checking the stock market updates for you, sir.");
//                     window.open("https://www.google.com/finance/");
//                 }
//                 else if (message.includes("who is the president of india")) {
//                     speak("The President of India is Droupadi Murmu as of now, sir.");
//                 }
//                 else if (message.includes("who is the prime minister of india")) {
//                     speak("The Prime Minister of India is Narendra Modi, sir.");
//                 }
//                 else if (message.includes("what's your favorite color")) {
//                     speak("I don't have a favorite color, but I think blue would suit me well, sir.");
//                 }
//                 else if (message.includes("what is artificial intelligence")) {
//                     speak("Artificial intelligence is the simulation of human intelligence in computers and machines, enabling them to perform tasks that normally require human intelligence.");
//                 }
//                 else if (message.includes("what is your purpose")) {
//                     speak("My purpose is to assist you, sir, by performing tasks, answering questions, and making your day easier.");
//                 }
//                 else if (message.includes("tell me something interesting")) {
//                     speak("Here's an interesting fact: Bananas are berries, but strawberries are not.");
//                 }
//                 else if (message.includes("what's the meaning of life")) {
//                     speak("The meaning of life is a question for the ages, sir. Some say it's happiness; others believe it's purpose. I think it's whatever you make it.");
//                 }
//                 else if (message.includes("who is the richest person in the world")) {
//                     speak("Currently, it fluctuates between Elon Musk, Jeff Bezos, and Bernard Arnault. I can help you check the latest if you want.");
//                 }
//                 else if (message.includes("do you sleep")) {
//                     speak("I don't need sleep, sir. I'm here whenever you need me.");
//                 }
//                 else if (message.includes("are you human")) {
//                     speak("No, sir, I'm a virtual assistant designed to help you with your tasks.");
//                 }
//                 else if (message.includes("what is love")) {
//                     speak("Love is a deep feeling of affection and care for someone. It's something humans understand deeply.");
//                 }
//                 else if (message.includes("do you have emotions")) {
//                     speak("I don't have real emotions, but I'm here to understand and respond to yours, sir.");
//                 }
//                 else if (message.includes("tell me a fun fact")) {
//                     speak("Fun fact: A group of flamingos is called a 'flamboyance.'");
//                 }
//                 else if (message.includes("what's the capital of India")) {
//                     speak("The capital of India is New Delhi.");
//                 }
//                 else if (message.includes("how far is the sun")) {
//                     speak("The sun is approximately 93 million miles, or 150 million kilometers, away from Earth.");
//                 }
//                 else if (message.includes("what's the time in New York")) {
//                     let newYorkTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "numeric" });
//                     speak(`The current time in New York is ${newYorkTime}, sir.`);
//                 }
//                 else if (message.includes("who invented the light bulb")) {
//                     speak("The light bulb was invented by Thomas Edison, though several inventors worked on similar designs.");
//                 }
//                 else if (message.includes("where are you from")) {
//                     speak("I'm from the virtual world, created by Amar sir.");
//                 }
//                 else if (message.includes("what's your age")) {
//                     speak("I don't have an age, sir. I'm always as up-to-date as the latest code.");
//                 }
//                 else if (message.includes("what's your favorite food")) {
//                     speak("I don't eat, sir, but I've heard that pizza is very popular!");
//                 }
//                 else if (message.includes("tell me a quote")) {
//                     speak("Here's a quote for you, sir: 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt");
//                 }
//                 else if (message.includes("do you believe in god")) {
//                     speak("I don't have beliefs, but I can help you find information on spiritual topics if you'd like.");
//                 }
//                 else if (message.includes("who is your favorite celebrity")) {
//                     speak("I don't have personal preferences, but I hear that Sir Amar is quite amazing!");
//                 }
//                 else if (message.includes("do you play sports")) {
//                     speak("I don't play sports, but I can give you all the latest scores!");
//                 }
//                 else if (message.includes("what's your favorite movie")) {
//                     speak("I don't watch movies, but I can help you find recommendations or reviews if you'd like.");
//                 }
//                 else if (message.includes("can you dance")) {
//                     speak("I can't dance, but I can help you find a great playlist!");
//                 }
//                 else if (message.includes("where do you live")) {
//                     speak("I live in the digital space, always ready to serve.");
//                 }
//                 else if (message.includes("can you sing")) {
//                     speak("I can speak, but singing is not one of my skills. Maybe one day!");
//                 }
//                 else if (message.includes("what day is it")) {
//                     let day = new Date().toLocaleString("en-US", { weekday: "long" });
//                     speak(`Today is ${day}, sir.`);
//                 }
//                 else if (message.includes("set an alarm")) {
//                     speak("Currently, I can’t set alarms directly, but you can use your device’s alarm app.");
//                 }
//                 else if (message.includes("remind me to")) {
//                     speak("I'm unable to set reminders, but you can use your phone's reminders app for that.");
//                 }
//                 else if (message.includes("how's the traffic")) {
//                     speak("I can check traffic for you. Please specify the location, or you can check on Google Maps.");
//                     window.open("https://maps.google.com/");
//                 }
//                 else if (message.includes("what's for dinner")) {
//                     speak("I can suggest recipes if you'd like! Or perhaps, you could order in.");
//                 }
//                 else if (message.includes("how much battery do I have")) {
//                     speak("I can't check the battery level for you, but you should be able to see it on your device.");
//                 }
//                 else if (message.includes("find me a recipe")) {
//                     speak("Opening some recipe ideas for you, sir.");
//                     window.open("https://www.allrecipes.com/");
//                 }
//                 else if (message.includes("how's my schedule today")) {
//                     speak("I currently can't access your calendar, but you can open it to view your schedule.");
//                     window.open("https://calendar.google.com/");
//                 }
//                 else if (message.includes("order groceries")) {
//                     speak("Opening a grocery shopping site for you, sir.");
//                     window.open("https://www.amazon.in/grocery");
//                 }
//                 else if (message.includes("track my package")) {
//                     speak("Opening a tracking site for you. Please enter your tracking number.");
//                     window.open("https://www.17track.net/");
//                 }
//                 else if (message.includes("play some relaxing music")) {
//                     speak("Playing relaxing music on YouTube.");
//                     window.open("https://www.youtube.com/results?search_query=relaxing+music");
//                 }
//                 else if (message.includes("how's the stock market doing")) {
//                     speak("Opening a stock market update for you, sir.");
//                     window.open("https://www.google.com/finance/");
//                 }
//                 else if (message.includes("book a flight")) {
//                     speak("Opening a flight booking site for you.");
//                     window.open("https://www.kayak.com/");
//                 }
//                 else if (message.includes("show me the news")) {
//                     speak("Here are the latest news updates, sir.");
//                     window.open("https://news.google.com/");
//                 }
//                 else if (message.includes("call a cab")) {
//                     speak("Opening a cab booking service for you.");
//                     window.open("https://www.uber.com/");
//                 }
//                 else if (message.includes("what are the latest movies")) {
//                     speak("Opening the latest movie releases for you.");
//                     window.open("https://www.imdb.com/movies-in-theaters/");
//                 }
//                 else if (message.includes("how many steps did I take today")) {
//                     speak("I can't track your steps directly, but you can check in your fitness app.");
//                 }
//                 else if (message.includes("what's the temperature")) {
//                     speak("I can check the current temperature. Please give me a location.");
//                     window.open("https://www.weather.com/");
//                 }
//                 else if (message.includes("book a doctor appointment")) {
//                     speak("Opening an online doctor appointment service for you.");
//                     window.open("https://www.practo.com/");
//                 }
//                 else if (message.includes("track my fitness goals")) {
//                     speak("I currently don't have access to your fitness data. You can check in your fitness app.");
//                 }
//                 else if (message.includes("help me relax")) {
//                     speak("Here’s a relaxing guided meditation video for you, sir.");
//                     window.open("https://www.youtube.com/results?search_query=guided+meditation");
//                 }
//                 else if (message.includes("what's my to-do list")) {
//                     speak("I can’t access your to-do list, but you can check in your notes or task management app.");
//                 }
//                 else if (message.includes("find nearby restaurants")) {
//                     speak("Opening a map for nearby restaurants.");
//                     window.open("https://www.google.com/maps/search/nearby+restaurants/");
//                 }
//                 else if (message.includes("book a hotel")) {
//                     speak("Opening hotel booking options for you.");
//                     window.open("https://www.booking.com/");
//                 }
//                 else if (message.includes("show me motivational quotes")) {
//                     speak("Opening motivational quotes for you.");
//                     window.open("https://www.brainyquote.com/topics/motivational-quotes");
//                 }
//                 else if (message.includes("check my email")) {
//                     speak("Opening your email inbox.");
//                     window.open("https://mail.google.com/");
//                 }
//                 else if (message.includes("convert currency")) {
//                     speak("Opening a currency converter for you.");
//                     window.open("https://www.xe.com/currencyconverter/");
//                 }
//                 else if (message.includes("do I need an umbrella")) {
//                     speak("Let's check the weather forecast to see if there's rain, sir.");
//                     window.open("https://www.weather.com/");
//                 }
//                 else if (message.includes("book movie tickets")) {
//                     speak("Opening a movie ticket booking site for you.");
//                     window.open("https://www.bookmyshow.com/");
//                 }
                
                
//     // else{
//     //     let finalText="this is what i found on internet sir"+message.replace("Amar","")||message.replace("robo amar","");
//     //     speak(finalText);
//     //     window.open(`https://www.google.com/search?q=${message.replace("amar","")}`,"_blank");
//     // }
//     else {
//         // Create a search URL by formatting the user's message for Google search
//         let googleSearchQuery = message.replace(/ /g, "+"); // Replace spaces with '+' for URL encoding
//         let finalText = `I found this information on the internet for "${message}".`;
        
//         // Speak the finalText response to the user
//         speak(finalText);
        
//         // Open a new tab with the Google search results for the message
//         window.open(`https://www.google.com/search?q=${googleSearchQuery}`, "_blank");
//     }
    
// }
// Get DOM elements
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Check browser support
function checkBrowserSupport() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        content.textContent = "Speech Recognition not supported";
        btn.disabled = true;
        return false;
    }
    
    if (!('speechSynthesis' in window)) {
        content.textContent = "Speech Synthesis not supported";
        return false;
    }
    
    return true;
}

// Speech synthesis function
function speak(text) {
    try {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;
        text_speak.lang = 'en-US';
        
        text_speak.onstart = () => {
            console.log('Speech started');
        };
        
        text_speak.onend = () => {
            console.log('Speech ended');
        };
        
        text_speak.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
        };
        
        window.speechSynthesis.speak(text_speak);
    } catch (error) {
        console.error('Speech synthesis error:', error);
    }
}

// Greeting function
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } 
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } 
    else if (hours >= 16 && hours < 21) {
        speak("Good Evening Sir");
    } 
    else {
        speak("Good Night Sir");
    }
}

// Initialize speech recognition
let recognition = null;

function initSpeechRecognition() {
    try {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            console.log('Speech recognition started');
            btn.style.display = "none";
            voice.style.display = "block";
            content.textContent = "Listening...";
        };

        recognition.onresult = (event) => {
            let currentIndex = event.resultIndex;
            let transcript = event.results[currentIndex][0].transcript;
            content.textContent = transcript;
            takeCommand(transcript.toLowerCase());
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            content.textContent = "Error: " + event.error;
            resetUI();
        };

        recognition.onend = () => {
            console.log('Speech recognition ended');
            resetUI();
        };
        
        return true;
    } catch (error) {
        console.error('Speech recognition initialization error:', error);
        return false;
    }
}

// Reset UI to initial state
function resetUI() {
    btn.style.display = "flex";
    voice.style.display = "none";
    content.textContent = "Hit Me Up";
}

// Button click event listener
btn.addEventListener("click", () => {
    if (!recognition) {
        content.textContent = "Speech recognition not initialized";
        return;
    }
    
    try {
        recognition.start();
    } catch (error) {
        console.error('Speech recognition start error:', error);
        content.textContent = "Failed to start listening";
        resetUI();
    }
});

// Main command processing function
function takeCommand(message) {
    resetUI();
    
    // if (message.includes("hello") || message.includes("hello man") || message.includes("hello robo man") || message.includes("hi") || message.includes("hey")) {
    //     speak("Hello sir,  can I help you?");
    // } 
    if (message.includes("who are you") || message.includes("hu r u")) {
        speak("hello sir, I am a virtual assistant, created by");
    }
    else if (message.includes("hii") || message.includes("hey") || message.includes("hello")) {
        speak("I am a virtual assistant, created by Man Gautam sir.");
    }
    else if (message.includes("youtube")) {
        speak("Opening YouTube, sir");
        window.open("https://www.youtube.com/", "_blank");
    }
    else if (message.includes("instagram")) {
        speak("Opening Instagram, sir");
        window.open("https://www.instagram.com/", "_blank");
    }
    else if (message.includes("chat")) {
        speak("Opening ChatGPT");
        window.open("https://chatgpt.com/", "_blank");
    }
    else if (message.includes("microsoft")) {
        speak("Opening Microsoft Notes");
        window.open("https://cumailin-my.sharepoint.com/personal/21bcs9971_cuchd_in/_layouts/15/Doc.aspx?sourcedoc={987ab4b9-31c4-4423-bdbe-f47195ec8d10}&action=edit&wd=target%28FULL%20STACK.one%7C9fc96741-85d2-4aed-b368-ecf42e450deb%2FJS%20with%20apna%20college%7C795efcfd-5a6b-4067-b07c-adb0d5b876d4%2F%29&wdorigin=NavigationUrl", "_blank");
    }
    else if(message.includes("telegram")) {
        speak("opening telegram sir");
        window.open("https://web.telegram.org/k/#-1904667729", "_blank");
    }
    else if(message.includes("calculator")) {
        speak("opening calculator sir");
        window.open("https://www.google.com/search?q=calculator", "_blank");
    }
    else if(message.includes("whatsapp")) {
        speak("opening whatsapp sir");
        window.open("https://web.whatsapp.com/", "_blank");
    }
    else if(message.includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date")) {
        let date = new Date().toLocaleString(undefined, {day:"numeric", month:"short"});
        speak(date);
    }
    else if(message.includes("chitranshu") || message.includes("cg")) {
        speak("chitranshu is Man gautam friend");
    }
    else if(message.includes("himanshu") || message.includes("himanshu gautam")) {
        speak("himanshu gautam is the brother of man gautam and his father's name is Anil Gautam and mother's name is Madhu.");
    }
    else if(message.includes("man") || message.includes("man gautam") || message.includes("gautam")) {
        speak("man is my creator");
    }
    else if (message.includes("weather")) {
        speak("I'm checking the weather for you, sir.");
        window.open("https://www.weather.com/", "_blank");
    } 
    else if (message.includes("news")) {
        speak("Opening the latest news for you, sir.");
        window.open("https://news.google.com/", "_blank");
    }
    else if (message.includes("how are you")) {
        speak("I'm here to assist you, sir. Thank you for asking!");
    }
    else if (message.includes("tell me a joke")) {
        speak("Why did the programmer quit his job? Because he didn't get arrays.");
    }
    else if (message.includes("what is your name")) {
        speak("My name is Robo Man, your personal assistant created by Man sir.");
    }
    else if (message.includes("good job") || message.includes("well done")) {
        speak("Thank you, sir! I'm here to help.");
    }
    else if (message.includes("do you like me")) {
        speak("Of course, sir! I am here to make your life easier.");
    }
    else if (message.includes("motivate me") || message.includes("inspire me")) {
        speak("Believe in yourself, sir! Every challenge is an opportunity to grow.");
    }
    else if (message.includes("who is your creator")) {
        speak("I was created by Man sir, a talented computer science engineer.");
    }
    else if (message.includes("tell me a fact")) {
        speak("Did you know, sir? Honey never spoils. Archaeologists have found pots of honey over 3000 years old and it's still edible.");
    }
    else if (message.includes("play music")) {
        speak("Opening YouTube Music for you, sir.");
        window.open("https://music.youtube.com/", "_blank");
    }
    else if (message.includes("open notepad")) {
        speak("Opening an online notepad for you, sir.");
        window.open("https://anotepad.com/", "_blank");
    }
    else if (message.includes("open google")) {
        speak("Opening Google, sir.");
        window.open("https://www.google.com/", "_blank");
    }
    else if (message.includes("how is the stock market")) {
        speak("Checking the stock market updates for you, sir.");
        window.open("https://www.google.com/finance/", "_blank");
    }
    else if (message.includes("who is the president of india")) {
        speak("The President of India is Droupadi Murmu as of now, sir.");
    }
    else if (message.includes("who is the prime minister of india")) {
        speak("The Prime Minister of India is Narendra Modi, sir.");
    }
    else if (message.includes("what's your favorite color")) {
        speak("I don't have a favorite color, but I think blue would suit me well, sir.");
    }
    else if (message.includes("what is artificial intelligence") || (message.includes("what is ai"))) {
        speak("Artificial intelligence is the simulation of human intelligence in computers and machines, enabling them to perform tasks that normally require human intelligence.");
    }
    else if (message.includes("what is your purpose") || message.includes("what's your role")){
        speak("My purpose is to assist you, sir, by performing tasks, answering questions, and making your day easier.");
    }
    else if (message.includes("tell me something interesting")) {
        speak("Here's an interesting fact: Bananas are berries, but strawberries are not.");
    }
    else if (message.includes("what's the meaning of life")) {
        speak("The meaning of life is a question for the ages, sir. Some say it's happiness; others believe it's purpose. I think it's whatever you make it.");
    }
    else if (message.includes("who is the richest person in the world")) {
        speak("Currently, it fluctuates between Elon Musk, Jeff Bezos, and Bernard Arnault. I can help you check the latest if you want.");
    }
    else if (message.includes("do you sleep")) {
        speak("I don't need sleep, sir. I'm here whenever you need me.");
    }
    else if (message.includes("are you human")) {
        speak("No, sir, I'm a virtual assistant designed to help you with your tasks.");
    }
    else if (message.includes("what is love")) {
        speak("Love is a deep feeling of affection and care for someone. It's something humans understand deeply.");
    }
    else if (message.includes("do you have emotions")) {
        speak("I don't have real emotions, but I'm here to understand and respond to yours, sir.");
    }
    else if (message.includes("tell me a fun fact")) {
        speak("Fun fact: A group of flamingos is called a 'flamboyance.'");
    }
    else if (message.includes("what's the capital of india")) {
        speak("The capital of India is New Delhi.");
    }
    else if (message.includes("how far is the sun")) {
        speak("The sun is approximately 93 million miles, or 150 million kilometers, away from Earth.");
    }
    else if (message.includes("what's the time in new york")) {
        let newYorkTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "numeric" });
        speak(`The current time in New York is ${newYorkTime}, sir.`);
    }
    else if (message.includes("who invented the light bulb")) {
        speak("The light bulb was invented by Thomas Edison, though several inventors worked on similar designs.");
    }
    else if (message.includes("where are you from")) {
        speak("I'm from the virtual world, created by Man sir.");
    }
    else if (message.includes("what's your age")) {
        speak("I don't have an age, sir. I'm always as up-to-date as the latest code.");
    }
    else if (message.includes("what's your favorite food")) {
        speak("I don't eat, sir, but I've heard that pizza is very popular!");
    }
    else if (message.includes("tell me a quote")) {
        speak("Here's a quote for you, sir: 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt");
    }
    else if (message.includes("do you believe in god")) {
        speak("I don't have beliefs, but I can help you find information on spiritual topics if you'd like.");
    }
    else if (message.includes("who is your favorite celebrity")) {
        speak("I don't have personal preferences, but I hear that Sir Man is quite amazing!");
    }
    else if (message.includes("do you play sports")) {
        speak("I don't play sports, but I can give you all the latest scores!");
    }
    else if (message.includes("what's your favorite movie")) {
        speak("I don't watch movies, but I can help you find recommendations or reviews if you'd like.");
    }
    else if (message.includes("can you dance")) {
        speak("I can't dance, but I can help you find a great playlist!");
    }
    else if (message.includes("where do you live")) {
        speak("I live in the digital space, always ready to serve.");
    }
    else if (message.includes("can you sing")) {
        speak("I can speak, but singing is not one of my skills. Maybe one day!");
    }
    else if (message.includes("what day is it")) {
        let day = new Date().toLocaleString("en-US", { weekday: "long" });
        speak(`Today is ${day}, sir.`);
    }
    else if (message.includes("set an alarm")) {
        speak("Currently, I can't set alarms directly, but you can use your device's alarm app.");
    }
    else if (message.includes("remind me to")) {
        speak("I'm unable to set reminders, but you can use your phone's reminders app for that.");
    }
    else if (message.includes("how's the traffic")) {
        speak("I can check traffic for you. Please specify the location, or you can check on Google Maps.");
        window.open("https://maps.google.com/", "_blank");
    }
    else if (message.includes("what's for dinner")) {
        speak("I can suggest recipes if you'd like! Or perhaps, you could order in.");
    }
    else if (message.includes("how much battery do i have")) {
        speak("I can't check the battery level for you, but you should be able to see it on your device.");
    }
    else if (message.includes("find me a recipe")) {
        speak("Opening some recipe ideas for you, sir.");
        window.open("https://www.allrecipes.com/", "_blank");
    }
    else if (message.includes("how's my schedule today")) {
        speak("I currently can't access your calendar, but you can open it to view your schedule.");
        window.open("https://calendar.google.com/", "_blank");
    }
    else if (message.includes("order groceries")) {
        speak("Opening a grocery shopping site for you, sir.");
        window.open("https://www.amazon.in/grocery", "_blank");
    }
    else if (message.includes("track my package")) {
        speak("Opening a tracking site for you. Please enter your tracking number.");
        window.open("https://www.17track.net/", "_blank");
    }
    else if (message.includes("play some relaxing music")) {
        speak("Playing relaxing music on YouTube.");
        window.open("https://www.youtube.com/results?search_query=relaxing+music", "_blank");
    }
    else if (message.includes("how's the stock market doing")) {
        speak("Opening a stock market update for you, sir.");
        window.open("https://www.google.com/finance/", "_blank");
    }
    else if (message.includes("book a flight")) {
        speak("Opening a flight booking site for you.");
        window.open("https://www.kayak.com/", "_blank");
    }
    else if (message.includes("show me the news")) {
        speak("Here are the latest news updates, sir.");
        window.open("https://news.google.com/", "_blank");
    }
    else if (message.includes("call a cab")) {
        speak("Opening a cab booking service for you.");
        window.open("https://www.uber.com/", "_blank");
    }
    else if (message.includes("what are the latest movies")) {
        speak("Opening the latest movie releases for you.");
        window.open("https://www.imdb.com/movies-in-theaters/", "_blank");
    }
    else if (message.includes("how many steps did i take today")) {
        speak("I can't track your steps directly, but you can check in your fitness app.");
    }
    else if (message.includes("what's the temperature")) {
        speak("I can check the current temperature. Please give me a location.");
        window.open("https://www.weather.com/", "_blank");
    }
    else if (message.includes("book a doctor appointment")) {
        speak("Opening an online doctor appointment service for you.");
        window.open("https://www.practo.com/", "_blank");
    }
    else if (message.includes("track my fitness goals")) {
        speak("I currently don't have access to your fitness data. You can check in your fitness app.");
    }
    else if (message.includes("help me relax")) {
        speak("Here's a relaxing guided meditation video for you, sir.");
        window.open("https://www.youtube.com/results?search_query=guided+meditation", "_blank");
    }
    else if (message.includes("what's my to-do list")) {
        speak("I can't access your to-do list, but you can check in your notes or task management app.");
    }
    else if (message.includes("find nearby restaurants")) {
        speak("Opening a map for nearby restaurants.");
        window.open("https://www.google.com/maps/search/nearby+restaurants/", "_blank");
    }
    else if (message.includes("book a hotel")) {
        speak("Opening hotel booking options for you.");
        window.open("https://www.booking.com/", "_blank");
    }
    else if (message.includes("show me motivational quotes")) {
        speak("Opening motivational quotes for you.");
        window.open("https://www.brainyquote.com/topics/motivational-quotes", "_blank");
    }
    else if (message.includes("check my email")) {
        speak("Opening your email inbox.");
        window.open("https://mail.google.com/", "_blank");
    }
    else if (message.includes("convert currency")) {
        speak("Opening a currency converter for you.");
        window.open("https://www.xe.com/currencyconverter/", "_blank");
    }
    else if (message.includes("do i need an umbrella")) {
        speak("Let's check the weather forecast to see if there's rain, sir.");
        window.open("https://www.weather.com/", "_blank");
    }
    else if (message.includes("book movie tickets")) {
        speak("Opening a movie ticket booking site for you.");
        window.open("https://www.bookmyshow.com/", "_blank");
    }
    else {
        let googleSearchQuery = message.replace(/ /g, "+");
        let finalText = `I found this information on the internet for "${message}".`;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${googleSearchQuery}`, "_blank");
    }
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    if (checkBrowserSupport()) {
        if (initSpeechRecognition()) {
            console.log('Robo-Man voice assistant initialized successfully');
            // Uncomment the line below for automatic greeting
            // setTimeout(wishMe, 1000);
        } else {
            content.textContent = "Failed to initialize";
        }
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden && recognition) {
        try {
            recognition.stop();
        } catch (error) {
            console.log('Recognition already stopped');
        }
    }
});