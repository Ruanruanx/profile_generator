const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)",(answer)=>{
  let name = answer;
  rl.question("What's an activity you like doing?",(answer)=>{
  let hobby = answer;
    rl.question("What do you listen to while doing that?",(answer)=>{
      let music = answer;
      console.log(name+hobby+music);
      rl.close();
    })
 
  })

})