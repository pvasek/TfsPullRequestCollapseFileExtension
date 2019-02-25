var count = 0;

var handle = setInterval(function() {

    function hookupCollapseExpand(item) {
        var icon = item.getElementsByClassName("file-icon")[0];
        var content = item.getElementsByClassName("item-details")[0];
        icon.addEventListener("click", e => {
            content.hidden = !content.hidden;
            e.preventDefault();
        });
        icon.style["cursor"] = "pointer";
    };


    const items = document.getElementsByClassName("file-container");
    for (var i of items) {
        if (handle) {
            clearInterval(handle);
            handle = null;
        }
        hookupCollapseExpand(i);
    }    

    if (count > 100) {
        // it takes too long, stop trying, maybe we are on the wrong page
        clearInterval(handle);
        handle = null;
    }

    count++;
}, 100);
