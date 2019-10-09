/*
* @license Copyright (c) 2019, Abo Hovhannisyan. All rights reserved.
*/
class ScrollEvent{
/*
  @selector GET 'up', 'down'
  @callback GET function
  */
	on(selector, callback){
  	let elem = document.querySelector(selector);
		let key  = 0;
    let verify = 0;
    document.addEventListener('wheel', function(event){
      let posY = window.scrollY;
      let elem_posY = elem.offsetTop;

      let scrollTop = posY + (window.innerHeight - elem.offsetHeight);
         
      if(scrollTop >= elem_posY && 
      	scrollTop <= elem_posY + window.innerHeight){
      	
        if(key == verify){
          callback();
          key++;
        }
        
      }else{
      	verify = key;
      }

    });
  }
  /*
  @direction GET 'up', 'down'
  @callback GET function
  */
  direction(direction, callback){
  	
  	document.addEventListener('wheel', function(event){
    let dir = (event.deltaY > 0)? 'down' : "up";
		
      if(dir == direction){
        callback();
      }
    
    });
    
  }
}
