
function loadAllFestivalData(festivalData) {
    localStorage.setItem("AllFestivalData", JSON.stringify(festivalData));
}


function getStage(stageName) {
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData"));
  for(let i = 0; i < festivalData.length; i++) {
    if (festivalData[i].stagename == stageName) {
      return festivalData[i].stagename;
    }
  }
}


function getStageSchedule(stageName) { 
 festivalData = JSON.parse(localStorage.getItem("AllFestivalData"));
  for(let i = 0; i < festivalData.length; i++) {
    if (festivalData[i].stagename == stageName) {
      return festivalData[i].bands;
    }
  }
}

function displayMainStageSchedule(stageName) {
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");

  var bandas = [banda1,banda2,banda3,banda4];
  var horas = [hora1,hora2,hora3,hora4];
  currentSchedule = getStageSchedule(stageName);

  for (let i = 0; i < currentSchedule.length; i++)
    bandas[i].innerHTML += currentSchedule[i].bandName;

  for (let i = 0; i < currentSchedule.length; i++)
    horas[i].innerHTML += currentSchedule[i].time;

}

function displayPortStageSchedule(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");
  banda7 = document.getElementById("Banda7");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  hora7 = document.getElementById("hora7");

  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6,banda7];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6,hora7];
  currentSchedule = getStageSchedule(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  } 
}

function displayUnderworldZoneSchedule(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  
  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6];
  // Load the schedule for the current room
  currentSchedule = getStageSchedule(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
}


function loadAllFestivalData2(festivalData) {
    localStorage.setItem("AllFestivalData2", JSON.stringify(festivalData));
}


function getStageSchedule2(stageName) { 
 festivalData = JSON.parse(localStorage.getItem("AllFestivalData2"));
  for(let i = 0; i < festivalData.length; i++) {
    if (festivalData[i].stagename == stageName) {
      return festivalData[i].bands;
    }
  }
}

function displayMainStageSchedule2(stageName) {
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");

  var bandas = [banda1,banda2,banda3,banda4];
  var horas = [hora1,hora2,hora3,hora4];
  currentSchedule = getStageSchedule2(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
  
}

function displayPortStageSchedule2(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");
  banda7 = document.getElementById("Banda7");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  hora7 = document.getElementById("hora7");

  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6,banda7];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6,hora7];
  currentSchedule = getStageSchedule2(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
  
}

function displayUnderworldZoneSchedule2(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  
  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6];

  currentSchedule = getStageSchedule2(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
}

function loadAllFestivalData3(festivalData) {
    localStorage.setItem("AllFestivalData3", JSON.stringify(festivalData));
}


function getStageSchedule3(stageName) { 
 festivalData = JSON.parse(localStorage.getItem("AllFestivalData3"));
  for(let i = 0; i < festivalData.length; i++) {
    if (festivalData[i].stagename == stageName) {
      return festivalData[i].bands;
    }
  }
}

function displayMainStageSchedule3(stageName) {
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");

  var bandas = [banda1,banda2,banda3,banda4];
  var horas = [hora1,hora2,hora3,hora4];
  currentSchedule = getStageSchedule3(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
}

function displayPortStageSchedule3(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");
  banda7 = document.getElementById("Banda7");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  hora7 = document.getElementById("hora7");

  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6,banda7];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6,hora7];
  currentSchedule = getStageSchedule3(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
}

function displayUnderworldZoneSchedule3(stageName) {
  
  banda1 = document.getElementById("Banda1");
  banda2 = document.getElementById("Banda2");
  banda3 = document.getElementById("Banda3");
  banda4 = document.getElementById("Banda4");
  banda5 = document.getElementById("Banda5");
  banda6 = document.getElementById("Banda6");

  hora1 = document.getElementById("hora1");
  hora2 = document.getElementById("hora2");
  hora3 = document.getElementById("hora3");
  hora4 = document.getElementById("hora4");
  hora5 = document.getElementById("hora5");
  hora6 = document.getElementById("hora6");
  
  var bandas = [banda1,banda2,banda3,banda4,banda5,banda6];
  var horas = [hora1,hora2,hora3,hora4,hora5,hora6];
  currentSchedule = getStageSchedule3(stageName);

  for (let i = 0; i < currentSchedule.length; i++) {
    bandas[i].innerHTML += currentSchedule[i].bandName;
  }

  for (let i = 0; i < currentSchedule.length; i++) {
    horas[i].innerHTML += currentSchedule[i].time;
  }
}

function notificationTittle(band) {
  document.getElementById("Bandtitle").innerHTML = band;
}


var bandsArray = [];
var cont = 0; 

function saveArray() {
  sessionStorage.setItem("arrayBands", JSON.stringify(bandsArray));
}

