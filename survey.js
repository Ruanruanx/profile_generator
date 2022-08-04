const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  let name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    let hobby = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      let music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        let meal = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          let mealActivity = answer;
          console.log(`My name is ${name}. I like ${hobby} and I always listen to ${music} when I ${hobby}. My favourite meal in a day is ${meal}, I enjoy doing ${mealActivity} while having ${meal}`);
          rl.close();
        })

      })

    })

  })

})