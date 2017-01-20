
function iterate() {
  $(document).ready(function() {
    var dictionary = [
      ['raedan', 'counsel'],
      ['aliefan', 'permit'],
      ['baedan', 'compel'],
      ['hedan', 'heed'],
      ['blencan', 'cheat'],
      ['ascian', 'ask']
    ];

    function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
    }

    shuffle(dictionary)

    var rand = Math.floor((Math.random() * dictionary.length));
    var testItem = dictionary[rand][0];
    var correctChoice = dictionary[rand][1];

    html = `What is the meaning of ${testItem}?`
    html += "<form>"
    for (i=0; i<dictionary.length; i++) {
      html+=`<input type="radio" name="question" value="${dictionary[i][1]}"> ${dictionary[i][1]} <br>`;
    };
    html+='<br><input id="submit" type="submit" value="Submit">'
    html+="</form>"
    $(".question").html(html);

    $(document).on('submit','form', function(e){
      e.preventDefault();
      var feedbackHTML = '';
      var userInput = $('input[name=question]:checked').val();
      if (userInput == correctChoice) {
        console.log('correct')
        feedbackHTML += 'Correct! <br>';
        feedbackHTML += '<button id="submit2" type="submit">Next Question</button>';
        $(".feedback").html(feedbackHTML);
      }
      else {
        feedbackHTML += 'Wrong. Try again!<br>';
        $(".feedback").html(feedbackHTML);
      }

      $("#submit2").on("click", function(e){
        e.preventDefault();
        iterate();
      });
    });
  });
}

iterate();