function push(band) {
    var arrayBand = JSON.parse(sessionStorage.arrayBands);
    if(band != null) {
      arrayBand.push(band);
      sessionStorage.setItem(band+'C', "ybell.png");
      sessionStorage.setItem("arrayBands", JSON.stringify(arrayBand));
      location.replace("ecra_notificacoes_sucesso.html");
    }
  }

  var cont = 0;
  function saveContador3() {
    sessionStorage.setItem("cont3", JSON.stringify(cont));
  }

  function pop(band) {
    var arrayBand = JSON.parse(sessionStorage.arrayBands);
    var contador = JSON.parse(sessionStorage.cont3);
    for (let i = 0; i < arrayBand.length; i++) {
      if(arrayBand[i] == band) {
        arrayBand[i] = null;
        sessionStorage.setItem(band+'C', "bell.png");
        sessionStorage.setItem("arrayBands", JSON.stringify(arrayBand));
        localStorage.removeItem(band);
        if(contador != 0) {
          contador--;
          sessionStorage.setItem("cont3", JSON.stringify(contador));
        }
      }
    }
  }

function noNotifications() {
  var arrayBand = JSON.parse(sessionStorage.arrayBands);
  var contador = JSON.parse(sessionStorage.cont);
  for (let i = 0; i < arrayBand.length; i++) {
    if(arrayBand[i] != null ) {
      contador++;
      sessionStorage.setItem("cont", JSON.stringify(contador));
    }
  }

  if(contador == 0) {
    location.assign("ecra_no_notificacoes.html");
  }
  else {
    location.assign("ecra_notificacoes.html");
    contador = 0;
    sessionStorage.setItem("cont", JSON.stringify(contador));
  }
}

function saveContador() {
  sessionStorage.setItem("cont", JSON.stringify(cont));
}

function noNotifications2() {
  var arrayBand = JSON.parse(sessionStorage.arrayBands);
  var contador = JSON.parse(sessionStorage.cont2);
  for (let i = 0; i < arrayBand.length; i++) {
    if(arrayBand[i] != null ) {
      contador++;
      sessionStorage.setItem("cont2", JSON.stringify(contador));
    }
  }
  if(contador == 0) {
    location.replace("ecra_no_notificacoes.html");
  }
  else {
    contador = 0;
    sessionStorage.setItem("cont2", JSON.stringify(contador));
  }
}

var cont2 = 0;

function saveContador2() {
  sessionStorage.setItem("cont2", JSON.stringify(cont2));
}

function selectBand(bandName) {
  localStorage.setItem("bandName", bandName);
}

function saveBand() {
  var bandName = localStorage.getItem("bandName");
}


function getBand() {
  return localStorage.getItem("bandName");;
}


function getBandStage(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].stagename;
      }
    }
  }
}

function getBandTime(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].time;
      }
    }
  }
}

function getBandDay(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].day;
      }
    }
  }
}

function selectBandPersonalize(bandName) {
  localStorage.setItem("personalizeBand", bandName);
}


function getBandPersonalize() {
  var band = localStorage.getItem("personalizeBand");
  return band;
}


function changeSource(link) {
  location.replace(link);
}

function getBandStage2(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData2"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].stagename;
      }
    }
  }
}

function getBandTime2(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData2"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].time;
      }
    }
  }
}

function getBandDay2(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData2"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].day;
      }
    }
  }
}



function getBandStage3(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData3"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].stagename;
      }
    }
  }
}

function getBandTime3(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData3"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].time;
      }
    }
  }
}

function getBandDay3(band) {
  var i;
  var j;
  festivalData = JSON.parse(localStorage.getItem("AllFestivalData3"));
  for(i = 0; i < festivalData.length; i++) {
    for(j in festivalData[i].bands) {
      if(festivalData[i].bands[j].bandName == band) {
        return festivalData[i].bands[j].day;
      }
    }
  }
}


