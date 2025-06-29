const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const toggleStepsBtn = document.getElementById("toggle-steps");
const ingredientsList = document.getElementById("ingredients");
const stepsList = document.getElementById("steps");
const startBtn = document.getElementById("start-cooking");
const nextBtn = document.getElementById("next-step");
const progressFill = document.getElementById("progress-fill");

let currentStep = 0;
const totalSteps = stepsList.children.length;

// Toggle Ingredients
toggleIngredientsBtn.onclick = () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsList.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
};

// Toggle Steps
toggleStepsBtn.onclick = () => {
  stepsList.classList.toggle("hidden");
  toggleStepsBtn.textContent = stepsList.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
};

// Cooking Progress
startBtn.onclick = () => {
  currentStep = 0;
  highlightStep(currentStep);
  nextBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  if (currentStep < totalSteps - 1) {
    currentStep++;
    highlightStep(currentStep);
  } else {
    alert("🎉 You're done cooking!");
    nextBtn.classList.add("hidden");
  }
};

function highlightStep(index) {
  Array.from(stepsList.children).forEach((step, i) => {
    step.style.fontWeight = i === index ? "bold" : "normal";
    step.style.color = i === index ? "#8b4513" : "#000";
  });

  // Update progress bar
  const progress = ((index + 1) / totalSteps) * 100;
  progressFill.style.width = progress + "%";
}
