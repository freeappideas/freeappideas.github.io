$(document).ready(function() {
    twitterCheck = setInterval(function() {
        var twitterFrame = $("#twitter-widget-0");
        var twitterTimeline = twitterFrame.contents().find(".timeline");
        if(twitterFrame.length && twitterTimeline.length) {
            twitterTimeline.attr("style","max-width:100% !important; height:100%;");
            twitterFrame.attr("style","max-width:100% !important; width: 100% !important;");
            clearInterval(twitterCheck);
        }
    }, 10);
});