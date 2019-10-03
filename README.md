# JSScrollEvent

# How to use
1. Detecting scroll direction

```javascript
let se = new ScrollEvent();
se.direction('down', function(){
	console.log('go to down');
});
se.direction('up', function(){
	console.log('go to up');
});
```

2. Detecting if an element is in the Viewport

```javascript
let se = new ScrollEvent();
se.on('.selector', function(){
	console.log('Element is active!');
});
```
