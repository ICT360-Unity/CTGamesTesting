function openCategory(category) {
  var i, tabcontent, tablinks, categorycontent, contentContainer;
  contentContainer = document.getElementById("categorycontentcontainer");
  contentContainer.style.display = "grid"
  tabcontent = document.getElementsByClassName("categorycontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(category).style.display = "grid";
}
// if(category == 'All')
// {
//   categorycontent = document.getElementsByClassName("categorycontent");
//   for (i = 0; i < categorycontent.length; i++) {
//     categorycontent[i].style.display = "grid";
//   }
// }
// else {

// }
//   elmnt.style.backgroundColor = color;


// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();