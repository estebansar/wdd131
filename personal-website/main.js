
/*tips of the day.....*/

if (document.getElementById("tip")) {
  const tips = [
    "Always double check dimensions in section views.",
    "Use view templates in Revit to keep drawings consistent.",
    "Name your sheets and views clearly for better collaboration.",
    "Use detail components for common construction symbols.",
    "Create Revit families that are parametric and reusable."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").textContent = randomTip;
}

/*filtering and modal  */

if (document.querySelector(".project-grid")) {
  const projectDetails = {
    1: {
      title: "Water Retainer Model",
      image: "images/project1.jpg",
      description: "This project included slab edge detailing, reinforcement planning, and Revit modeling for a municipal water structure."
    },
    2: {
      title: "Marriott Hotel Layout",
      image: "images/project2.jpg",
      description: "Drafted a full hotel layout in Revit, including floor plans, interior elevations, and ADA compliant paths."
    },
    3: {
      title: "Stair & Grating System",
      image: "images/project3.jpg",
      description: "Modeled industrial stair supports, grating landings, and structural framing with Revit Families."
    }
  };

    document.querySelector(".filter-buttons").addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const selectedTag = e.target.dataset.tag;
      document.querySelectorAll(".project-card").forEach(card => {
        const tags = card.dataset.tags;
        card.style.display = (selectedTag === "All" || tags.includes(selectedTag)) ? "block" : "none";
      });
    }
  });

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const closeButton = document.querySelector(".close-button");

  document.querySelectorAll(".view-details").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.dataset.id;
      const project = projectDetails[projectId];
      modalTitle.textContent = project.title;
      modalImage.src = project.image;
      modalDescription.textContent = project.description;
      modal.style.display = "flex";
    });
  }); 

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
