import $ from 'jquery';

export const sec6 = () => {
    
    $(".sec6card").click(function(){
        $(".sec6card").removeClass('activeSec6');
        $(this).addClass('activeSec6');
      });
    

}