// add a burger
$('body').on('click', '.submit', function () {
  event.preventDefault();
  
  let newBurger = $('.burger_name').val().trim();

  $.ajax('api/burgers', {
    type: 'POST',
    data: {
      burger_name: newBurger
    }
  }).then(() => location.reload());
});

// devour a burger
$('body').on('click', '.devour', function () {
  event.preventDefault();

  // get burger id
  let id = $(this).data('id');

  $.ajax(`api/burgers/${id}`, {
    type: 'PUT',
    data: {
      id: id
    }
  }).then(() => location.reload());

});