document.getElementById("myUL").style.display = "none";

function drop() {
  document.getElementById("myUL").style.display = "inline";
}

function undrop() {
  document.getElementById("myUL").style.display = "none";
}


function search() {
  // Declare variables
  var input, filter, ul, li, a, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("List");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
