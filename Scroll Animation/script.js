const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  // where in the window we want to trigger really important to understand
  const triggerBottom = window.innerHeight / 5 * 4


  boxes.forEach(box => {
    
    // Where is this element in the viewport 
    // information about the size of an element and it's position  relative to the viewport //!MDN Docs

    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom ) {

      box.classList.add('show')

    }else {

      box.classList.remove('show')

    }
  })
}