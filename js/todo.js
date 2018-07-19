$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }


        $("#button").click(function(){
            $("ol").append("<li ><input type='checkbox' class=''>"+$(".input-text").val()+"</li>");
            $("#ListItem").val("");
        })


        $('input').focus(function () {
            $(this).val('');
        });;
        $(document).on("dblclick", "li", function () {
                 const li = $(this);
            $(this).attr("contentEditable",true);
            $(this).keypress(function (event) {
                         if(event.which===13){
                                 li.attr("contentEditable",false);
                             }
                     })
             });

        $(document).on('click','input[type=checkbox]',function(){
            $(this).parent()
                .toggleClass('checked');
        })

        $("a[data-filter='active']").click(function(){
                 $("a[class='selected']").removeClass("selected");
                 $(this).addClass("selected");
                 $("ol>li:not(.checked)").css("display","");
                 $(".checked").css("display","none");
               })


           $("a[data-filter='all']").click(function(){
                 $("a[class='selected']").removeClass("selected");
                 $(this).addClass("selected");
                 $("li").css("display","");
               })



             $("a[data-filter='complete']").click(function(){
                   $("a[class='selected']").removeClass("selected");
                   $(this).addClass("selected");
                   $(".checked").css("display","");
                   $("ol>li:not(.checked)").css("display","none");
                 })


    });