
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
      image: "images/water-retainer-model.png",
      description: "This structural drafting project involved modeling a reinforced water containment structure. Slab edges were detailed, rebar layouts were added, and foundation views were coordinated in Revit to ensure clean construction documentation"
    },
    2: {
      title: "Hampton Inn Hotel",
      image: "images/hampton-inn.png",
      description: "Drafted in Revit, this hotel project includes complete floor plans, room annotations, and ADA-compliant layout coordination. Wall elevations and construction documents were created based on architectural markups from the design team"
    },
    3: {
      title: "Stairs System",
      image: "images/stairs-system.png",
      description: "This drafting task included stair supports, steel grating walkways, and handrails for an industrial structure. Revit Families were used to build flexible components based on structural sketches and field notes"
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
