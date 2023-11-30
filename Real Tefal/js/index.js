window.onload = function(){
    let search = document.querySelector(".search")
    let input = document.querySelector(".inp>input")
    let close = document.querySelector("#x_icon")

    input.addEventListener("focus",function(){
        search.classList.add("on")
    })
    close.addEventListener("click",function(){
        search.classList.remove("on")
    })

    let heart = document.querySelectorAll(".s_goods>div>a>img")

    // for(i=0;i<heart.length;i++){
    //     heart[i].addEventListener("click",function(e){
    //         e.preventDefault()
    //         heart[i].classList.add("change")
    //     })
    // }

    

    // document.querySelector("#search").addEventListener("click",function(e){
    //     e.preventDefault()
    // })

    
}
$(document).ready(function(){
    $(".s_goods>div>a>img").click(function(e){
        e.preventDefault()
        $(this).addClass("change")
    })
    
    let scrTop = 0
    let devHeight = $(window).height() // 브라우저 높이계산

    $(window).scroll(function(){

        scrTop = $(window).scrollTop()
        // 스크롤이 얼만큼 내려와있는지 계산

        console.log(scrTop)

        $(".am1, .am2, .am3").each(function(){
            if(scrTop+(devHeight*0.7)>=$(this).offset().top){
                // 지나쳤다
                $(this).addClass("on")
            }
            else{
                $(this).removeClass("on")
            }
        })
    })

    let bene = $(".sub_s>section>a")
    bene.click(function(e){
        e.preventDefault();
        // $(".sub_s>section>div").addClass("on")
    })
    $(".sub_but>a").click(function(e){
        e.preventDefault();
    })
})
