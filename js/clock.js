function showClock(){
    var currentDate = new Date();
    var divClock = document.getElementById('divClock');
    var msg = "Seoul : ";
    if(currentDate.getHours()>12){      //시간이 12보다 크다면 오후 아니면 오전
      msg += "PM ";
      msg += (currentDate.getHours()-12<10?"0"+(currentDate.getHours()-12):currentDate.getHours()-12)+" : ";
    }
   else {
     msg += "AM ";
     msg += (currentDate.getHours()<10?"0"+(currentDate.getHours()):currentDate.getHours())+" : ";
    }

    msg += (currentDate.getMinutes()<10?"0"+currentDate.getMinutes():currentDate.getMinutes())+" : ";
    msg += (currentDate.getSeconds()<10?"0"+currentDate.getSeconds():currentDate.getSeconds())+" ";

    divClock.innerText = msg;

    if (currentDate.getMinutes()>58) {    //정각 1분전부터 빨강색으로 출력
      divClock.style.color="";
    }
    setTimeout(showClock,1000);  //1초마다 갱신
}