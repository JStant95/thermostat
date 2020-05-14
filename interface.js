$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
  }

  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  })
})