function displayNotifications() {
    var arrayBands = JSON.parse(sessionStorage.arrayBands);

     for (let i = 0; i < arrayBands.length; i++) {

      if(arrayBands[i] != null) {
        var stage;
        var time;
        var day;

        if(getBandStage(arrayBands[i]) != undefined) {
          stage = getBandStage(arrayBands[i]);
          time = getBandTime(arrayBands[i]);
          day = getBandDay(arrayBands[i]);
        } 

        else if(getBandStage2(arrayBands[i]) != undefined) {
            stage = getBandStage2(arrayBands[i]);
            time = getBandTime2(arrayBands[i]);
            day = getBandDay2(arrayBands[i]);
          }

        else {
          stage = getBandStage3(arrayBands[i]);
          time = getBandTime3(arrayBands[i]);
          day = getBandDay3(arrayBands[i]);
        }

  
        var div = document.createElement("div");
        var t = document.createTextNode(arrayBands[i]);
        div.appendChild(t);
        div.id = "band";
        document.getElementById("bands").appendChild(div);

        div.onclick = function() {selectBandPersonalize(arrayBands[i]); location.href='ecra_personalizacao.html';};

        var div1 = document.createElement("div");
        var t1 = document.createTextNode(day);
        div1.appendChild(t1);
        div1.id = "day";
        document.getElementById("bands").appendChild(div1);

        div1.onclick = function() {selectBandPersonalize(arrayBands[i]); location.href='ecra_personalizacao.html';};

        var div2 = document.createElement("div");
        var t2 = document.createTextNode(time);
        div2.appendChild(t2);
        div2.id = "rest";
        document.getElementById("bands").appendChild(div2);

        div2.onclick = function() {selectBandPersonalize(arrayBands[i]); location.href='ecra_personalizacao.html';};


        var elem = document.createElement("img");
        elem.setAttribute("src", "arrow-point-to-right.png");
        elem.setAttribute("height", "15");
        elem.setAttribute("width", "15");
        elem.id = "seta";
        document.getElementById("bands").appendChild(elem);

        elem.onclick = function() {selectBandPersonalize(arrayBands[i]); location.href='ecra_personalizacao.html';};

        var div3 = document.createElement("div");
        var t3 = document.createTextNode(stage);
        div3.appendChild(t3);
        div3.id = "stage";
        document.getElementById("bands").appendChild(div3);
        div3.onclick = function() {selectBandPersonalize(arrayBands[i]); location.href='ecra_personalizacao.html';};

      }
    }  
  }

function selectScreen(bell) {
  if (bell == 'bell.png')
    location.assign("ecra_notificacoes_the_who.html");

  else if (bell == 'ybell.png') {
    location.assign("ecra_confirmacao_desativacao_cartaz.html");
  }
}

function loadAllFriendsData(friendsData) {
    localStorage.setItem("AllFriendsData", JSON.stringify(friendsData));
}

function selectFriendName(friendName) {
  localStorage.setItem("friendName", friendName);
}

function getFriendName() {
  var name = localStorage.getItem("friendName");
  return name;
}

var namesCont = 1;

function saveNamesCont() {
  sessionStorage.setItem("namesCont", JSON.stringify(namesCont));
}

var namesArray = [];

function saveNamesArray() {
  sessionStorage.setItem("namesArray", JSON.stringify(namesArray));
}

var namesArrayCont = 0;
function saveNamesArrayCont() {
  sessionStorage.setItem("namesArrayCont", JSON.stringify(namesArrayCont));
}


function pushName(friendName) {
    var namesArray = JSON.parse(sessionStorage.namesArray);
    var contador = JSON.parse(sessionStorage.namesArrayCont);
    if(friendName != null) {
      namesArray.push(friendName);
      sessionStorage.setItem("namesArray", JSON.stringify(namesArray));
      localStorage.setItem(getFriendName(),"1");
      contador++;
      sessionStorage.setItem("namesArrayCont", JSON.stringify(contador));
    }
}

function popName(friendName) {
  var namesArray = JSON.parse(sessionStorage.namesArray);
    var contador = JSON.parse(sessionStorage.namesArrayCont);
    for (let i = 0; i < namesArray.length; i++) {
      if(namesArray[i] == friendName) {
        localStorage.setItem(friendName,"0");
        localStorage.setItem(getTarget(friendName), "hidden");
        
        if(contador != 0) {
          contador--;
          sessionStorage.setItem("namesArrayCont", JSON.stringify(contador));
        }
      }
    }
}

function getColor(name) {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  for(let i = 0; i < friendsData.length; i++) {
    if (friendsData[i].name == name) {
      return friendsData[i].color;
    }
  }
}


function getImage(name) {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  for(let i = 0; i < friendsData.length; i++) {
    if (friendsData[i].name == name) {
      return friendsData[i].image;
    }
  }
}

function getTarget(name) {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  for(let i = 0; i < friendsData.length; i++) {
    if (friendsData[i].name == name) {
      return friendsData[i].target;
    }
  }
}

function getLocation(name) {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  for(let i = 0; i < friendsData.length; i++) {
    if (friendsData[i].name == name) {
      return friendsData[i].location;
    }
  }
}

function getId(name) {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  for(let i = 0; i < friendsData.length; i++) {
    if (friendsData[i].name == name) {
      return friendsData[i].ident;
    }
  }
}

