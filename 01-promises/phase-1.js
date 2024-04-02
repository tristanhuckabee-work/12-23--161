function stretch() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('done stretching');
      res();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('done running on the treadmill');
      res();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('done lifting weights');
      res();
    }, 2000);
  });
}

function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log('done working out'))
    .catch(err => console.log(err));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out