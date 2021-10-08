song1=""; 
song2=""; 
   scoreleftWrist=0;
   scorerightWrist=0;
   lx=0;
   ly=0;
   rx=0;
   ry=0;
   status1="";
   status2="";
    function preload(){
 song1 = loadSound("music.mp3");
 song2 = loadSound("music2.mp3");
}
 function setup(){
     canvas=createCanvas(600,500); 
    canvas.center(); 
     video=createCapture(VIDEO);
 video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
     } 
     function gotPoses(results)
      { if (results.length>0)
         { console.log (results); 
            scoreleftWrist = results[0].pose.keypoints[9].score;
             console.log("score left wrist" + scoreleftWrist);
             scorerightWrist = results[0].pose.keypoints[10].score;
             console.log("score right wrist" + scorerightWrist);
             lx=results[0].pose.leftWrist.x;
            ly=results[0].pose.leftWrist.y;
            rx=results[0].pose.rightWrist.x;  
            ry=results[0].pose.rightWrist.y; 
            console.log("lx"+lx+"ly"+ly+"rx"+rx+"ry"+ry) ;
         }
            }
             function modelLoaded(){
                  console.log("posenet is initilized!");
                 } 
    function draw(){ 
     image(video,0,0,600,500);
     status1=song1.isPlaying();
     status2=song2.isPlaying();
                      if(scoreleftWrist > 0.2) 
                      { 
                circle(lx,ly,20);
                     song2.stop();
               
                if(status1==false) {
                    song1.play();
                    document.getElementById("song").innerHTML="playing peter pan";
                    
                }
                }
                if(scorerightWrist > 0.2) 
                { 
          circle(rx,ry,20);
               song1.stop();
         
          if(status2==false) {
              song2.play();
              document.getElementById("song").innerHTML="playing harry potter";
              
          }
          }
            }
            function play(){
                song.play();
                song.setVolume(1);
                song.rate(1);
            }