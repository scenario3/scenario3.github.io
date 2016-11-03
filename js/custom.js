function getAccountDetails() {
  var emailAddress = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  var accountDetails =
  {
    "email":emailAddress,
    "password": password
  };

}

function getRefDetails() {
  var refTitle = document.getElementById('title').value;
  var refLink = document.getElementById('link').value;
  var refComment = document.getElementById('comment').value;

  var refDetails =
  {
    "refTitle": refTitle,
    "refLink": refLink,
    "refComment": refComment
  };
}
function changeDetails() {
  prompt("Change name");

}

function getNewDetails() {
  var firstName = document.getElementById('first_name').value;
  var lastName = document.getElementById('last_name').value;
  var emailAddress = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var passwordConf = document.getElementById('password_confirmation').value;


  var newDetails =
  {
    "firstName":firstName,
    "lastName": lastName,
    "emailAddress": emailAddress,
    "password": password,
    "passwordConf": passwordConf
  };
}

$(function () {
                $('#datetimepicker4').datetimepicker();
            });
