var timelineString = "";
var facetStrings = [];
$("#facets").append("<textarea id='export'></textarea><button id='exportButton'>Export</button><button id='clearButton'>Clear</button>");
$(".title").click(function() {
    //var htmlString = $(this).parents('.bar').html();
    //var valString = $("textarea#export").text();
    //valString += "<div class=\"bar\">" + htmlString + "</div>";
    //$("textarea#export").text(valString);
    facetStrings.push($(this).parents('.bar').html());
    $(this).parents('.bar').find('.title').css("background-color", "yellow");
});
$("#timeline > .rep").click(function() {
    //var htmlString = $(this).html();
    //var valString = $("textarea#export").text();
    //valString += htmlString;
    //$("textarea#export").text(valString);
    timelineString = $(this).html();
    $(this).css("background-color", "yellow");
	var svgW = $(this).find("svg").attr("width");
	var svgH = $(this).find("svg").attr("height");
	var attrRE = "height=\"" + svgH + "\" width=\"" + svgW + "\"";
	console.log(attrRE);
	var attrStart = timelineString.search(attrRE);
	if (attrStart != -1) {	
		var replacementString = "viewbox=\"0 0 " + svgW + " " + svgH + "\"";
		timelineString = timelineString.substring(0, attrStart) + replacementString + timelineString.substring(attrStart + attrRE.length);
	}
});
$("#exportButton").click(function() {
    //var valString = $("textarea#export").text();
    var fullUrl = window.location.href;
    var utfRE = "&utf8=";
    var suffixStart = fullUrl.search(utfRE);
    var urlSuffix = "";
    var urlBase = "";
    if (suffixStart != -1) { 
        urlSuffix = fullUrl.substring(suffixStart);
        urlBase = fullUrl.substring(0, suffixStart);
    }
    else {
        urlBase = fullUrl;
    }
    console.log("urlBase: " + urlBase);
    console.log("urlSuffix: " + urlSuffix);
    //valString = "<div class=\"facets\" baseurl=\"" + urlBase + "\" suffixurl=\"" + urlSuffix + "\">" + valString + "</div>";
    var valString = "<div class=\"embed\" baseurl=\"" + urlBase + "\" suffixurl=\"" + urlSuffix + "\"><div class=\"timeline\">" + timelineString + "</div>" + "<div class=\"facets\">";
    for (var i = 0; i < facetStrings.length; i++) {
    	valString = valString + facetStrings[i];
    }
    valString = valString + "</div></div>";
    $("textarea#export").text(valString);
    
});
$("#clearButton").click(function() {
    $("textarea#export").text("");
});