function displayFriendsList() {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  var namesArray = JSON.parse(sessionStorage.namesArray);
  var contador = JSON.parse(sessionStorage.namesCont);
  var friendId = ["friend1","friend2","friend3","friend4","friend5","friend6","friend7","friend8"];

  var div = document.createElement("h2");
  var t = document.createTextNode(friendsData[0].name);
  div.appendChild(t);
  div.id = friendId[0];
  document.getElementById("friendsList").appendChild(div);
  document.getElementById(friendId[0]).style.display = "inline";

  div.onload = function() {this.onload=setSource(getColor("Eu")); this.src = setSource(getColor("Eu"));};
  div.onclick = function() {changeImage("Eu",getColor("Eu"),"Eu", getImage("Eu"));};
      
  var elem = document.createElement("img");
  elem.setAttribute("src", "Grey.png");
  elem.id = "Eu";

  document.getElementById("friendsList").appendChild(elem); 

  elem.style.height = '20px';
  elem.style.width = '20px';

  elem.onload = function() {this.onload=setSource(getColor("Eu")); this.src = setSource(getColor("Eu"));};
  elem.onclick = function() {changeImage("Eu",getColor("Eu"),"Eu", getImage("Eu"));};

  document.getElementById(elem.id).style.paddingTop = "10px";

    for(let i = 0; i < contador-1; i++) {
      if(localStorage.getItem(namesArray[i]) == "1") {

        var div = document.createElement("h2");
        var t = document.createTextNode(namesArray[i]);
        div.appendChild(t);
        div.id = friendId[i+1];
        document.getElementById("friendsList").appendChild(div);
        document.getElementById(friendId[i+1]).style.display = "inline";

        div.onload = function() {this.onload=setSource(getColor(namesArray[i])); this.src = setSource(getColor(namesArray[i]));};
        div.onclick = function() {changeImage(namesArray[i],getColor(namesArray[i]),namesArray[i], getImage(namesArray[i]));};
      
        var elem = document.createElement("img");
        elem.setAttribute("src", "Grey.png");
        elem.id = namesArray[i];
        document.getElementById("friendsList").appendChild(elem); 
        elem.style.height = '20px';
        elem.style.width = '20px';
        elem.onload = function() {this.onload=setSource(getColor(namesArray[i])); this.src = setSource(getColor(namesArray[i]));};
        elem.onclick = function() {changeImage(namesArray[i],getColor(namesArray[i]),namesArray[i], getImage(namesArray[i]));};
        document.getElementById(elem.id).style.paddingTop = "10px";
      }
    }
}

function displayFriendsMessageList() {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  var namesArray = JSON.parse(sessionStorage.namesArray);
  var contador = JSON.parse(sessionStorage.namesCont);
  var contador2 = JSON.parse(sessionStorage.namesArrayCont);
  var friendId = ["friend1","friend2","friend3","friend4","friend5","friend6","friend7","friend8"]

  if(contador2 == 0) {
    location.replace("ecra_no_friends.html");
  }

  else {
    for(let i = 0; i < namesArray.length; i++) {
      if(localStorage.getItem(namesArray[i]) == "1") {

        var div = document.createElement("h2");
        var t = document.createTextNode(namesArray[i]);
        div.appendChild(t);
        div.id = "friend"
        document.getElementById("friendsList").appendChild(div);
        div.onclick = function() {selectName(namesArray[i]), sessionStorage.setItem("friend", JSON.stringify(i+2)), location.assign('ecra_personalizacao_contacto.html')};

        var elem = document.createElement("img");
        elem.setAttribute("src", "arrow-point-to-right.png");
        elem.setAttribute("height", "13");
        elem.setAttribute("width", "13");
        elem.id = namesArray[i];
        document.getElementById("friendsList").appendChild(elem);
        elem.onclick = function() {selectName(namesArray[i]), sessionStorage.setItem("friend", JSON.stringify(i+2)), location.assign('ecra_personalizacao_contacto.html')};     
      }
    }
  }
}

function displayContacts() {
  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));
  var namesArray = JSON.parse(sessionStorage.namesArray);
  var contador = JSON.parse(sessionStorage.namesCont);
  var contador2 = JSON.parse(sessionStorage.namesArrayCont);
  var friendId = ["friend1","friend2","friend3","friend4","friend5","friend6","friend7","friend8"]

  if(contador2 == 0) {
    location.replace("ecra_no_friends.html");
  }

  else {
    for(let i = 0; i < namesArray.length; i++) {
      if(localStorage.getItem(namesArray[i]) == "1") {

        var div = document.createElement("h2");
        var t = document.createTextNode(namesArray[i]);
        div.appendChild(t);
        div.id = "friend"
        document.getElementById("friendsList").appendChild(div);
        div.onclick = function() {selectName(namesArray[i]),location.assign('ecra_chat.html')};

        var elem = document.createElement("img");
        elem.setAttribute("src", "arrow-point-to-right.png");
        elem.setAttribute("height", "13");
        elem.setAttribute("width", "13");
        elem.id = namesArray[i];
        document.getElementById("friendsList").appendChild(elem);
        elem.onclick = function() {selectName(namesArray[i]),location.assign('ecra_chat.html')}; 
      }
    }
  }
}

function loadMessages(messages) {
  localStorage.setItem("AllMessagesData", JSON.stringify(messages));
}

function selectName(name) {
  localStorage.setItem("selectedName", JSON.stringify(name));
}

var chat = [];

function initChatArray() {

  friendsData = JSON.parse(localStorage.getItem("AllFriendsData"));

  for(let i = 1; i < friendsData.length; i++) {
    var name = friendsData[i].name + "Chat";
    localStorage.setItem(name,JSON.stringify(chat));
  }
}

