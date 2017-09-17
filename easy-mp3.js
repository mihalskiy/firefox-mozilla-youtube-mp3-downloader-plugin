mytmp3_btn_onclick = function (){
  var path ='http://www.easy-youtube-mp3.com/convert.php?v='+encodeURIComponent(window.location); 
  window.open(path,'_blank');
};

getSpan = function(text, className) {
    var _tn = document.createTextNode(text);
    var span = document.createElement("span");
    span.className  = className;
    span.appendChild(_tn);
    return span;
};

createButton = function() {
    var obj = document.querySelector('#main>#info');
    if(obj != null){
        // check if the button has already been created
        var btnRow = document.getElementById('easyMp3');
        if(btnRow == null) {
            var easyMp3 = document.createElement("div");
            easyMp3.id  = "easyMp3";
            easyMp3.className  = "style-scope ytd-watch";

            var mytmp3_btn = document.createElement("div");
            mytmp3_btn.className  = "style-scope mytmp3_btn";

            mytmp3_btn.appendChild(getSpan("Easy YouTube mp3 - DOWNLOAD", ""))
            
            mytmp3_btn.onclick = mytmp3_btn_onclick;

            obj.parentNode.insertBefore(easyMp3, obj);
            easyMp3.appendChild(mytmp3_btn);
        }
    }
};

// yt does make use of some bogus AJAX functionality which breaks pagemod
// we have to check in intervals if the document has been replaced by yt to
// recreate the button if needed.
var intervalCheck = setInterval(function(){ createButton() }, 250);

/*

<div id="messages" class="style-scope ytd-watch" style="width: var(--flex640-mode-player-width);">
  <div class="mytmp3_btn"><span class="mytmp3_bcode_a">MP3</span><span class="mytmp3_bcode_b"> &amp; </span><span class="">MP4</span><span class=""> - DOWNLOAD</span></div>
</div>
*/