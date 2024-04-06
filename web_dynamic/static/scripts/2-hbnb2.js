$(document).ready(function () {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (response) {
      $('div#api_status').addClass('available');
      if (response.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').addClass('available');
      }
    },
    error: function (err, errStr) {
      $('DIV.amenities h4').text(errStr);
      console.log(errStr);
    }
  })
  const amenitiesList = [];
  console.log("hjjbhibkbubi");
  const amenitiesNames = [];
  $('input').change(function () {
    if ($(this).prop('checked') || $(this).attr('checked')) {
      amenitiesList.push($(this).data('id'));
      amenitiesNames.push($(this).data('name'));
      $('DIV.amenities h4').text(amenitiesNames.join(', '));
    } else {
      const ind = amenitiesList.indexOf($(this).data('id'));
      amenitiesList.splice(ind, 1);
    }
  });
});
