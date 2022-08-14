function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Model loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
function draw(){
    background('orange');
}