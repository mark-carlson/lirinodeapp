require("dotenv").config();

var inquire = require("inquirer")
// const spotify = new Spotify(keys.spotify);
// const twitter = new Twitter(keys.twitter);


inquire
    .prompt([{
        type: "list",
        message: "This is Liri! What do you want to do?",
        choices: ["Check my twitter", "Spotify this song", "Movie this", "Do what it says"],
        name: "command"
    }]).then((userInput) => {
        // console.log(userInput.command) 
        if (userInput.command === "Check my twitter") { // how do i translate the options in the first prompt into a command for userInput?
            console.log("yeah");
        } else if (userInput.command === "Spotify this song"){
            inquire.prompt ([{
                    type: "input",
                    message: "What song do you want to spotify?",
                    name: "song"
                }]).then((userInput) => {
                    if (userInput.song === "") {
                        console.log("the sign by ace of base");
                    } 
                })
        } else if (userInput.command){
            console.log("yeah");
        }
    })


     

