//Data of programingQuotes
const programingQuotes = ['\“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\“ – Martin Fowler',
'\“Knowledge is power.”\ – Francis Bacon', '\“Fix the cause, not the symptom.\” – Steve Maguire'];

//Data of jokes
const jokes = ['Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.\”— Jack Handey',
'\“Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.\”—Will Ferrell',
'\“Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.\”—Ellen DeGeneres'];

//Data of "Math"
const numbers = ['π = 3,1415926535', '(+) x (+) = (+) : (+) x (-) = (-) : (-) x (+) = (-) : (-) x (-) = (+)'];

//Adding all the data to one variable
const arr = [programingQuotes, jokes, numbers];

//Array function that randomly selects one of the data "types" and then randomly selects a index in that one.  
const generator = arr => {
    const randomForm = Math.floor(Math.random() * arr.length);
    let randomNeestedIndex = Math.floor(Math.random() * randomForm);
    return arr[randomForm][randomNeestedIndex];
}

console.log(generator(arr));