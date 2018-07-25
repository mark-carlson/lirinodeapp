require("dotenv").config();

const keys = require("./keys")
// remember to link the keys for your APIs and define the const "keys" for the api consts below!

var Twitter = require("twitter")
var inquire = require("inquirer")

// const spotify = new Spotify(keys.spotify);
const twitterClient = new Twitter(keys.twitter);
// remember to define "keys" with the require() property above!


inquire
    .prompt([{
        type: "list",
        message: "This is Liri! What do you want to do?",
        choices: ["Check my twitter", "Spotify this song", "Movie this", "Do what it says"],
        name: "command"
    }]).then((userInput) => {
        // console.log(userInput.command) 
        if (userInput.command === "Check my twitter") { 
            // console.log("yeah");
            const params = {screen_name: "PatrickFinnig10"}
            twitterClient.get('statuses/user_timeline', params, function(error, tweets) {
                if (!error) {
                    for (let i = 0; i < tweets.length; i++) {
                        console.log(tweets[i].text);
                        
                    }
                }
            })
        } else if (userInput.command === "Spotify this song"){
            inquire
                .prompt ([{
                        type: "input",
                        message: "What song do you want to spotify?",
                        name: "song"
                    }]).then((userInput) => {
                        if (userInput.song === "") {
                            console.log("the sign by ace of base");
                        } 
                    })
        } else if (userInput.command === "Movie this") {
            console.log("movies");
        } else if (userInput.command === "Do what it says") {
            console.log("YOURE HUGE!! THAT MEANS YOU HAVE HUGE GUTS!!")
        }
    })


     

