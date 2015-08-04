$(document).ready(function() {
    twitterCheck = setInterval(function() {
        var twitterFrame = $("#twitter-widget-0");
        var twitterTimeline = twitterFrame.contents().find(".timeline");
        var twitterStream = twitterFrame.contents().find(".stream");
        if(twitterFrame.length && twitterTimeline.length && twitterStream.length) {
            twitterTimeline.attr("style","max-width:100% !important; height:100%;");
            twitterFrame.attr("style","max-width:100% !important; width: 100% !important;");
            twitterStream.attr("style","max-height:100% !important; height: 100% !important;");
            clearInterval(twitterCheck);
        }
    }, 10);
});