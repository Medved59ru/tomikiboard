function toshuBoardOnOff(){
    let x = document.getElementById('boardBody');
    if(x.className ==="containermain"){
        x.className +="toshu"
    }else{
        x.className = "containermain"
    }
}
let btnSwitchBoard = document.getElementById('btnSwitchBoard');
btnSwitchBoard.addEventListener('click',toshuBoardOnOff,false);

function addPoints(e){
    let target = e.target;
    if(target.id === "text"){
        e.stopImmediatePropagation();
    } else{
        let exist = Number(target.innerHTML);
        let sirototal = document.getElementById('sirototal');
        let sirocount = Number(sirototal.innerHTML);
        let akatotal = document.getElementById('akatotal');
        let akacount = Number(akatotal.innerHTML);
       
switch(target.id){
 //ippon
            case 'siroipponpart2':
                sirocount+=4;
                sirototal.innerHTML = sirocount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'siroipponpart1':
                sirocount+=4;
                sirototal.innerHTML = sirocount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'akaipponpart1':
                akacount+=4
                akatotal.innerHTML = akacount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'akaipponpart2':
                akacount+=4
                akatotal.innerHTML = akacount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
  //wasa ari
             case 'sirowazaaripart2':
                sirocount+=2;
                sirototal.innerHTML = sirocount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'sirowazaaripart1':
                sirocount+=2;
                sirototal.innerHTML = sirocount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'akawazaaripart1':
                akacount+=2;
                akatotal.innerHTML = akacount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
            case'akawazaaripart2':
                akacount+=2;
                akatotal.innerHTML = akacount;
                exist+=1;  
                target.innerHTML =  exist;
                break;
    
 //uko
                case 'siroukopart2':
                    sirocount+=1;
                    sirototal.innerHTML = sirocount;
                    exist+=1;  
                    target.innerHTML =  exist;
                    break;
                case'siroukopart1':
                    sirocount+=1;
                    sirototal.innerHTML = sirocount;
                    exist+=1;  
                    target.innerHTML =  exist;
                    break;
                case'akaukopart1':
                    akacount+=1;
                    akatotal.innerHTML = akacount;
                    exist+=1;  
                    target.innerHTML =  exist;
                    break          
                case'akaukopart2':
                    akacount+=1;
                    akatotal.innerHTML = akacount;
                    exist+=1;  
                    target.innerHTML =  exist;
                    break;
//cuki ari
    case 'sirocukiaripart2':
        sirocount+=1;
        sirototal.innerHTML = sirocount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    case'sirocukiaripart1':
        sirocount+=1;
        sirototal.innerHTML = sirocount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    case'akacukiaripart1':
        akacount+=1;
        akatotal.innerHTML = akacount;
        exist+=1;  
        target.innerHTML =  exist;
        break          
    case'akacukiaripart2':
        akacount+=1;
        akatotal.innerHTML = akacount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
//chui
      case 'sirochuipart2':
        sirocount+=1;
        sirototal.innerHTML = sirocount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    case'sirochuipart1':
        sirocount+=1;
        sirototal.innerHTML = sirocount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    case'akachuipart1':
        akacount+=1;
        akatotal.innerHTML = akacount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    case'akachuipart2':
        akacount+=1;
        akatotal.innerHTML = akacount;
        exist+=1;  
        target.innerHTML =  exist;
        break;
    
//shido
        case 'siroshidopart2':
           if(target.innerHTML == '1'){
                target.innerHTML ="";
                let chui = document.getElementById('sirochuipart2');
                let chuicount = Number(chui.innerHTML);
                chuicount+=1;
                chui.innerHTML = chuicount;

            }else{
                exist+=1;  
                target.innerHTML =  exist;
            }
            sirocount+=0.5;
            sirototal.innerHTML = sirocount;
            break;
        case'siroshidopart1':
        if(target.innerHTML == '1'){
            target.innerHTML ="";
            let chui = document.getElementById('sirochuipart1');
            let chuicount = Number(chui.innerHTML);
            chuicount+=1;
            chui.innerHTML = chuicount;

        }else{
            exist+=1;  
            target.innerHTML =  exist;
        }
        sirocount+=0.5;
        sirototal.innerHTML = sirocount;
        break;
        case'akashidopart1':
        if(target.innerHTML == '1'){
            target.innerHTML ="";
            let chui = document.getElementById('akachuipart1');
            let chuicount = Number(chui.innerHTML);
            chuicount+=1;
            chui.innerHTML = chuicount;

        }else{
            exist+=1;  
            target.innerHTML =  exist;
        }
        akacount+=0.5;
        akatotal.innerHTML = akacount;
            break;
        case'akashidopart2':
        if(target.innerHTML == '1'){
            target.innerHTML ="";
            let chui = document.getElementById('akachuipart2');
            let chuicount = Number(chui.innerHTML);
            chuicount+=1;
            chui.innerHTML = chuicount;

        }else{
            exist+=1;  
            target.innerHTML =  exist;
        }
        akacount+=0.5;
        akatotal.innerHTML = akacount;
            break;
        };
        

    };
 
 }

 let board = document.getElementById('boardBody');
 board.addEventListener('click',addPoints,false);




// let timeForTantoRound = 92000;
// let timeForLightTaisabakiRound = 32000;
// let distance = 0
// let countDownDate = new Date().getTime() + timeForLightTaisabakiRound;



 //обработчик события нажатие на пробел
// document.body.onkeyup = function(e) {
//   if (e.key == " " ||
//       e.code == "Space" ||      
//       e.keyCode == 32      
//   ) {

    
    
//   }
// }
// setInterval(function(){
//   var now = new Date().getTime();
  
//   distance = countDownDate - now;
    
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//  if(seconds > 9){
//  document.getElementById("timer").innerHTML = 
//   + minutes + " : " + seconds;
//  }
//  else{
//   document.getElementById("timer").innerHTML = 
//   + minutes + " : " + "0" + seconds;
//  }
 
//   if (distance < 0) {
//     clearInterval(x);
//     document.body.style.backgroundColor = "red";
//     document.getElementById("timer").innerHTML = "СТОП";
//   }
// },1000);
 

