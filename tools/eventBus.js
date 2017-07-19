bus={};
bus.eventBus = {
  listener:{
    list:{},
    add:function(event,fn){
        this.list[event] = fn;
    },
    remove:function(event){
        this.list[event] = null;
    }
  },
  subscribe:function(evtnt,fn){
      this.listener.add(event,fn);
  },
  on:function(event,fn){
      this.subscribe(event,fn);
  },
  broadcast :function(event){
    if(!this.listener.list[event]){
      return;
    }
    var funcHolder = this.listener.list[event];
    if(!funcHolder){
      return;
    }
    funcHolder.apply(this, [].slice.call(arguments, 1));
  },
  unsubscribe:function(event){
    this.listener.remove(event);
  }
}
