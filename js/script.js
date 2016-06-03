$(document).ready(function(){
    $(".header__navWrapper").hover(function(){
        $(".header__mainNav").css("margin-top","0");
        $(".header__mainNav").css("transition","ease-in-out .15s");
        $(".header__arrow").css("top","7.6rem");
        $(".header__arrow").css("transition","ease-in-out .15s");
    },
    function resetNav() {
        $(".header__mainNav").css("margin-top","-5.6rem");
        $(".header__arrow").css("top","2rem");
    });

    $(".header-project__navWrapper").hover(function(){
        $(".header-project__mainNav").css("margin-top","0");
        $(".header-project__mainNav").css("transition","ease-in-out .15s");
        $(".header-project__arrow").css("top","7.6rem");
        $(".header-project__arrow").css("transition","ease-in-out .15s");
    },
    function resetNav() {
        $(".header-project__mainNav").css("margin-top","-5.6rem");
        $(".header-project__arrow").css("top","2rem");
    });

});
