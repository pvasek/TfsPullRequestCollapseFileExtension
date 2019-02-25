var count = 0;
var css = ".file-icon { cursor: pointer }";

function fileIconClick(e) {
    console.log("file-icon click");
    var content = e.target.parentNode.parentNode.getElementsByClassName("item-details")[0];
    content.hidden = !content.hidden;
    e.preventDefault();
};

var handle = setInterval(function() {

    const container = document.getElementsByClassName("files-container")[0];
    if (container) {
        clearInterval(handle);
        handle = null;

        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        
        console.log("files-container found, adding click listener");
        container.addEventListener("click", function(e) {
            console.log("click", e);
            if (e.target.classList.contains("file-icon")) {
                fileIconClick(e);
            }
        });
    }
}, 200);
