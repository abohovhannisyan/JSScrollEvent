/*
* @license Copyright (c) 2019, Abo Hovhannisyan. All rights reserved.
*/
class ScrollEvent{

  on(selector, callback){
  
  let elem = document.querySelector(selector);

    document.addEventListener('wheel', function(event){
    
      let posY = window.scrollY;
      let elem_posY = elem.offsetTop;

      let scrollTop = posY + (window.innerHeight - elem.offsetHeight);

      if(scrollTop >= elem_posY && 
      	 scrollTop <= elem_posY + window.innerHeight){
       	   callback();
      }

    });
    
  }
  
  direction(direction, callback){
  	
  document.addEventListener('wheel', function(event){
    
    let dir = (event.deltaY > 0)? 'down' : "up";
		
      if(dir == direction){
        callback();
      }
    
    });
    
  }
}
