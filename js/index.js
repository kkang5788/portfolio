$(function(){

    let imgArray = $("img")
    let count = 0;
    for(let i=0 ; i<imgArray.length ; i++){
        if(imgArray[i].complete){
            count++
            if(count == imgArray.length){
                console.log(count)
                console.log("완료")
            }
        }else{
            console.log("완료되지못함")
        }
        
    }
    // console.log(imgArray[0].complete)


})