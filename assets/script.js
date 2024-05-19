const bootcampTopicsString = "HTML, CSS, Git, JavaScript";
console.log(`Bootcamp topics include, ${bootcampTopicsString}.`);


const bootcampTopic = "HTML";

function selectTopic() {
  if (bootcampTopic === 'HTML') {
    console.log(`A Bootcamp topic, called by If-Function, is, ${bootcampTopic}.`);
  } else if (bootcampTopic === 'CSS') {
    console.log(`A Bootcampe topic, called by If-Function, is, ${bootcampTopic}.`);
  } else if (bootcampTopic === 'Git') {
    console.log(`A Bootcampe topic, called by If-Function, is ${bootcampTopic}.`);
  } else if (bootcampTopic === 'JavaScript') {
    console.log(`A Bootcampe topic, called by If-Function, is, ${bootcampTopic}.`)
  } else {
    console.log("Invalid Bootcamp topic selection.")
  }
};

selectTopic();


const bootcampTopicArray = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomBootcampTopic = bootcampTopicArray[Math.floor(Math.random() * bootcampTopicArray.length)];

// for (topic in bootcampTopics) {
//   console.log(`One topic included in the Bootcamp program is, ${bootcampTopics[topic]}.`);
// }

function listTopics() {
  for (topic in bootcampTopicArray) {
    console.log(`A Bootcamp topic, called by For-Function, is ${bootcampTopicArray[topic]}.`);
  }
};

listTopics();

function randomTopic() {
  console.log(`A randomly-selected Bootcamp topic, ${randomBootcampTopic}.`)
}

randomTopic();


// const shapes = ["Triangle", "Square", "Pentagon", "Circle"];

// console.log(`The selected Shape is, ${shapes[0]}.`);

// for (const shape in shapes) {
//   console.log(`A Shape included in the 'Shapes' array is, ${shapes[shape]}.`)
// }

// for (let i = 0; i < shapes.length; i++) {
//   console.log(`The array 'Shapes' includes, ${shapes[i]}.`)
// }

// for (let i = shapes.length - 1; i >= 0; i--) {
//   console.log(`A reverse inventory of the 'Shapes' array is, ${shapes[i]}.`)
// }
