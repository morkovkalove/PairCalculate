
$('#select').change(function() {
  console.log($(this).val());


  // $('main').children('input').each(function(index){
  //   $(this).val('');
  //   console.log(index);
  // });

  $('#' + $(this).val()).attr('hidden', false);
  if($(this).val() == 'one') {
    $('#two').attr('hidden', true);
  }
  else if($(this).val() == 'two') {
    $('#one').attr('hidden', true);
  }

  else if($(this).val() == 'option') {
    $('#one').attr('hidden', true);
    $('#two').attr('hidden', true);
  }

});

