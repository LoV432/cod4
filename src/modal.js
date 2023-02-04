var modal = document.getElementById("modal");
var mapslist = document.getElementById("mapslist");
var modslist = document.getElementById("modslist");
var modaltitle = document.getElementById("modaltitle");
var noddlesModal = document.getElementById("noddlesmodal");
var noddlesButtonClose = document.getElementById("closenoddlesmodal");
var noddlesSubmit = document.getElementById("noddlessubmit");
var noddlesInput = document.getElementById("noddlesinput");
var noddlesModalContent = document.getElementById("noddlesmodalcontent");

function closemodal(time="0.3s", timeout=300) {
    modal.style.animation = "animatebot " + time
    setTimeout(() => { modal.style.display = "none";  }, timeout);
    setTimeout(() => { modslist.style.display = "none";  }, timeout);
    setTimeout(() => { mapslist.style.display = "none";  }, timeout); 
};



function mapbutton(){
    mapslist.style.display = "grid";
    modaltitle.innerHTML = "Maps";
    modal.style.animation = "animatetop 0.7s";
    modal.style.display = "grid";
};

function modbutton(){
    modslist.style.display = "grid";
    modaltitle.innerHTML = "Mods";
    modal.style.animation = "animatetop 0.7s";
    modal.style.display = "grid";
};

closebutton.onclick = function(){
    closemodal();
};

window.onclick = function(event) {
    if (event.target == modal) {
        closemodal();
    }
    else if (event.target == noddlesModalContent){
        noddlesModal.style.display = "none";
    };
};

//noddles
function noddlesButton(){
    closemodal(time="0s", 0);
    noddlesModal.style.animation = "glitch 1.5s";
    noddlesModal.style.animationTimingFunction = "steps(3)"
    noddlesModal.style.display = "grid";
};

noddlesButtonClose.onclick = function(){
    noddlesModal.style.display = "none";
};

noddlesSubmit.onclick = function(){
    noddlesPassword = noddlesInput.value;
    console.log(noddlesPassword);
    var request = new XMLHttpRequest();  
    request.open('GET', noddlesPassword + '.html', true);
    request.onreadystatechange = function(){
        if (request.readyState === 4){
            if (request.status === 404) {  
                //console.log("Oh no, it does not exist!");
                document.getElementById('body').innerHTML = '<video playsinline autoplay id="bgvid" class="object-cover fixed w-full h-full"><source src="youdied.mp4" type="video/mp4"></video>';
                document.getElementById('bgvid').volume = 0.1;
            }
            else {
                //console.log("It Exist?");
            }  
        }
    };
    request.send();
};



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};


var md5seed = md5(getRandomInt(100));


var request = new XMLHttpRequest();  
request.open('GET', 'background/' + md5seed + ".gif", true);
request.onreadystatechange = function(){
    if (request.readyState === 4){
        if (request.status === 404) {  
            //console.log("Oh no, it does not exist!");
        }
        else {
            document.body.style.backgroundImage = "url('background/" + md5seed + ".gif')";
        }  
    }
};
request.send();

