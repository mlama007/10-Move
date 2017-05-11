var main = function() {
    var cities = [
    'Margarita',
    'Caracas',
    'Raleigh',
    'Morrisville',
    'Cary',
    'Asheville',
    'San Jose',
    'Weston',
    'Miami',
    'Champaign',
    'Pembroke Pines',
    'Clearwater',
    'Arenal'
    ];
    $( "#cityFind" ).autocomplete({
      source: cities
    });
  };
 
$(document).ready(main);

