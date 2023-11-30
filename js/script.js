$(function(){

    // console.log()
    
    $(".abbbout .webp").css("font-size",window.innerWidth*0.035)
    $(window).resize(function(){
        $(".abbbout .webp").css("font-size",window.innerWidth*0.035)
    })

    new Scrooth()
    showClock()
    let contact_Status = false
    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        let con_top = $(".contact").offset().top
        if(sct >= con_top - 1000 && contact_Status == false){
            $(".contact path").each(function(index){
                let pathL = $(this).get(0).getTotalLength()
                $(this).css("stroke-dasharray",pathL)
                $(this).css("stroke-dashoffset",pathL)
                let thispath = $(this)
                setTimeout(() => {
                    thispath.css("transition", `stroke-dashoffset 1s ease ${index*0.3}s`)
                }, 500);
            })
            setTimeout(function(){
                $(".contact").addClass("on")
            },500)
            setTimeout(function(){
                $(".contact").addClass("back_on")
            },5000)
            contact_Status=true
        }
    })
})




$(document).ready(function(){

    $(".train>li>img").mouseover(function(){
        $(this).next().css("animation","nao 0.6s ease 0s forwards")
    })
    $(".train>li>img").mouseout(function(){

        let this_out = $(this)
        $(this).next().css("animation","dlga 0.6s ease 0s forwards")
        setTimeout(function(){
            $(this_out).next().css("animation","turn 1s ease 0s infinite")
        },600)
    })




    $(".top_arrow").click(function(){
        var offset_s = $('.contents1').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset_s.top},4000)
    })
    $(".profile").click(function(){
        var offset_s = $('.about_me').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset_s.top},4000)
    })
    $(".pop_up").click(function(){
        var offset = $('.contents2').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset.top},4000)
    })
    $(".banner").click(function(){
        var offset = $('.contents4').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset.top},4000)
    })
    $(".work_p").click(function(){
        var offset = $('.work').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset.top},4000)
    })
    $(".contact_p").click(function(){
        var offset = $('.contact').offset(); //선택한 태그의 위치를 반환
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	    $('html').animate({scrollTop : offset.top},4000)
    })


    let rotate = 0
    let f_Status = 0

    let banner_Stat = false
    let popup_Stat = false

    $(window).scroll(function(){
        rotate+=1
        let sct = $(window).scrollTop()
        $(".title").css("transform",`rotate(${sct/10}deg)`)
        let introY = sct/7
        let opc = sct/1000
        $(".introTxt").css("transform",`translate(0%, ${introY}%)`)
        $(".introTxt").css("opacity",1-opc)
        if(f_Status==0){
            textAnimation($(".title"),{delay:0.8,aniName:"moveleft"})
            f_Status=1
        }

        let banner_Text = $(".contents4").offset().top
        let popup_Text = $(".contents2").offset().top

        if(sct >= banner_Text+400 && banner_Stat == false){
            
            $(".contents4>.banner_T").css("font-size","4rem")
            $(".contents4>.banner_T").css("transform","translate(0,400PX)")
            banner_Stat = true
        }
        else if(sct < banner_Text+400 && banner_Stat == true){
            $(".contents4>.banner_T").css("font-size","14rem")
            $(".contents4>.banner_T").css("transform","translateY(0PX)")
            banner_Stat = false
        }

        if(sct >= popup_Text+400 && popup_Stat == false){
            
            $(".contents2>.popup_T").css("font-size","4rem")
            $(".contents2>.popup_T").css("color","rgb(96, 148, 180)")
            $(".contents2>.popup_T").css("transform","translate(0,400PX)")
            popup_Stat = true
        }
        else if(sct < popup_Text+400 && popup_Stat == true){
            $(".contents2>.popup_T").css("font-size","14rem")
            $(".contents2>.popup_T").css("color","#A37A44")
            $(".contents2>.popup_T").css("transform","translateY(0PX)")
            popup_Stat = false
        }

    })

    
    $(window).scroll(function(){

        let about_h = $(".about_me").offset().top
        sct = $(window).scrollTop()

        if(sct >= about_h - 400){
            $(".choonsik_img").css("transform","rotate(360deg)")
            $(".choonsik_img").css("scale","1")
            $(".choonsik_img").css("opacity","1")
            $(".profilee").addClass("fade_in")
            $(".prof").addClass("right_m")
            $(".proff").addClass("up_m")
            $(".profff").addClass("jump_m")
        }

        let scrollStart = $(".scrollBox").offset().top
        let distance = sct - scrollStart

        let vh = $(".elv").height()

        let scrollHeight = $(".scrollBox").height()
        let per = distance/(scrollHeight - vh)*100
        let perTrain = per*0.8333
        
        if(distance<0){
            $(".elv").removeClass("fixed")
            $(".elv").removeClass("bottom")
        }
        if(distance>=0 && distance<scrollHeight - vh){
            $(".elv").addClass("fixed")
            $(".elv").removeClass("bottom")
            $(".train").css("transform",`translateX(-${perTrain}%)`)
        }
        if(distance>=scrollHeight - vh){
            $(".elv").removeClass("fixed")
            $(".elv").addClass("bottom")
        }

        let ban_vh = $(".ban_elv").height()
        let ban_scrollStart = $(".contents5").offset().top 
        let ban_distance = sct - ban_scrollStart
        let ban_scrollHeight = $(".contents5").height()
        let ban_per = ban_distance/(ban_scrollHeight - ban_vh)*100
        let ban_perTrain = ban_per*1.2

        if(ban_distance+200<0){
            $(".ban_elv").removeClass("fixed")
            $(".ban_elv").removeClass("bottom")
            $(".banner_T").removeClass("fixed")
            $(".banner_T").removeClass("bottom")
        }
        if(ban_distance+200>=0 && ban_distance<ban_scrollHeight - ban_vh){
            $(".ban_train>li").css("transform","scale(0.5)")
            $(".ban_elv").addClass("fixed")
            $(".ban_elv").removeClass("bottom")
            $(".banner_T").addClass("fixed")
            $(".banner_T").removeClass("bottom")
            if(ban_perTrain<=20){
                $(".ban_train>li:nth-of-type(5)").css("transform",`translateY(-${ban_perTrain*6}%)`)
            }
            if(20<ban_perTrain && ban_perTrain<=40){
                $(".ban_train>li:nth-of-type(4)").css("transform",`translateY(-${ban_perTrain*6*0.5 - 10}%)`)
            }
            if(40<ban_perTrain && ban_perTrain<=60){
                $(".ban_train>li:nth-of-type(3)").css("transform",`translateY(-${ban_perTrain*6*0.33 - 20}%)`)
            }
            if(60<ban_perTrain && ban_perTrain<=80){
                $(".ban_train>li:nth-of-type(2)").css("transform",`translateY(-${ban_perTrain*6*0.25 - 30}%)`)
            }
            if(80<ban_perTrain && ban_perTrain<=100){
                $(".ban_train>li:nth-of-type(1)").css("transform",`translateY(-${ban_perTrain*6*0.2 - 40}%)`)
            }
            if(100<ban_perTrain && ban_perTrain<=120){
                $(".ban_train>li").css("transform","scale(1)")
            }
        }
        if(ban_distance+200>=ban_scrollHeight - ban_vh){
            $(".banner_T").removeClass("fixed")
            $(".banner_T").addClass("bottom")
            $(".ban_elv").removeClass("fixed")
            $(".ban_elv").addClass("bottom")
        }
    })

    $('.toggle').click(function(e){
    e.preventDefault()
    $(this).toggleClass('active');
});

    let menuStatus = false
    $(".contents1>a").click(function(){
        if(menuStatus==false){
            $(".movingMenu").addClass("active")
            menuStatus=true
        }
        else{
            $(".movingMenu").removeClass("active")
            menuStatus=false
        }
    })

    $(".Menu>ul>li").click(function(){
        if(menuStatus==true){
            $(".movingMenu").removeClass("active")
            $(".toggle").removeClass("active")
        }
        menuStatus=false
    })

    setTimeout(function(){
        $(".chak").addClass("on");
        $(".click").addClass("on")
    },1000)

    
    // let btnMovingBG = false
    let devHeight = $(window).height()
    
    let aniLength = $(".scrollElement").height()
    
    let h1Status_1 = false
    let h1Status_2 = false

    let result = ""
    for(let i=0 ; i<20 ; i++){
        result += `<div class="gradient" style="transition:all 1s ease ${i*0.05}s"></div>`
    }

    $(".chak").html(result)

    $(window).scroll(function(){
        let movingTop = $(".scrollElement").offset().top
        
        let sct = $(window).scrollTop()
        console.log(sct)

        if(sct-movingTop < 0){
            $("#movingBG").removeClass("active")
            $("#movingBG").removeClass("bottom")
        }
        if(sct-movingTop >= 0 && sct-movingTop < aniLength-devHeight){
            $("#movingBG").addClass("active")
        }


        if(sct-movingTop >= aniLength-devHeight){
            $("#movingBG").removeClass("active")
            $("#movingBG").addClass("bottom")
        }

        if(sct-movingTop>-700){
            $(".contents1").css("background","#DBFCFF")
        }
        else{
            $(".contents1").css("background","rgb(96, 148, 180)")
        }

        if(sct-movingTop>2800){
            $("#info").addClass("opacity")
        }
        else{
            $("#info").removeClass("opacity")
        }

        if(sct-movingTop>1800){
            $("#bird").addClass("opacity")
        }
        else{
            $("#bird").removeClass("opacity")
        }

    })
    $(document).mousemove(function(event){
        let dx = event.pageX
        let dy = event.pageY
        $(".coords_x").html(dx)
        $(".coords_y").html(dy)

        let cx = event.clientX
        let cy = event.clientY
        $(".coords_x2").html(cx)
        $(".coords_y2").html(cy)

        $(".mouse").css("left",cx)
        $(".mouse").css("top",cy)

        $(".mouse2").css("left",cx)
        $(".mouse2").css("top",cy)

        $(".mouse").css("display","block")
        $(".mouse2").css("display","block")
    })
    
    
    // $(".contents1>i").mouseover(function(){
    //     $(".contents1").css("background","black")
    //     $(".contents1>h1").css("color","red")
    //     $(".contents1>h1").css("animation","jump 0.3s ease 0s 5")
    //     $(".contents1>h1").css("font-size","24rem")
    // })
    // $(".contents1>i").mouseout(function(){
    //     $(".contents1").css("background","rgb(96, 148, 180)")
    //     $(".contents1>h1").css("color","white")
    //     $(".contents1>h1").css("animation","")
    //     $(".contents1>h1").css("font-size","16rem")
    // })
    
})