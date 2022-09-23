const set = new Set();

onconnect = (e) => {
    var port = e.ports[0];
    set.add(port);

    port.onmessage = (ee) => {
        set.forEach((p) => {
            // console.log(`worker.js onmessage`, ee, p);
            p.postMessage(ee.data);
        });
    };
};

// onconnect = function(e) {
//     var port = e.ports[0];

//     port.addEventListener('message', function(e) {
//       var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//       port.postMessage(workerResult);
//     });

//     port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
// }
