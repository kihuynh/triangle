$(document).ready(function(){

  var side1 = parseInt(prompt("Length one:"));
  var side2 = parseInt(prompt("Length two:"));
  var side3 = parseInt(prompt("Length three:"));

  if (side1 + side2 <= side3) {
    $("#not-triangle").show();
  } else if (side2 + side3 <= side1) {
    $("#not-triangle").show();
  } else if (side1 + side3 <= side2) {
    $("#not-triangle").show();
  }




    else if (side1 === side2 && side2 === side3 && side1 === side3) {
    $("#equilateral").show();
    }

    else if (side1 != side2 && side1 === side3) {
      // if (side1 + side2 <= side3)


    $("#isosceles").show();
    }

    else if (side1 === side2 && side2 != side3) {
    $("#isosceles").show();
    }

    else if (side1 === side2 && side1 != side3) {
    $("#isosceles").show();
    }

    else if (side1 != side2 && side1 != side3 && side2 != side3) {
      $("#scalene").show();
    }








});
