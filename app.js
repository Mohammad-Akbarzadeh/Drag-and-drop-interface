const drapElements = document.querySelectorAll(".DropElement");
const dropZones = document.querySelectorAll(".left-box,.right-box");

console.log(dropZones);


let dragItem = null;

drapElements.forEach((card) => {
  card.setAttribute("draggable", true);

  card.addEventListener("dragstart", () => {
    dragItem = card;
    setTimeout(() => {
      card.style.display = "none";
    }, 0);
  });

  card.addEventListener("dragend", () => {
    setTimeout(() => {
      card.style.display = "block";
      dragItem = null;
    });
  });
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  zone.addEventListener("drop",()=>{
    if(dragItem){
      zone.appendChild(dragItem)
    }
  })
});
