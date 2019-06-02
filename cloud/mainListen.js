
var events = require('events');

var eventEmitter = new events.EventEmitter;

var listener1 = function listener1(){
    console.log('监听期listener1执行');
}

var listener2 = function listener2(){
    console.log('监听器 listener2执行');
}

eventEmitter.addListener('connection', listener1);       //addListener  和 on 的作用

eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');      //监听到链接的个数

console.log(eventListeners + '个监听器监听连接事件');

eventEmitter.emit('connection');    //处理监听事件，这里是触发两个connection

eventEmitter.removeListener('connection',listener1);    //移除监听事件1

console.log('listener1 不再受监听');

eventEmitter.emit('connection');     //再次调用监听事件


eventListeners = eventEmitter.listenerCount('connection');      //监听到的事件个数

console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');
