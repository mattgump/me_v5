$(document).ready(function() {

// Go To By Scroll

$('.goToByScroll').on('click', function(e){
  var targetId = $(this).attr('data-targetId');
  e.preventDefault();
  $('html,body').stop().animate({scrollTop: $('#'+targetId).offset().top-40},'500');
});

// end Go To By Scroll

// Get Time

(function(){

  var d = new Date(),
      h = d.getHours();

  function setGreeting(g) {
    $('.customGreeting').html(g);
  }

  switch(h) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      setGreeting("Thanks for stopping by this morning.");
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      setGreeting("Thanks for stopping by this afternoon.");
      break;
    case 17:
    case 18:
    case 19:
    case 20:
      setGreeting("Thanks for stopping by this evening.");
      break;
    case 21:
    case 22:
    case 23:
      setGreeting("Thanks for stopping by tonight.");
      break;
    default:
    setGreeting("Thanks for stopping by.");
  }

})();



// end Get Time

// Contact Form

  //if submit button is clicked
  $('#submit').click(function() {

    //Get the data from all the fields
    var name = $('input[name=name]'),
        email = $('input[name=email]'),
        comment = $('textarea[name=comment]');

    //Simple validation to make sure user entered something
    //If error found, add error class to the text field
    if (name.val()==='') {
      name.addClass('error');
      return false;
    } else name.removeClass('error');

    if (email.val()==='') {
      email.addClass('error');
      return false;
    } else email.removeClass('error');

    if (comment.val()==='') {
      comment.addClass('error');
      return false;
    } else comment.removeClass('error');

    //organize the data properly
    var data = 'name=' + name.val() + '&email=' + email.val() + '&comment=' + encodeURIComponent(comment.val());

    //show the loading sign
    $('#submit').addClass('loading');

    //start the ajax
    $.ajax({
      //this is the php file that processes the data and send mail
      url: "../process.php",

      //GET method is used
      type: "GET",

      //pass the data
      data: data,

      //Do not cache the page
      cache: false,

      //success
      success: function (html) {
        //if process.php returned 1/true (send mail success)
        if (html==1) {
          //hide the form
          $('.form').fadeOut('slow');

          //show the success message
          $('.done').fadeIn('slow');

        //if process.php returned 0/false (send mail failed)
        } else alert('Sorry, unexpected error. Please try again later.');
      }
    });

    //cancel the submit button default behaviors
    return false;
  });

// end Contact Form

});