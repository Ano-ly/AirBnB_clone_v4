$(document).ready(function () {
  const amenitiesList = [];
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
