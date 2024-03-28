export default {
        throttle:function(fn,duration){
            return new c().excuteFn.call(this,fn,duration);
        }
    }

function c(){
    function a(){
        this.timer=new Date().getTime()
        this.oldTimer=this.timer
    }
    var timerRef=new a()
    return (function(){
        return {
            timer:timerRef,
            changeTimer:function(){
                timerRef.oldTimer=0;
            },
            restoreTimer:function(){
                timerRef.oldTimer=timerRef.timer;
            },
            excuteFn:function(fn,duration){
                return function (){
                    console.log(timerRef);
                    if (timerRef.oldTimer!==timerRef.timer) {
                        console.log('Running... wait about '+duration+' millisecond')
                        return false;
                    }else {                    
                        fn.call();
                        timerRef.oldTimer=0;
                        timerRef.oldTimer=setTimeout(function(){
                            timerRef.oldTimer=timerRef.timer;
                        },duration)
                    }
                }
            }
        }
    })()
}