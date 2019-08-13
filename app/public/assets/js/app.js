
$('#submit').on('click', (event) => {
    event.preventDefault();

    function ValidateSurveyForm() {
        var isValid = true;

        $(".form-control").each(function() {
          if ($(this).val() == ""){
            isValid = false;
          }
        });

        return isValid;
    }


    if (ValidateSurveyForm() == true) {
        var userData = {
            name: $('#name').val(),
            photo: $('#photo').val(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val()
            ]
        };

        $.post(window.location.origin + '/api/friends', userData, (data) => {
            $('#modal-title').text('You got a match!')
            //shows result name
            $('#friend-name').text(data.name);
            //shows result photo
            $('#friend-photo').attr('src', data.photo);
            //modal container will appear
            $('#modal-container').toggle();

            $('#error-message').hide();
            // close button function
            $('#close-btn').on('click', ()=>{
                //modal container will hide after the close button is clicked
                $('.modal').hide();
                
                // clearing the form after the submission
                $('#name').val('');
                $('#photo').val('');
                $('#q0').val(0);
                $('#q1').val(0);
                $('#q2').val(0);
                $('#q3').val(0);
                $('#q4').val(0);
                $('#q5').val(0);
                $('#q6').val(0);
                $('#q7').val(0);
                $('#q8').val(0);
                $('#q9').val(0);
            });
        }); //end of post request
      }//end of if statement 
      else {
        //modal container will appear if there is an error
        $('#modal-container').toggle();
        //title
        $('#modal-title').text('Submission Failed.');
        //shows error message
        $('#error-message').text('Please make sure that every field is not empty.');
        // close button function
        $('#close-btn').on('click', ()=>{
            $('.modal').hide();
            
            // clearing the form after the submission
            $('#name').val('');
            $('#photo').val('');
            $('#q0').val(0);
            $('#q1').val(0);
            $('#q2').val(0);
            $('#q3').val(0);
            $('#q4').val(0);
            $('#q5').val(0);
            $('#q6').val(0);
            $('#q7').val(0);
            $('#q8').val(0);
            $('#q9').val(0);
        });
      }
      return false;
});
