// Function to add a new class when li is clicked
function toggleExpansion(e, id) {
  const className = e.target.className;

  // Ignore toggling if user clicks on the "See More" link
  if (className !== 'SeeMore') {
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
}

// Function to scroll to a specific element by id
function scrollToElement(elementId) {
  var el = document.getElementById(elementId);
  console.log(el);
  el.scrollIntoView({ block: 'end', behavior: 'smooth' });
}