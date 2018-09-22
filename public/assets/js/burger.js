// add a burger
$('body').on('click', '.submit', function () {
  event.preventDefault();
  
  let newBurger = {
    burger_name: $('#burger').text().trim()
  };

  $.ajax('api/burger', {
    type: 'POST',
    data: newBurger
  }).then(() => location.reload());
});

// devour a burger
$('body').on('click', '.devour', function () {
  event.preventDefault();

  // get burger id
  let id = $(this).data('id');

  $.ajax(`api/burger/${id}`, {
    type: 'PUT',
    data: {
      id: id
    }
  }).then(() => location.reload());

});