var messagesCont = 0;

function saveMessagesCont() {
  sessionStorage.setItem("messagesCont", JSON.stringify(messagesCont));
}

function chatRoom(message,name) {
  var arrayName = name+"Chat";
  var contador = JSON.parse(sessionStorage.messagesCont);
  var array = JSON.parse(localStorage.getItem(arrayName));
  array.push(message);
  contador++
  sessionStorage.setItem("messagesCont", JSON.stringify(contador)); 
  localStorage.setItem(arrayName,JSON.stringify(array));
}


function displayMessages() {
  messages = JSON.parse(localStorage.getItem("AllMessagesData"));
  var messageId = ["message1","message2","message3","message4","message5","message6","message7","message8"];
   for(let i = 0; i < messages.length; i++) {
    var div = document.createElement("h2");
    var t = document.createTextNode(messages[i]);
    div.appendChild(t);
    div.id = "mensagem"
    document.getElementById("messagesList").appendChild(div);

    
    div.onclick = function() {chatRoom(messages[i],JSON.parse(localStorage.getItem("selectedName"))); history.back();};

    var elem = document.createElement("img");
    elem.setAttribute("src", "right-arrow.png");
    elem.id = messageId[i];
    elem.style.height = '11px';
    elem.style.width = '11px';
    document.getElementById("messagesList").appendChild(elem); 
    elem.onclick = function() {chatRoom(messages[i],JSON.parse(localStorage.getItem("selectedName")));history.back();};

  }
}

function initHidden() {
  localStorage.setItem('targetA', "hidden");
  localStorage.setItem('targetB', "hidden");
  localStorage.setItem('targetC', "hidden");
  localStorage.setItem('targetD', "hidden");
  localStorage.setItem('targetE', "hidden");
  localStorage.setItem('targetF', "hidden");
  localStorage.setItem('targetG', "hidden");
  localStorage.setItem('targetH', "hidden");

  localStorage.setItem('colorA',"Grey.png");
  localStorage.setItem('colorB',"Grey.png");
  localStorage.setItem('colorC',"Grey.png");
  localStorage.setItem('colorD',"Grey.png");
  localStorage.setItem('colorE',"Grey.png");
  localStorage.setItem('colorF',"Grey.png");
  localStorage.setItem('colorG',"Grey.png");
  localStorage.setItem('colorH',"Grey.png");
}

function initAlarm() {
  sessionStorage.setItem('The WhoC', "bell.png");
  sessionStorage.setItem('QueenC', "bell.png");
  sessionStorage.setItem('Pearl JamC', "bell.png");
  sessionStorage.setItem('BeatlesC', "bell.png");
  sessionStorage.setItem('GelpiC', "bell.png");
  sessionStorage.setItem('PeachesC', "bell.png");
  sessionStorage.setItem('ArmyC', "bell.png");
  sessionStorage.setItem('BlossomsC', "bell.png");
  sessionStorage.setItem('RoyalsC', "bell.png");
  sessionStorage.setItem('BonoboC', "bell.png");
  sessionStorage.setItem('KitC', "bell.png");
  sessionStorage.setItem('AviciC', "bell.png");
  sessionStorage.setItem('FaustoC', "bell.png");
  sessionStorage.setItem('The XXC', "bell.png");
  sessionStorage.setItem('BastosC', "bell.png");
  sessionStorage.setItem('BatidaC', "bell.png");
  sessionStorage.setItem('DreshC', "bell.png");
  sessionStorage.setItem('The CultC', "bell.png");
  sessionStorage.setItem('The KillsC', "bell.png");
  sessionStorage.setItem('U2C', "bell.png");
  sessionStorage.setItem('RiotC', "bell.png");
  sessionStorage.setItem('KISSC', "bell.png");
  sessionStorage.setItem('XPTOC', "bell.png");
  sessionStorage.setItem('IZEMC', "bell.png");
  sessionStorage.setItem('LotC', "bell.png");
  sessionStorage.setItem('BispoC', "bell.png");
  sessionStorage.setItem('WackC', "bell.png");
  sessionStorage.setItem('PistaC', "bell.png");
  sessionStorage.setItem('ShoesC', "bell.png");
  sessionStorage.setItem('SleepC', "bell.png");
  sessionStorage.setItem('AnitaC', "bell.png");
  sessionStorage.setItem('HeartC', "bell.png");
  sessionStorage.setItem('HoleC', "bell.png");
  sessionStorage.setItem('Sum 41C', "bell.png");
  sessionStorage.setItem('AC/DCC', "bell.png");
  sessionStorage.setItem('MuseC', "bell.png");
  sessionStorage.setItem('McFlyC', "bell.png");
  sessionStorage.setItem('StingC', "bell.png");
  sessionStorage.setItem('KornC', "bell.png");
  sessionStorage.setItem('SlashC', "bell.png");
  sessionStorage.setItem('AgirC', "bell.png");
  sessionStorage.setItem('TigaC', "bell.png");
  sessionStorage.setItem('KikaC', "bell.png");
  sessionStorage.setItem('LordeC', "bell.png");
  sessionStorage.setItem('PrimusC', "bell.png");
  sessionStorage.setItem('SaltoC', "bell.png");
  sessionStorage.setItem('R.E.MC', "bell.png");
  sessionStorage.setItem('CarlãoC', "bell.png");
  sessionStorage.setItem('FergieC', "bell.png");
  sessionStorage.setItem('DracoC', "bell.png");
  sessionStorage.setItem('DzrtC', "bell.png");
  sessionStorage.setItem('PrimusC', "bell.png");  
}

