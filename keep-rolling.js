var keepRolling = function(options){
    let keepRollingBox = document.querySelector('.keep-rolling-box');
    let ulsEle = createEle('ul',{class:'keep-rolling-ul'});
    let lisEle = null, imgEle = null, timer = null;
    let nextFrame = window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.msRequestAnimationFrame     ||
                    function(callback) {
                        let currTime = + new Date,
                            delay = Math.max(1000/60, 1000/60 - (currTime - lastTime));
                        lastTime = currTime + delay;
                        return setTimeout(callback, delay);
                    },
        cancelFrame = window.cancelAnimationFrame               ||
                      window.webkitCancelAnimationFrame         ||
                      window.webkitCancelRequestAnimationFrame  ||
                      window.mozCancelRequestAnimationFrame     ||
                      window.msCancelRequestAnimationFrame      ||
                      clearTimeout;
    keepRollingBox.appendChild(ulsEle);
    function createEle(tag,options){
        let durTag = document.createElement(tag);
        for(let k in options){
            let val = options[k];
            durTag.setAttribute(k,val)
        }
        return durTag
    }
    ulsEle.addEventListener('mousemove',function(){
        cancelFrame(timer);
    })

    for(let i = 0,imgLen = options.imgs.length; i<imgLen;i++){
        lisEle = createEle('a',{class:'keep-rolling-unit'});
        imgEle = createEle('img',{src:options.imgs[i],width:options.imgWidth});
        lisEle.appendChild(imgEle);
        ulsEle.appendChild(lisEle);
    }
    (function(){
        /*
        ** 设置box样式
        **/
        keepRollingBox.style.width = options.box.width;
        keepRollingBox.style.height = options.box.height;
        keepRollingBox.style.overflow = options.box.overflow;
        keepRollingBox.style.border = options.box.border;
        keepRollingBox.style.margin = '10px auto';

        /*
        ** 设置ul样式
        **/
        ulsEle.style.whiteSpace = 'nowrap';

        /*
        ** 设置li样式
        **/
        lisEle.style.display = 'inline-block'
    })()
    ulsEle.innerHTML = ulsEle.innerHTML + ulsEle.innerHTML;
    let target = imgEle.width * options.imgs.length;
    let current = 0;
    let animationsGo = function(){
        let self = arguments.callee;
        current += options.speed;
         timer = nextFrame(function(){
            ulsEle.style.marginLeft = '-' + current + 'px';
            if(current > target){
                ulsEle.style.marginLeft = 0;
                current = 0;
            }
            self();
        })
    }
    animationsGo();
    ulsEle.addEventListener('mouseout',function(){
        animationsGo();
    })
}
