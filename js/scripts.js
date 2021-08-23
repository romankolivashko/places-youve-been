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