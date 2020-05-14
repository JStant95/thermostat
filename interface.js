$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
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

  $('#temperature-reset').on('click', function () {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON');
  });

  $('#powersaving-off').on('click', function () {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF');
  });
});
