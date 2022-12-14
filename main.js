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

(function() {
  //global variables
  var intervalHandle, resetPage, secondsRemaining, startCountdown, tick;

  secondsRemaining = void 0;

  intervalHandle = void 0;

  //as soon as the window loads, call the following function to generate the input section
  //Reveal the input area, clear the input value, and reset the time display text color
  resetPage = function() {
    document.getElementById('inputArea').style.display = 'block';
    document.getElementById('minutes').value = ' ';
    return document.getElementById('time').style.color = 'white';
  };

  tick = function() {
    var message, min, sec, timeDisplay;
    //get the h1
    timeDisplay = document.getElementById('time');
    //convert seconds into mm:ss
    min = Math.floor(secondsRemaining / 60);
    sec = secondsRemaining - (min * 60);
    //add a leading zero (as a string value) if sec is less than 10
    if (sec < 10) {
      sec = '0' + sec;
    }
    //concatenate min and sec with a colon
    message = min.toString() + ':' + sec;
    //display the concatenated result
    timeDisplay.innerHTML = message;
    //When time drops to 10s or less, change display color to red
    if (min < 1 && sec <= 10) {
      timeDisplay.style.color = 'red';
    }
    //stop if down to zero
    if (secondsRemaining === 0) {
      clearInterval(intervalHandle);
      resetPage();
      alert('Time Has Expired!');
    }
    //subtract one second from secondsRemaining
    return secondsRemaining--;
  };

  startCountdown = function() {
    var minutes;
    //get and store the value that has been entered into the "minutes" text box
    minutes = document.getElementById('minutes').value;
    //check to make sure the value is a number
    if (isNaN(minutes)) {
      alert('Please enter a number, you fool!');
    }
    //how many seconds remaining?
    secondsRemaining = minutes * 60;
    //every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    //hide the input form
    return document.getElementById('inputArea').style.display = 'none';
  };

  window.onload = function() {
    var inputMinutesThink, startButton;
    //create an input text box with id of "minutes", set attributes
    inputMinutesThink = document.createElement('input');
    inputMinutesThink.setAttribute('id', 'minutes');
    inputMinutesThink.setAttribute('type', 'text');
    //create a button, set attributes
    startButton = document.createElement('input');
    startButton.setAttribute('type', 'button');
    startButton.setAttribute('id', 'start');
    startButton.setAttribute('value', 'Start');
    // associate clicking this button with a function that calls the startCountdown function
    startButton.onclick = function() {
      return startCountdown();
    };
    //add the input box and button to the DOM, inside #inputArea
    document.getElementById('inputArea').appendChild(inputMinutesThink);
    return document.getElementById('inputArea').appendChild(startButton);
  };

  // ---
// generated by js2coffee 2.2.0

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWlCO0VBQUE7QUFBQSxNQUFBLGNBQUEsRUFBQSxTQUFBLEVBQUEsZ0JBQUEsRUFBQSxjQUFBLEVBQUE7O0VBQ2pCLGdCQUFBLEdBQW1COztFQUNuQixjQUFBLEdBQWlCLE9BRkE7Ozs7RUFNakIsU0FBQSxHQUFZLFFBQUEsQ0FBQSxDQUFBO0lBQ1YsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBb0MsQ0FBQyxLQUFLLENBQUMsT0FBM0MsR0FBcUQ7SUFDckQsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBa0MsQ0FBQyxLQUFuQyxHQUEyQztXQUMzQyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUErQixDQUFDLEtBQUssQ0FBQyxLQUF0QyxHQUE4QztFQUhwQzs7RUFNWixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7QUFDUCxRQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLFdBQUE7O0lBQ0UsV0FBQSxHQUFjLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLEVBRGhCOztJQUdFLEdBQUEsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLGdCQUFBLEdBQW1CLEVBQTlCO0lBQ04sR0FBQSxHQUFNLGdCQUFBLEdBQW1CLENBQUMsR0FBQSxHQUFNLEVBQVAsRUFKM0I7O0lBTUUsSUFBRyxHQUFBLEdBQU0sRUFBVDtNQUNFLEdBQUEsR0FBTSxHQUFBLEdBQU0sSUFEZDtLQU5GOztJQVNFLE9BQUEsR0FBVSxHQUFHLENBQUMsUUFBSixDQUFBLENBQUEsR0FBaUIsR0FBakIsR0FBdUIsSUFUbkM7O0lBV0UsV0FBVyxDQUFDLFNBQVosR0FBd0IsUUFYMUI7O0lBYUUsSUFBRyxHQUFBLEdBQU0sQ0FBTixJQUFZLEdBQUEsSUFBTyxFQUF0QjtNQUNFLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBbEIsR0FBMEIsTUFENUI7S0FiRjs7SUFnQkUsSUFBRyxnQkFBQSxLQUFvQixDQUF2QjtNQUNFLGFBQUEsQ0FBYyxjQUFkO01BQ0EsU0FBQSxDQUFBO01BQ0EsS0FBQSxDQUFNLG1CQUFOLEVBSEY7S0FoQkY7O1dBcUJFLGdCQUFBO0VBdEJLOztFQXdCUCxjQUFBLEdBQWlCLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLFFBQUEsT0FBQTs7SUFDRSxPQUFBLEdBQVUsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBa0MsQ0FBQyxNQUQvQzs7SUFHRSxJQUFHLEtBQUEsQ0FBTSxPQUFOLENBQUg7TUFDRSxLQUFBLENBQU0sa0NBQU4sRUFERjtLQUhGOztJQU1FLGdCQUFBLEdBQW1CLE9BQUEsR0FBVSxHQU4vQjs7SUFRRSxjQUFBLEdBQWlCLFdBQUEsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBUm5COztXQVVFLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQW9DLENBQUMsS0FBSyxDQUFDLE9BQTNDLEdBQXFEO0VBWHRDOztFQVlqQixNQUFNLENBQUMsTUFBUCxHQUFnQixRQUFBLENBQUEsQ0FBQTtBQUNoQixRQUFBLGlCQUFBLEVBQUEsV0FBQTs7SUFDRSxpQkFBQSxHQUFvQixRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtJQUNwQixpQkFBaUIsQ0FBQyxZQUFsQixDQUErQixJQUEvQixFQUFxQyxTQUFyQztJQUNBLGlCQUFpQixDQUFDLFlBQWxCLENBQStCLE1BQS9CLEVBQXVDLE1BQXZDLEVBSEY7O0lBS0UsV0FBQSxHQUFjLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ2QsV0FBVyxDQUFDLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsUUFBakM7SUFDQSxXQUFXLENBQUMsWUFBWixDQUF5QixJQUF6QixFQUErQixPQUEvQjtJQUNBLFdBQVcsQ0FBQyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBUkY7O0lBV0UsV0FBVyxDQUFDLE9BQVosR0FBc0IsUUFBQSxDQUFBLENBQUE7YUFDcEIsY0FBQSxDQUFBO0lBRG9CLEVBWHhCOztJQWVFLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQW9DLENBQUMsV0FBckMsQ0FBaUQsaUJBQWpEO1dBQ0EsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBb0MsQ0FBQyxXQUFyQyxDQUFpRCxXQUFqRDtFQWpCYzs7RUFoREM7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2xvYmFsIHZhcmlhYmxlc1xuc2Vjb25kc1JlbWFpbmluZyA9IHVuZGVmaW5lZFxuaW50ZXJ2YWxIYW5kbGUgPSB1bmRlZmluZWRcbiNhcyBzb29uIGFzIHRoZSB3aW5kb3cgbG9hZHMsIGNhbGwgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgaW5wdXQgc2VjdGlvblxuI1JldmVhbCB0aGUgaW5wdXQgYXJlYSwgY2xlYXIgdGhlIGlucHV0IHZhbHVlLCBhbmQgcmVzZXQgdGhlIHRpbWUgZGlzcGxheSB0ZXh0IGNvbG9yXG5cbnJlc2V0UGFnZSA9IC0+XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dEFyZWEnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLnZhbHVlID0gJyAnXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykuc3R5bGUuY29sb3IgPSAnYmxhY2snXG5cblxudGljayA9IC0+XG4gICNnZXQgdGhlIGgxXG4gIHRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKVxuICAjY29udmVydCBzZWNvbmRzIGludG8gbW06c3NcbiAgbWluID0gTWF0aC5mbG9vcihzZWNvbmRzUmVtYWluaW5nIC8gNjApXG4gIHNlYyA9IHNlY29uZHNSZW1haW5pbmcgLSAobWluICogNjApXG4gICNhZGQgYSBsZWFkaW5nIHplcm8gKGFzIGEgc3RyaW5nIHZhbHVlKSBpZiBzZWMgaXMgbGVzcyB0aGFuIDEwXG4gIGlmIHNlYyA8IDEwXG4gICAgc2VjID0gJzAnICsgc2VjXG4gICNjb25jYXRlbmF0ZSBtaW4gYW5kIHNlYyB3aXRoIGEgY29sb25cbiAgbWVzc2FnZSA9IG1pbi50b1N0cmluZygpICsgJzonICsgc2VjXG4gICNkaXNwbGF5IHRoZSBjb25jYXRlbmF0ZWQgcmVzdWx0XG4gIHRpbWVEaXNwbGF5LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgI1doZW4gdGltZSBkcm9wcyB0byAxMHMgb3IgbGVzcywgY2hhbmdlIGRpc3BsYXkgY29sb3IgdG8gcmVkXG4gIGlmIG1pbiA8IDEgYW5kIHNlYyA8PSAxMFxuICAgIHRpbWVEaXNwbGF5LnN0eWxlLmNvbG9yID0gJ3JlZCdcbiAgI3N0b3AgaWYgZG93biB0byB6ZXJvXG4gIGlmIHNlY29uZHNSZW1haW5pbmcgPT0gMFxuICAgIGNsZWFySW50ZXJ2YWwgaW50ZXJ2YWxIYW5kbGVcbiAgICByZXNldFBhZ2UoKVxuICAgIGFsZXJ0ICdUaW1lIEhhcyBFeHBpcmVkISdcbiAgI3N1YnRyYWN0IG9uZSBzZWNvbmQgZnJvbSBzZWNvbmRzUmVtYWluaW5nXG4gIHNlY29uZHNSZW1haW5pbmctLVxuXG5zdGFydENvdW50ZG93biA9IC0+XG4gICNnZXQgYW5kIHN0b3JlIHRoZSB2YWx1ZSB0aGF0IGhhcyBiZWVuIGVudGVyZWQgaW50byB0aGUgXCJtaW51dGVzXCIgdGV4dCBib3hcbiAgbWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW51dGVzJykudmFsdWVcbiAgI2NoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgaXMgYSBudW1iZXJcbiAgaWYgaXNOYU4obWludXRlcylcbiAgICBhbGVydCAnUGxlYXNlIGVudGVyIGEgbnVtYmVyLCB5b3UgZm9vbCEnXG4gICNob3cgbWFueSBzZWNvbmRzIHJlbWFpbmluZz9cbiAgc2Vjb25kc1JlbWFpbmluZyA9IG1pbnV0ZXMgKiA2MFxuICAjZXZlcnkgc2Vjb25kLCBjYWxsIHRoZSBcInRpY2tcIiBmdW5jdGlvblxuICBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKHRpY2ssIDEwMDApXG4gICNoaWRlIHRoZSBpbnB1dCBmb3JtXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dEFyZWEnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG53aW5kb3cub25sb2FkID0gLT5cbiAgI2NyZWF0ZSBhbiBpbnB1dCB0ZXh0IGJveCB3aXRoIGlkIG9mIFwibWludXRlc1wiLCBzZXQgYXR0cmlidXRlc1xuICBpbnB1dE1pbnV0ZXNUaGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgaW5wdXRNaW51dGVzVGhpbmsuc2V0QXR0cmlidXRlICdpZCcsICdtaW51dGVzJ1xuICBpbnB1dE1pbnV0ZXNUaGluay5zZXRBdHRyaWJ1dGUgJ3R5cGUnLCAndGV4dCdcbiAgI2NyZWF0ZSBhIGJ1dHRvbiwgc2V0IGF0dHJpYnV0ZXNcbiAgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSAndHlwZScsICdidXR0b24nXG4gIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSAnaWQnLCAnc3RhcnQnXG4gIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSAndmFsdWUnLCAnU3RhcnQnXG4gICMgYXNzb2NpYXRlIGNsaWNraW5nIHRoaXMgYnV0dG9uIHdpdGggYSBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBzdGFydENvdW50ZG93biBmdW5jdGlvblxuXG4gIHN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAtPlxuICAgIHN0YXJ0Q291bnRkb3duKClcblxuICAjYWRkIHRoZSBpbnB1dCBib3ggYW5kIGJ1dHRvbiB0byB0aGUgRE9NLCBpbnNpZGUgI2lucHV0QXJlYVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRBcmVhJykuYXBwZW5kQ2hpbGQgaW5wdXRNaW51dGVzVGhpbmtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0QXJlYScpLmFwcGVuZENoaWxkIHN0YXJ0QnV0dG9uXG5cbiMgLS0tXG4jIGdlbmVyYXRlZCBieSBqczJjb2ZmZWUgMi4yLjAiXX0=
//# sourceURL=coffeescript

