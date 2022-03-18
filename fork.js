img="";
status="";
function preload(){
    img=loadImage('fork.jpg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocssd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResults);
}
 function gotResults(error, results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }
    function draw(){
        image(img, 0, 0, 640, 420);
        if(status !=""){
            for(i=0; i<objects.length; i++){
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
       
    }
        function backbuttonfork(){
            window.location="index.html";
        }
       
    