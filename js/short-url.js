var options = {
  valueNames: ['surl', 'url']
};
var hackerList = new List('hacker-list', options);

// Assigning references to the filter buttons
var filterCityButton = document.getElementById("filter");
var removeFiltersButton = document.getElementById("removeFilters");

// When the filter button is clicked. The list is filtered by calling the filter function of the list object and passing in a function that accepts the list items.
filterCityButton.addEventListener("click", function() {
  hackerList.filter(function(item) {
      if (item.values().city == "Edmonton") {
          return true;
      } else {
          return false;
      }
  }); // Only items that have Edmonton as the city.
});

// When the remove filter button is clicked, the filters are removed by calling the filter function once again with no parameters.
removeFiltersButton.addEventListener("click", function() {
  hackerList.filter();
});