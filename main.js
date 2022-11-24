noseX = 0
noseY =0
cabecaY=0
cabecaX= 0
function preload() {
img = loadImage("https://i.postimg.cc/8zWN4r9C/image.png")
img2 = loadImage("https://i.postimg.cc/KjH3PgVN/26a14881c2a6dbce9e6a0a78a50b4a45-1.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoad)
    poseNet.on('pose', gotposes);
}
function gotposes(results) {
    console.log(results)
    if(results.length > 0) {
    noseX = results[0].pose.nose.x -15  
    noseY = results[0].pose.nose.y -15

    cabecaY= results[0].pose.nose.y -120
    cabecaX = results[0].pose.nose.x  -60

    console.log(noseX)
    console.log(noseY)
    }  

}
function modelLoad() {
    console.log("model load!")
}
function draw() {
    image(video,0, 0, 300, 300)
    image(img,noseX,noseY,30, 30)
    image(img2,cabecaX,cabecaY,100,100 )
    fill(22,150, 95)
}
function Foto() {
    save("image.jpg")
}
//https://i.postimg.cc/KjH3PgVN/26a14881c2a6dbce9e6a0a78a50b4a45-1.png