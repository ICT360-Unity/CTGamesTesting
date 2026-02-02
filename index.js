function openCategory(category) {
  var i, tabcontent, tablinks, category, categorycontent, contentContainer;
  contentContainer = document.getElementById("categoryContentContainer");
  contentContainer.style.display = "grid"
  tabcontent = document.getElementsByClassName("categorycontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(category).style.display = "grid";
}


function changeColor(id) {
  category = document.getElementsByClassName("category");
  for (i = 0; i < category.length; i++) {
    // category[i].style.backgroundColor = "#FFFFFF";
    category[i].style.backgroundColor = "rgba(145, 200, 228, 0.2)";
    category[i].style.color = "#000000";
  }
    document.getElementById(id).style.backgroundColor = "#333";
    document.getElementById(id).style.color = "#FFFF";
}

function wrapper(category, id){
  openCategory(category);
  changeColor(id);
}