function clear() {
  localStorage.removeItem("indexCerto");
  localStorage.removeItem("frame");
  localStorage.removeItem("ecraAnterior");
  localStorage.removeItem("bandName");
  localStorage.removeItem("personalizeBand");
  localStorage.removeItem("user");
  localStorage.removeItem("check");
  
  localStorage.removeItem("colorA");
  localStorage.removeItem("colorB");
  localStorage.removeItem("colorC");
  localStorage.removeItem("colorD");
  localStorage.removeItem("colorE");
  localStorage.removeItem("colorF");
  localStorage.removeItem("colorG");
  localStorage.removeItem("colorH");
  localStorage.removeItem("targetA");
  localStorage.removeItem("targetB");
  localStorage.removeItem("targetC");
  localStorage.removeItem("targetD");
  localStorage.removeItem("targetE");
  localStorage.removeItem("targetF");
  localStorage.removeItem("targetG");
  localStorage.removeItem("targetH");

  localStorage.removeItem("The Who");
  localStorage.removeItem("Queen");
  localStorage.removeItem("Pearl Jam");
  localStorage.removeItem("Beatles");
  localStorage.removeItem("Gelpi");
  localStorage.removeItem("Peaches");
  localStorage.removeItem("Army");
  localStorage.removeItem("Blossoms");
  localStorage.removeItem("Royals");
  localStorage.removeItem("Bonobo");
  localStorage.removeItem("Kit");
  localStorage.removeItem("Avici");
  localStorage.removeItem("Fausto");
  localStorage.removeItem("The XX");
  localStorage.removeItem("Bastos");
  localStorage.removeItem("Batida");
  localStorage.removeItem("Dresh");
  localStorage.removeItem("The Cult");
  localStorage.removeItem("The Kills");
  localStorage.removeItem("U2");
  localStorage.removeItem("Riot");
  localStorage.removeItem("KISS");
  localStorage.removeItem("XPTO");
  localStorage.removeItem("IZEM");
  localStorage.removeItem("Lot");
  localStorage.removeItem("Bispo");
  localStorage.removeItem("Wack");
  localStorage.removeItem("Pista");
  localStorage.removeItem("Shoes");
  localStorage.removeItem("Sleep");
  localStorage.removeItem("Anita");
  localStorage.removeItem("Heart");
  localStorage.removeItem("Hole");
  localStorage.removeItem("Sum 41");
  localStorage.removeItem("AC/DC");
  localStorage.removeItem("Muse");
  localStorage.removeItem("McFly");
  localStorage.removeItem("Sting");
  localStorage.removeItem("Korn");
  localStorage.removeItem("Slash");
  localStorage.removeItem("Agir");
  localStorage.removeItem("Tiga");
  localStorage.removeItem("Kika");
  localStorage.removeItem("Lorde");
  localStorage.removeItem("Primus");
  localStorage.removeItem("Salto");
  localStorage.removeItem("R.E.M");
  localStorage.removeItem("Carlão");
  localStorage.removeItem("Fergie");
  localStorage.removeItem("Draco");
  localStorage.removeItem("Dzrt");
  localStorage.removeItem("Primus");

  localStorage.removeItem("Eat it");
  localStorage.removeItem("Joshua");
  localStorage.removeItem("O Paiva");
  localStorage.removeItem("Rock Bar");
  localStorage.removeItem("Jazz Place");
  localStorage.removeItem("Platina Bar");
  localStorage.removeItem("rouloteName");

  localStorage.removeItem("Eat ItSenha");
  localStorage.removeItem("JoshuaSenha");
  localStorage.removeItem("O PaivaSenha");
  localStorage.removeItem("Rock BarSenha");
  localStorage.removeItem("Jazz PlaceSenha");
  localStorage.removeItem("Platina BarSenha");
}

function selectRestaurate(rouloteName) {
  localStorage.setItem("rouloteName", rouloteName);
}

function initRestaurantsTickets() {
  sessionStorage.setItem('Eat itC', "ticket.png");
  sessionStorage.setItem('JoshuaC', "ticket.png");
  sessionStorage.setItem('O PaivaC', "ticket.png");
  sessionStorage.setItem('Rock BarC', "ticket.png");
  sessionStorage.setItem('Jazz PlaceC', "ticket.png");
  sessionStorage.setItem('Platina BarC', "ticket.png");
}

