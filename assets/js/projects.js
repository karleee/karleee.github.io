// Function to add a new class when li is clicked
function toggleExpansion(e, id) {
  e.preventDefault();

  const thumbnail = document.getElementById(`${id}`);

  // Turning Node list from DOM into normal array
  const classes = [...thumbnail.classList];

  // Toggling active classses on expanded elements
  if (classes.includes('active')) {
    thumbnail.classList.remove('active');
    thumbnail.classList.add('inactive');
  } else {
    thumbnail.classList.remove('inactive');
    thumbnail.classList.add('active');
  }
}