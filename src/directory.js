function loadMaps(){

buttons.innerHTML = `<button  id="mapbutton" onclick="mapbutton()" class="text-rose-800 text-xl hover:text-white
  border-rose-800  hover:bg-rose-900 transition ease-in-out border-2
  w-1/3 max-w-[13rem] h-14 mr-5 rounded-lg">Maps</button>

 <button  id="modbutton" onclick="modbutton()" class="text-rose-800 text-xl hover:text-white
  border-rose-800  hover:bg-rose-900 transition ease-in-out border-2
  w-1/3 max-w-[13rem] h-14 ml-5 rounded-lg">Mods</button>`


fetch("/fastdl/zips").then(function(response) {
  response.text().then(function(text) {
    indexPage = document.createElement('html');
    indexPage.innerHTML = text;
    var indexItems = indexPage.getElementsByTagName('a');

    mapList = document.getElementById("mapslist");
    for (i = 1; i < indexItems.length; i++){

      if (indexItems[i].innerHTML.includes("^1")){
        continue;
      };

      if (i == 16){
        mapList.innerHTML += '<a id="noddlesbutton" onclick="noddlesButton()" href="#" class="mapbutton hover:bg-neutral-200">my_nudes</a>';
      };

      indexName = indexItems[i].innerHTML.replace(".zip", "")
      indexHref = indexItems[i].href.split("/")
      mapList.innerHTML += '<a class="mapbutton hover:bg-neutral-200" href=/fastdl/zips/' + indexHref[indexHref.length - 1] + ">" + indexName + '</a>';
    };
  });
});
}