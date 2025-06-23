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
        if(!elem) return;
                let key  = 0;
    let verify = 0;
    document.addEventListener('scroll', function(event){
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
  	
        let lastPos = window.scrollY;
        document.addEventListener('scroll', function(){
    let current = window.scrollY;
    let dir = (current > lastPos)? 'down' : 'up';

      if(dir == direction){
        callback();
      }

      lastPos = current;

    });
    
  }
}
