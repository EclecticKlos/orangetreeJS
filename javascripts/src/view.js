/* Write your JS to modify the view here */

// function showImage() {
//   var img = document.getElementById('orange-tree-template');
//   img.style.visibility = 'visible';
// }

$(document).ready(function() {
  $("#plant").one( "click", function() {
    document.getElementById("orange-tree-template").style.visibility = 'visible';
    this.disabled = true;
  });
});

var myTree = createTree();

$(document).ready(function() {
  $(".age").click(function() {
    myTree.grow();
    $("p.age").html(myTree.age);
    if (myTree.age >= FRUIT_BEARING_AGE) {
      document.getElementById("orange-fruit").style.visibility = 'visible';

      document.getElementById("display-orange-fruit").style.top = "300px";
    }
  });
});

$(document).ready(function() {
  $(".pick").click(function() {
    myTree.orangeCount--;
    $(".fruit-count").html(myTree.orangeCount);
  });
});