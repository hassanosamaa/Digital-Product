import $ from 'jquery';

export const sec3 = () => {
    
    $(".sec3card").click(function(){
        $(".sec3card").removeClass('activeSec3');
        $(this).addClass('activeSec3');
      });
    

}