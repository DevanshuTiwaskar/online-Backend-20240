//Q. jaake ek user looo and agar wo male ho to green button or agar female ho to red button

const parchi = new Promise(function(resolve, reject) {
    fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(result => {
        if (result.results[0].gender === 'male') {
            resolve(); // if the user is male, resolve the promise
        } else {
            reject(); // if the user is female, reject the promise
        }
    })
});
// console.log(parchi) = it well show pending because this is  sync code

// Handling the result using .then and .catch
parchi.then(function() {
    console.log('Green button'); // if male, show green button
}).catch(function() {
    console.log('Red button'); // if female, show red button
});




