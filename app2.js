const draggables = document.querySelectorAll(".DropElement");
const dropZones = document.querySelectorAll(".right-box, .left-box");

let draggedItem = null;

// شروع درگ
draggables.forEach(item => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", () => {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none"; // مخفی موقتی
    }, 0);
  });

  item.addEventListener("dragend", () => {
    setTimeout(() => {
      draggedItem.style.display = "block"; 
      draggedItem = null;
    }, 0);
  });
});

// هندل کردن drop
dropZones.forEach(zone => {
  zone.addEventListener("dragover", e => {
    e.preventDefault();
  });

  zone.addEventListener("drop", () => {
    if (draggedItem) {
      zone.appendChild(draggedItem);
    }
  });
});
