console.log('js');

$(onReady);

function onReady() {
  console.log('jq');

  const h1 = $('h1');
  console.log(h1);
  const h2 = $('h2');
  console.log(h2);

  $(h1).addClass('froggy');
  h2.addClass('froggy');
  h2.removeClass('froggy');
  h2.addClass('froggy');

  const h1Text = $('h1').text();
  console.log('h1Text is', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!!';
  $('h1').text(louderText);

  $('#submit-button').on('click', whenIAddAHarmonica);
  $('#delete-button').on('click', deleteMe);
  $(document).on('click', '.delete-button', deleteMe);

  function whenIAddAHarmonica(event) {
    event.preventDefault();
    console.log('clicked the button');
    let brand = $('#brand').val();
    console.log(brand);
    $('#harmonicas').append(
      `<li class="harmonica-item">${brand} <button class="delete-button">Delete Me</button></li>`
    );
    $('#brand').val('');
  }

  function deleteMe() {
    console.log('Delete me!');
    $(this).parent().remove();
  }
}