function selectRestaurantScreen(restaurant) {
  if (restaurant  == 'ticket.png')
    location.assign("ecra_no_senha.html");

  else if (restaurant == 'ticketYellow.png')
    location.assign('ecra_confirmacao_remocao_senha.html');
}

var restaurantsArray = [];
var countRestairantes = 0; 

function saveRestaurantArray() {
  sessionStorage.setItem("arrayRestaurants", JSON.stringify(restaurantsArray));
}

function pushRestaurante(restaurant) {
    var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);

    if(restaurant != null) {
      arrayRestaurants.push(restaurant);
      
      if(restaurant == 'Eat it') {
        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(10) >= 100)
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 5);
        
        localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(10));
      }
      
      else if( restaurant == 'Joshua') {
        
        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(20) >= 100)
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 9);

      	localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(20));
      }

      else if(restaurant == 'O Paiva') {

        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(21) >= 100)
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 7);  

      	localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(21));
      }

       else if(restaurant == 'Rock Bar') {

        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(14) >= 100) {
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 14);  
        }

      	localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(14));
      }

      else if(restaurant == 'Jazz Place') {

        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(25) >= 100) {
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 10);  
        }

      	localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(25));
      }


      else if(restaurant == 'Platina Bar') {

        if( JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(31) >= 100) {
          localStorage.setItem(localStorage.getItem('rouloteName') + 'Senha', 24);  
        }

      	localStorage.setItem(restaurant, JSON.parse(localStorage.getItem(localStorage.getItem('rouloteName') + 'Senha'))+(31));
      }

      sessionStorage.setItem(restaurant +'C', "ticketYellow.png");

      sessionStorage.setItem("arrayRestaurants", JSON.stringify(arrayRestaurants));
      location.assign("ecra_senha_sucesso.html");
    }
  }


  function popRestaurante(restaurant) {
    var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);
    for (let i = 0; i < arrayRestaurants.length; i++) {
      if(arrayRestaurants[i] == restaurant) {
        arrayRestaurants[i] = null;
        sessionStorage.setItem(restaurant+'C', "ticket.png");
        sessionStorage.setItem("arrayRestaurants", JSON.stringify(arrayRestaurants));
        localStorage.removeItem(restaurant);
      }
    }
  }

function noSenhas() {
	var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);
	var contador = 0;
	for (let i = 0; i < arrayRestaurants.length; i++) {
	  if(arrayRestaurants[i] != null ) {
	    contador++;
	  }
	}

	if(contador == 0) {
	  location.assign("ecra_no_senhas.html");
	}
	else {
	  location.assign("ecra_senhas.html");
	}
}

function noSenhas2() {
    var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);
    var contador = 0;
    for (let i = 0; i < arrayRestaurants.length; i++) {
      if(arrayRestaurants[i] != null ) {
        contador++;
        sessionStorage.setItem("cont", JSON.stringify(contador));
      }
    }

    if(contador == 0) {
      location.replace("ecra_no_senhas.html");
    }
}

function noSenhas3() {
    var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);
    var contador = 0;
    for (let i = 0; i < arrayRestaurants.length; i++) {
      if(arrayRestaurants[i] != null ) {
        contador++;
        sessionStorage.setItem("cont", JSON.stringify(contador));
      }
    }

    if(contador == 0) {
      location.replace("ecra_no_senhas.html");
    }

    else {
      location.replace("ecra_senhas.html");
    }

}


function displaySenhas() {
  var arrayRestaurants = JSON.parse(sessionStorage.arrayRestaurants);

     for (let i = 0; i < arrayRestaurants.length; i++) {

      if(arrayRestaurants[i] != null) {
        
        var div = document.createElement("div");
        var t = document.createTextNode(arrayRestaurants[i]);
        div.appendChild(t);
        div.id = "band";
        document.getElementById("bands").appendChild(div);

        div.onclick = function() {};


        var div3 = document.createElement("div");
        var t3 = document.createTextNode('Senha: ' + localStorage.getItem(arrayRestaurants[i] + 'Senha'));
        var contador = localStorage.getItem(arrayRestaurants[i] + 'Senha');
        contador++;
        localStorage.setItem(arrayRestaurants[i] + 'Senha', contador);
        div3.appendChild(t3);
        div3.id = "rest";
        document.getElementById("bands").appendChild(div3);

        div3.onclick = function() {};

        var elem = document.createElement("img");
        elem.setAttribute("src", "x.png");
        elem.setAttribute("height", "13");
        elem.setAttribute("width", "13");
        elem.id = "seta";
        document.getElementById("bands").appendChild(elem);

        elem.onclick = function() {localStorage.setItem('removeSenha',arrayRestaurants[i]); location.assign('ecra_confirmacao_remocao_menu_senha.html');};

        var div1 = document.createElement("div");
        var t1 = document.createTextNode('Sua Senha: ' + localStorage.getItem(arrayRestaurants[i]));
        div1.appendChild(t1);
        div1.id = "stage";
        document.getElementById("bands").appendChild(div1);

        div1.onclick = function() {};
      }
    }  
}

