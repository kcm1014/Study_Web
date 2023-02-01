$(document).ready(function(){
    let $selectMenuItem = null;

    $("#tabMenu1 li").click(function(){
        if($selectMenuItem != null){
            $selectMenuItem.removeClass("select");
        }

        $selectMenuItem = $(this);
        $selectMenuItem.addClass("select");
    });
});