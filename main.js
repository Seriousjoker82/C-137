function setup(){
 canvas=createCanvas(380,380)
 canvas.position(540,280)
}
objects=[]
video=""
status=""

function preload(){
    video=createVideo("video.mp4")
    video.hide()
}
function start(){
    objectDetect=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML=" "+"Detecting objects"

}

function modelLoaded(){
    console.log("model is loaded")
    video.loop()
    video.speed(1)
    video.volume(2)
    status=true
}
function draw(){
    image(video,0,0,380,380)
    if(status!=""){
        r=random(255)
        g=random(255)
        b=random(255)
objectDetect.detect(video, gotResult)
for(i = 0; i < objects.length;i++){
    document.getElementById("status").innerHTML="Objects Detected"
    document.getElementById("num").innerHTML=objects.length
    fill(r,g,b)
    Percent=floor(objects[i].confidence * 100)
text(objects[i].label+" "+Percent+"%",objects[i].x+15,objects[i].y+15)
noFill()
    stroke(r,g,b)
    rect(objects[i].x-20,objects[i].y-20,objects[i].width,objects[i].height)
}
    }
}

function gotResult(error, results){
if(error){
console.error(error)
}
   console.log(results);
    objects=results


}