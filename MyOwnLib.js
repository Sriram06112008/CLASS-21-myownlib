function bounceOff(s1, s2) {

    if( s1.x -s2.x < s1.width/2 + s2.width/2 && 
      s2.x -s1.x < s1.width/2 + s2.width/2  ) {
    
        s1.velocityX = s1.velocityX*(-1);
        s2.velocityX = s2.velocityX*(-1);
      }
    
      if( s1.y -s2.y < s1.height/2 + s2.height/2 && 
        s2.y -s1.y < s1.height/2 + s2.height/2  ) {
      
          s1.velocityY = s1.velocityY*(-1);
          s2.velocityY = s2.velocityY*(-1);
        }
    
  }
  function collisionMaster(p1,p2){
    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      && p1.y - p2.y < p2.height/2 + p1.height/2
      &&p2.y - p1.y < p2.height/2 + p1.height/2) {
      return true;
  }
  else {
    return false;
  }
  }