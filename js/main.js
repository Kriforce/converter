let inputRub = document.getElementById('rub'),
    inputEur = document.getElementById('eur'),
    inputByn = document.getElementById('byn'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    } else {
                        reject();
                    }
                }
            }
        });
    };

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = (inputRub.value / data.usdR).toFixed(4);
            inputByn.value = (inputRub.value / data.bynR).toFixed(4);
            inputEur.value = (inputRub.value / data.eurR).toFixed(4);
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = 'Something went wrong...')
});

inputEur.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    } else {
                        reject();

                    }
                }
            }
        });
    };

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = (inputEur.value / data.usdE).toFixed(4);
            inputByn.value = (inputEur.value / data.bynE).toFixed(4);
            inputRub.value = (inputEur.value / data.rubE).toFixed(4);
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = 'Something went wrong...')
});

inputByn.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    } else {
                        reject();

                    }
                }
            }
        });
    };

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = (inputByn.value / data.usdB).toFixed(4);
            inputRub.value = (inputByn.value / data.rubB).toFixed(4);
            inputEur.value = (inputByn.value / data.eurB).toFixed(4);
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = 'Something went wrong...')
});

inputUsd.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    } else {
                        reject();

                    }
                }
            }
        });
    };

    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response);
            inputRub.value = (inputUsd.value / data.rubU).toFixed(4);
            inputByn.value = (inputUsd.value / data.bynU).toFixed(4);
            inputEur.value = (inputUsd.value / data.eurU).toFixed(4);
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = 'Something went wrong...')
});