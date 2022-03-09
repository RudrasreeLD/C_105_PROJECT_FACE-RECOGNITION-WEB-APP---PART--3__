Webcam.set
    ({
        width: 325,
        height: 250,
        image_formt: ' png ',
        png_quality: 100
    });

camera = document.getElementById("camera");

Webcam.attach(camera);

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rBZSFBGvZ/model.json', rudra);
function rudra() {
    console.log("Model is Loaded");
}

function identify() {
    img = document.getElementById("img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}