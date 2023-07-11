let index = 0;

show_image(index)

function show_image(i) {
  index += i;

  let images = document.getElementsByClassName("image");

  let dots = document.getElementsByClassName("dot")

  // create for loop for blocking the images if we click prev or next button 

    for (i = 0; i < images.length; i++)
    images[i].style.display= "none";

  // create for loop for clearing the class name if we click prev or next button 
  // replace is for deleting

    for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "")

  if(index > images.length - 1)
  index = 0;

  if(index < 0)
   index = images.length - 1;
   
   // for displaying images

   images[index].style.display = "block";
   dots[index].className += " active"

}
