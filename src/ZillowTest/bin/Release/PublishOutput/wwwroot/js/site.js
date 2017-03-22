  
$(function () { 
    $("#ButtonSearch").click(function (e) {
        e.preventDefault(); 
        var href = "/Home/SearchResult?street=" + encodeURIComponent($("#Street").val()) + "&city=" + $("#City").val() + "&State=" + $("select#selectStateSpan option:checked").val() + "&Zipcode=" + $("#Zipcode").val();
        $("a").attr("href", href);
        $('#' + $(this).data("target")).load($(this).attr("href")); 
    });
});

