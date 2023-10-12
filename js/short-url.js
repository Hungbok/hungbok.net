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



document.querySelectorAll(".surl").forEach((item, index) => {
  item.addEventListener("click", async (event) => {
      if (!navigator.clipboard) {
          // Clipboard API not available
          return;
      }
      try {
          await navigator.clipboard.writeText("https://hgbk.me/" + event.target.innerText);
          let newtime = new Date().getTime();
          $('.search-section').append('<div class="copied ' + newtime + '">✔</div>');
          setTimeout(function() {
              $('.copied.' + newtime).remove();
          }, 3000);

          var tooltip = document.getElementById("myTooltip");
          tooltip.innerHTML = "Copied"

      } catch (err) {
          console.error("Failed to copy!", err);
      }
  });
});



$("div").html(function(i, html) {
  return html.replace(/(\w+\.\w+.\w+.\w+.\w+.\w+.\w+)/g, "<a href='https://$1' target='_blank'>$1</a>");
});