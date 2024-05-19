const topics = "HTML, CSS, Git, JavaScript";
console.log(`Bootcamp topics include, ${topics}.`);


// const topic = "HTML";

// if (topic === 'HTML') {
//   console.log(`A Bootcampe topic is, ${topic}.`);
// } else if (topic === 'CSS') {
//   console.log(`A Bootcampe topic is, ${topic}.`);
// } else if (topic === 'Git') {
//   console.log(`A Bootcampe topic is ${topic}.`);
// } else if (topic === 'JavaScript') {
//   console.log(`A Bootcampe topic is, ${topic}.`)
// } else {
//   console.log("Invalid topic selection.")
// }


const bootcampTopics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (topic in bootcampTopics) {
  console.log(`One topic included in the Bootcamp program is, ${bootcampTopics[topic]}.`)
}


const shapes = ["Triangle", "Square", "Pentagon", "Circle"];

console.log(`The selected Shape is, ${shapes[0]}.`);

for (const shape in shapes) {
  console.log(`A Shape included in the 'Shapes' array is, ${shapes[shape]}.`)
}

for (let i = 0; i < shapes.length; i++) {
  console.log(`The array 'Shapes' includes, ${shapes[i]}.`)
}

for (let i = shapes.length - 1; i >= 0; i--) {
  console.log(`A reverse inventory of the 'Shapes' array is, ${shapes[i]}.`)
}