/**
 * 
 * 
 */

function bordeTeletrans(world){
  if(world.pacman.x<0 ){
  world.pacman.x = 20
  }
  if(world.pacman.x>20){
  world.pacman.x = 0
    }
}

/**
 * 
 */

function colisionFantCer(world){
  
        if( world.pacman.x  ==  world.fantasO.x  && world.pacman.y == world.fantasO.y  ){
          death.play()
          death.volume = 0.3
          world.score = 0;
          world.time = 0;
          world.pacman.x = 10
          world.pacman.y = 9
          world.cereza1.x = 1
          world.cereza1.y = 1
          world.cereza2.x = 2
          world.cereza2.y = 15
          world.cereza3.x = 15
          world.cereza3.y = 2
          world.cereza4.x = 13
          world.cereza4.y = 19
          world.cereza5.x = 20
          world.cereza5.y = 9
          world.canCereza = 0
          world.dir.x = 0
          world.dir.y = 0
        }
        if( world.pacman.x  ==  world.fantasP.x  && world.pacman.y == world.fantasP.y  ){
          world.score = 0;  
          world.time = 0;  //
          world.pacman.x = 10      
          world.pacman.y = 9
          world.cereza1.x = 1
          world.cereza1.y = 1
          world.cereza2.x = 2
          world.cereza2.y = 15
          world.cereza3.x = 15
          world.cereza3.y = 2
          world.cereza4.x = 13
          world.cereza4.y = 19
          world.cereza5.x = 20
          world.cereza5.y = 9
          world.canCereza = 0
          world.dir.x = 0
          world.dir.y = 0
        }
        if( world.pacman.x  ==  world.fantasA.x  && world.pacman.y == world.fantasA.y  ){
          death.play()
          death.volume = 0.3
          world.score = 0;
          world.time = 0;
          world.pacman.x = 10
          world.pacman.y = 9
          world.cereza1.x = 1
          world.cereza1.y = 1
          world.cereza2.x = 2
          world.cereza2.y = 15
          world.cereza3.x = 15
          world.cereza3.y = 2
          world.cereza4.x = 13
          world.cereza4.y = 19
          world.cereza5.x = 20
          world.cereza5.y = 9
          world.canCereza = 0
          world.dir.x = 0
          world.dir.y = 0
        }
        if( world.pacman.x  ==  world.fantasR.x  && world.pacman.y == world.fantasR.y  ){
          death.play()
          death.volume = 0.03
          world.score = 0;
          world.time = 0;
          world.pacman.x = 10
          world.pacman.y = 9
          world.cereza1.x = 1
          world.cereza1.y = 1
          world.cereza2.x = 2
          world.cereza2.y = 15
          world.cereza3.x = 15
          world.cereza3.y = 2
          world.cereza4.x = 13
          world.cereza4.y = 19
          world.cereza5.x = 20
          world.cereza5.y = 9
          world.canCereza = 0
          world.dir.x = 0
          world.dir.y = 0
        }
        if( world.pacman.x == world.cereza1.x && world.pacman.y == world.cereza1.y ){
          eat_fruit.play()
          eat_fruit.volume = 0.3
          world.canCereza += 1
          world.score += 3
          world.cereza1.x = 19
          world.cereza1.y = 21
        }
        if( world.pacman.x == world.cereza2.x && world.pacman.y == world.cereza2.y ){
          eat_fruit.play()
          eat_fruit.volume = 0.3
          world.canCereza += 1
          world.score += 3
          world.cereza2.x = 19
          world.cereza2.y = 21
        }
        if( world.pacman.x == world.cereza3.x && world.pacman.y == world.cereza3.y ){
          eat_fruit.play()
          eat_fruit.volume = 0.3
          world.canCereza += 1
          world.score += 3
          world.cereza3.x = 19
          world.cereza3.y = 21
        }
        if( world.pacman.x == world.cereza4.x && world.pacman.y == world.cereza4.y ){
          eat_fruit.play()
          eat_fruit.volume = 0.3
          world.canCereza += 1
          world.score += 3
          world.cereza4.x = 19
          world.cereza4.y = 21
        }
        if( world.pacman.x == world.cereza5.x && world.pacman.y == world.cereza5.y ){
          eat_fruit.play()
          eat_fruit.volume = 0.3
          world.canCereza += 1
          world.score += 3
          world.cereza5.x = 19
          world.cereza5.y = 21
        }
}