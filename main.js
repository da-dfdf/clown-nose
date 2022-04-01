nosex = 0;
nosey = 0;

function preload(){
  clown_nose = loadImage("https://i.postimg.cc/DZmYGznB/580b57fbd9996e24bc43bed5.png");

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400,400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;

        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);

    }
}

function draw(){
    image(video,0,0,400,400);
    image(clown_nose, nosex,nosey,30,30);

}
function takePicture(){
    save("Image.png");

}