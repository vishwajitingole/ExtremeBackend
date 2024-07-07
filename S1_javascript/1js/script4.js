//Callbacks, Promises and async and await

function getSongs() {}
setTimeout(function () {
  console.log("Songs Aaagye!!!");
}, 2000);
function getMoreSongs() {}
setTimeout(function () {
  console.log("More Songs Aaagye!!!");
}, 1200);

getSongs();
getMoreSongs();
//Here since the setTimeout is less for getMoreSongs then getMoreSongs clg first
// and the getSongs gets clg after
//Applying callback hell
function getconnect(cbf) {
  console.log("Connecting to server");
  setTimeout(function () {
    cbf();
  }, 2000);
}
getconnect(function () {
  console.log("Connected to Server");
});

//Promises

function connectToServer() {
  console.log("Connecting to Server!!!");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
}

connectToServer().then(function (response) {
  console.log("Connected to Server....");
});

function connectToServer1() {
  console.log("Connecting to Server!!!");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(["course1", "course2", "course3"]);
    }, 2000);
  });
}

connectToServer1().then(function (response) {
  console.log(response);
});
