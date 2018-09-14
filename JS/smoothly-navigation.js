let aTags = document.querySelectorAll('nav.menu > ul >li >a')

    function animate(time){
      requestAnimationFrame(animate);
      TWEEN.update(time);
        }   //TWEEN库文档要求写的
        requestAnimationFrame(animate);//请求动画帧率

        for(let i=0; i<aTags.length; i++){
          aTags[i].onclick = function(x){
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href') //‘siteAbout’
            let element = document.querySelector(href)
            let top = element.offsetTop
            //let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop//这一句等于上面四句

            /*let n = 25    //一共动多长时间
            let duration = 500 / n  //多长时间动一次
            let currentTop = window.scrollY//当前高度
            let targetTop = top - 80   //目标高度
            let distance = (targetTop - currentTop) / n
            let i = 0
            let id = setInterval(()=> {
              if( i===n ){
                window.clearInterval(id)
                return
              }
              i = i + 1
              window.scrollTo(0, currentTop +  distance * i)
            },duration)*/
            let currentTop = window.scrollY
            let targetTop = top - 80
          let s = targetTop - currentTop   //路程
          var coords = { y : currentTop};    //起始位置
          var t = Math.abs((s/100)*300)     //时间
          if(t>500){ t =500 }
          var tween = new TWEEN.Tween(coords)  //起始位置
              .to({ y: targetTop }, t)       //结束位置和时间
              .easing(TWEEN.Easing.Quadratic.InOut)//缓动类型
              .onUpdate(function(){
                //coord.y已经变了
                window.scrollTo(0,coords.y)//如何更新界面
              })
              .start();
            }
          }