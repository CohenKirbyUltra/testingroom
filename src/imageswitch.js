var ImageSelector = document.getElementById("selectorImage");

var Previous = document.getElementById("previous");
var Next = document.getElementById("next");

var Images = [
  "imgs/drawing.jpg",
  "imgs/london.jpg",
  "imgs/chicago.jpg",
  "imgs/vent.jpg",
  "imgs/Cone.jpg",
  "imgs/cafe.jpg",
  "imgs/Gooby.png",
];

var Index = 0;

Previous.addEventListener("click", ChangeImage("previous"));
Next.addEventListener("click", ChangeImage("next"));
ImageSelector.addEventListener("click", Missing);

function ChangeImage(type) {
  switch (type) {
    case "previous":
      Index++;
      if (Index > Images.length - 1) {
        Index = 0;
      }
      ImageSelector.src = Images[Index];
      break;
    case "next":
      Index--;
      if (Index < 0) {
        Index = Images.length - 1;
      }
      ImageSelector.src = Images[Index];
      break;
    default:
      alert("Something went wrong");
      break;
  }
}

function Missing() {
  if (index === 3) {
    alert("Error 8600: They are Missing.");
    window.location.href = "missing.html";
  }
}
