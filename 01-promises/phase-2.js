function stretch(timeLeft) {
  return new Promise((res, rej) => {
    if (timeLeft < 1000) {
      rej('you dont have enough time to stretch');
    } else {
      setTimeout(() => {
        console.log('done stretching');
        res(timeLeft - 1000);
      }, 1000);
    }
  });
}
function runOnTreadmill(timeLeft) {
  return new Promise((res, rej) => {
    if (timeLeft < 500) {
      rej('you dont have enough time to run on treadmill');
    } else {
      setTimeout(() => {
        console.log('done running on treadmill');
        res(timeLeft - 500);
      }, 500);
    }
  });
}
function liftWeights(timeLeft) {
  return new Promise((res, rej) => {
    if (timeLeft < 2000) {
      rej('you dont have enough time to lift weights');
    } else {
      setTimeout(() => {
        console.log('done lifting weights');
        res(timeLeft - 2000);
      }, 2000);
    }
  });
}
function workout(totalTime) {
  stretch(totalTime)
  .then(time => runOnTreadmill(time))
  .then(time => liftWeights(time))
  .then(time => console.log(`done working out with ${time/1000}s left!`))
  .catch(err => console.log('Error: ', err));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
