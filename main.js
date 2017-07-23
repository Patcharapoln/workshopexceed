$(document).ready(function() {
  var link = "http://158.108.165.223/data/wzc/";
  var people,temp,door,air,temp,light,lux;
  function setDoor(i) {
    if(i!==1 && i!==0 && i!==-1) {
      console.error("Invalid int for setDoor.");
    }
    else {
      $.ajax({
        url: link+"se_door/set/"+i
      }).done(function() {
      }).fail(function() {
          console.error("Cannot setDoor to server.");
        }
      );
    }
  };

  function setAir(i) {
    if(i!==1 && i!==0 && i!==-1) {
      console.error("Invalid int for setDoor.");
    }
    else {
      $.ajax({
        url: link+"se_air/set/"+i
      }).done(function() {
      }).fail(function() {
          console.error("Cannot setDoor to server.");
        }
      );
    }
  };

  function setLight(i) {
    if(i!==1 && i!==0 && i!==-1) {
      console.error("Invalid int for setDoor.");
    }
    else {
      $.ajax({
        url: link+"se_light/set/"+i
      }).done(function() {
      }).fail(function() {
          console.error("Cannot setDoor to server.");
        }
      );
    }
  };

  function getPeople() {
    $.ajax({
      url: link+"ar_people"
    }).done(function(data) {
        var people = parseInt(data);
        if(people != NaN) {
          if(people < 2) {
            $("#people").html(people+" Person at home");
          }
          else {
            $("#people").html(people+" People at home");
          }
        }
    }).fail(function() {
        console.error("getPeople: Cannot connect to server.");
      }
    );
  };

  function getDoor() {
    $.ajax({
      url: link+"ar_door"
    }).done(function(data) {
        if(data === "1") {
          $("#door").attr("src","./door1.png");
        }
        if(data === "0") {
          $("#door").attr("src","./door0.png");
        }
    }).fail(function() {
        console.error("getDoor: Cannot connect to server.");
      }
    );
  };

  function getAir() {
    $.ajax({
      url: link+"ar_air"
    }).done(function(data) {
      if(data === "1") {
        $("#air").attr("src","./air1.png");
      }
      if(data === "0") {
        $("#air").attr("src","./air0.png");
      }
    }).fail(function() {
        console.error("getAir: Cannot connect to server.");
      }
    );
  };

  function getTemp() {
    $.ajax({
      url: link+"ar_temp"
    }).done(function(data) {
      if(data != null) {
        $("#temp").html("Temperature : "+data+" ℃");
      }
    }).fail(function() {
        console.error("getTemp: Cannot connect to server.");
      }
    );
  };

  function getLight() {
    $.ajax({
      url: link+"ar_light"
    }).done(function(data) {
      if(data === "1") {
        $("#light").attr("src","./bulb1.png");
      }
      if(data === "0") {
        $("#light").attr("src","./abulb0.png");
      }
    }).fail(function() {
        console.error("getLight: Cannot connect to server.");
      }
    );
  };

  function getLux() {
    $.ajax({
      url: link+"ar_lux"
    }).done(function(data) {
        light = data;
    }).fail(function() {
        console.error("getLux: Cannot connect to server.");
      }
    );
  };

  function getData() {
    getPeople();
    getDoor();
    getAir();
    getTemp();
    getLight();
  };

  getData();



  setInterval(getData,1000);
});
