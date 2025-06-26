$(document).ready(function () {

    var radioGender = "male"
    var selectedNationality = "AU"
  var url = `https://randomuser.me/api/?results=10&gender=${radioGender}&nat=${selectedNationality}`;
  var p = "";
  var loadMore;

  fetchInformation(url);

  // add a radio button listener
    $("input[type='radio']").click(function(){
       // grab the value of the  radio button
       $("#results").empty();
       radioGender = $('input[name="gender"]:checked').val();
       url = `https://randomuser.me/api/?results=10&gender=${radioGender}&nat=${selectedNationality}`;
       if (radioGender) {
        fetchInformation(url);
       }
    });
    // add an event listener for the select box
    $("#nationality").on("change", function (){
        
        $("#results").empty();
        // grab the value that the user selects
        selectedNationality = $("#nationality :selected").text()
        url = `https://randomuser.me/api/?results=10&gender=${radioGender}&nat=${selectedNationality}`;
        if (selectedNationality) {
          fetchInformation(url);
        }
    })
  function fetchInformation(url) {
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        data.results.forEach((person) => {
          p = ` <div class="card mb-3 p-3 d-flex flex-row align-items-center gap-3">
          
            <img src="${person.picture.medium}" alt="Profile Picture" class="img-rounded"/>
            <span>${person.name.title}</span>
            <span>${person.name.first}</span>
            <span>${person.name.last}</span>
            <span>${person.nat}</span>
            <span style="margin-left:420px;">Email: ${person.email}</span>


            </div>
            `;
            $("#results").append(p)
        });
        loadMore = `<button id="loadmore" class="btn btn-primary">Load More</button>`;
        $("#results").append(loadMore);
        $("#loadmore").on("click", function (){
            fetchInformation(url)
            $(this).remove();
        })
      });
  }
});
