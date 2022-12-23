// Navbar //
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function () {
    this.classList.toggle('isActive');
})


// Characters //

const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.charactercontainer')
const tcgcontainers = document.querySelectorAll('.tcgcharactercontainer')
const tcgiicontainers = document.querySelectorAll('.tcgiicharactercontainer')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(afterElement)
    }
  })
})

tcgcontainers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
    
  }, { offset: Number.NEGATIVE_INFINITY }).element
}


tcgiicontainers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

// CountDown //

let seconds = 0;
  let timer;

  function startTimer() {
    timer = setInterval(function() {
      seconds++;
      document.getElementById("time").innerHTML = seconds;
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("time").innerHTML = seconds;
  }

  document.getElementById("start").addEventListener("click", startTimer);
  document.getElementById("reset").addEventListener("click", resetTimer);