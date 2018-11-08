const resetFilter = (e) => {
  let input = document.getElementById('postcode-input');

  input.value = ' ';
  let typeCurrentlySelected = document.querySelectorAll('li');
  typeCurrentlySelected.forEach(i => {
    i.classList.remove('typeSelected')
    i.style.display = 'none';
  })
}

export default resetFilter()
