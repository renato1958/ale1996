$(function() {
    if(/iphone/i.test(navigator.userAgent))
	{
        $("div#italia p").text("Fai tap per entrare");
	    $("div#germania p").text("Tap um einzugehen");
		
		$("div#italia, div#germania").click(function() {
		    window.location = $(this).find("a").attr("href");
			return false;
		});
	}
});