function saveRestaurantesData(data) {
	localStorage.setItem("restaurantData",JSON.stringify(data));
}

var contadorEatIt = 5;
var contadorJoshua = 9;
var contadorPaiva = 7;
var contadorRockBar = 14;
var contadorJazzPlace = 10;
var contadorPlatinaBar = 24;

function saveRestauranteContador() {
	localStorage.setItem("Eat itSenha", JSON.stringify(contadorEatIt));
	localStorage.setItem("JoshuaSenha", JSON.stringify(contadorJoshua));
	localStorage.setItem("O PaivaSenha", JSON.stringify(contadorPaiva));
	localStorage.setItem("Rock BarSenha", JSON.stringify(contadorRockBar));
	localStorage.setItem("Jazz PlaceSenha", JSON.stringify(contadorJazzPlace));
	localStorage.setItem("Platina BarSenha", JSON.stringify(contadorPlatinaBar));
}

var countFilas = 0; 

function saveContFilas() {
  sessionStorage.setItem("countFila", JSON.stringify(countFilas));
}


function senhaAlert() {
  if(JSON.parse(localStorage.getItem("Eat it")) != null) {
    if(JSON.parse(localStorage.getItem("Eat it")) <= JSON.parse(localStorage.getItem("Eat it" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","Eat it");
      location.assign('ecra_sua_vez.html');
      popRestaurante('Eat it');
    }
  }

  if(JSON.parse(localStorage.getItem("Joshua")) != null) {
    if(JSON.parse(localStorage.getItem("Joshua")) <= JSON.parse(localStorage.getItem("Joshua" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","Joshua");
      location.assign('ecra_sua_vez.html');
      popRestaurante('Joshua');
    }
  }

  if(JSON.parse(localStorage.getItem("O Paiva")) != null) {
    if(JSON.parse(localStorage.getItem("O Paiva")) <= JSON.parse(localStorage.getItem("O Paiva" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","O Paiva");
      location.assign('ecra_sua_vez.html');
      popRestaurante('O Paiva');
    }
  }

  if(JSON.parse(localStorage.getItem("Rock Bar")) != null) {
    if(JSON.parse(localStorage.getItem("Rock Bar")) <= JSON.parse(localStorage.getItem("Rock Bar" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","Rock Bar");
      location.assign('ecra_sua_vez.html');
      popRestaurante('Rock Bar');
    }
  }

  if(JSON.parse(localStorage.getItem("Jazz Place")) != null) {
    if(JSON.parse(localStorage.getItem("Jazz Place")) <= JSON.parse(localStorage.getItem("Jazz Place" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","Jazz Place");
      location.assign('ecra_sua_vez.html');
      popRestaurante('Jazz Place');
    }
  }

  if(JSON.parse(localStorage.getItem("Platina Bar")) != null) { 
    if(JSON.parse(localStorage.getItem("Platina Bar")) <= JSON.parse(localStorage.getItem("Platina Bar" + "Senha"))-2) {
      localStorage.setItem("alertaSenha","Platina Bar");
      location.assign('ecra_sua_vez.html');
      popRestaurante('Platina Bar');
    }
  }
}

var contadorEatIt = 5;
var contadorJoshua = 9;
var contadorPaiva = 7;
var contadorRockBar = 14;
var contadorJazzPlace = 10;
var contadorPlatinaBar = 24;

function addSenha() {


  var contador = localStorage.getItem('Eat itSenha');
  if(contador >= 100) {
    contador = 5;
  }
  contador++;
  localStorage.setItem('Eat itSenha', contador);
  

  var contador = localStorage.getItem('JoshuaSenha');
  if(contador >= 100) {
    contador = 9;
  }
  contador++;
  localStorage.setItem('JoshuaSenha', contador);
  

  var contador = localStorage.getItem('O PaivaSenha');
  if(contador >= 100) {
    contador = 7;
  }
  contador++;
  localStorage.setItem('O PaivaSenha', contador);
  

  var contador = localStorage.getItem('Rock BarSenha');
  if(contador >= 100) {
    contador = 14;
  }
  contador++;
  localStorage.setItem('Rock BarSenha', contador);
  

  var contador = localStorage.getItem('Jazz PlaceSenha');
  if(contador >= 100) {
    contador = 10;
  }
  contador++;
  localStorage.setItem('Jazz PlaceSenha', contador);
  

  var contador = localStorage.getItem('Platina BarSenha');
  if(contador >= 100) {
    contador = 24;
  }
  contador++;
  localStorage.setItem('Platina BarSenha', contador);
  
}

function senhaFlag(flag) {
  localStorage.setItem("senhasFlag",flag);
}
