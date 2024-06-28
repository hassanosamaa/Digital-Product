import $ from 'jquery';

export const nav = () => {
    
    $(".navlink").click(function(){
        $(".navlink").removeClass('activenav');
        $(this).addClass('activenav');
      });
    

}