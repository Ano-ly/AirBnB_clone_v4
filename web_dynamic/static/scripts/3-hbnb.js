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
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify({}),
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
        $('section.places').append(art);
      }
    }
  });
});
