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
    }
  });
  const amenitiesList = [];
  const amenitiesNames = [];
  $('input.a').change(function () {
    if ($(this).prop('checked')) {
      amenitiesList.push($(this).data('id'));
      amenitiesNames.push($(this).data('name'));
      $('DIV.amenities h4').text(amenitiesNames.join(', '));
    } else {
      const ind = amenitiesList.indexOf($(this).data('id'));
      amenitiesList.splice(ind, 1);
      $('DIV.amenities h4').text(amenitiesNames.join(', '));
    }
  });
  const statesList = [];
  const statesCityNames = [];
  $('input.s').change(function () {
    if ($(this).prop('checked')) {
      statesList.push($(this).data('id'));
      statesCityNames.push($(this).data('name'));
      $('DIV.locations h4').text(statesCityNames.join(', '));
    } else {
      const ind = statesList.indexOf($(this).data('id'));
      statesList.splice(ind, 1);
      $('DIV.locations h4').text(statesCityNames.join(', '));
    }
  });
  const citiesList = [];
  $('input.c').change(function () {
    if ($(this).prop('checked')) {
      citiesList.push($(this).data('id'));
      statesCityNames.push($(this).data('name'));
      $('DIV.locations h4').text(statesCityNames.join(', '));
    } else {
      const ind = citiesList.indexOf($(this).data('id'));
      const indName = statesCityList.indexOf($(this).data('name'));
      citiesList = citiesList.splice(ind, 1);
      statesCityNames = statesCityNames.splice(indName, 1);
      $('DIV.locations h4').text(statesCityNames.join(', ') + citiesList.join('// '));
    }
  });
  $('button').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({ amenities: amenitiesList, cities: citiesList, states: statesList }),
      type: 'POST',
      contentType: 'application/json',
      success: function (responses) {
        for (const response of responses) {
          const h2Item = $('<h2></h2>').text(response.name);

          const divPrice = $('<div></div>').addClass('price_by_night').text(response.price_by_night);

          const divTitle = $('<div></div>').addClass('title_box').append(h2Item).append(divPrice);

          const divGuest = $('<div></div>').addClass('max_guest').text(response.price_by_night);
          const divRooms = $('<div></div>').addClass('number_rooms').text(response.number_rooms);
          const divBath = $('<div></div>').addClass('number_bathrooms').text(response.number_bathrooms);

          const divInfo = $('<div></div>').addClass('information').append(divGuest).append(divRooms).append(divBath);

          const divUser = $('<div></div>').addClass('user');

          const divDesc = $('<div></div>').addClass('description').text(response.description);

          const art = $('<article></article>').append(divTitle).append(divInfo).append(divUser).append(divDesc);
          $('section.places').html(art);
        }
      }
    });
  });
});
