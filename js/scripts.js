// Business logic for My Vacations
function MyVacations() {
  this.places = {};
  this.currentId = 0;
}

MyVacations.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

MyVacations.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

MyVacations.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
};

MyVacations.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
};

// Business logic for Places
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//UI logic

let vacations = new MyVacations();
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    $("ul#places").empty();
    const locationInput = $("#locationInput").val();
    const landmarksInput = $("#landmarksInput").val();
    const timeInput = $("#timeInput").val();
    const notesInput = $("#notesInput").val();

    const place = new Place(locationInput, landmarksInput, timeInput, notesInput);

    vacations.addPlace(place);
    let testVar = vacations.places;

    console.log(typeof(testVar));
    
    $(".location").text(locationInput);
    $(".landmarks").text(landmarksInput);
    $(".time-of-year").text(timeInput);
    $(".notes").text(notesInput);

    for ( i in testVar ){
      $("ul#places").append("<li>" + testVar[i].location + "</li>");
    }

    for ( i in testVar ){
      $("ol#placesLand").append("<li>" + testVar[i].landmarks + "</li>");
    }

    //$("ul#places").append("<li>" + "to be relaced" + "</li>");

  });
});