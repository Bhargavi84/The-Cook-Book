
  $(document).ready(function(){
      $('.sidenav').sidenav({edge:"right"});
      $('.collapsible').collapsible();
      $('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));
      $('select').formSelect();
    
  });