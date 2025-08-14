
function startCountdown() {
  let timeLeft = {
    hours: 20,
    minutes: 12,
    seconds: 23
  };

  const timerElement = document.getElementById('deal-timer');

  function updateTimer() {
    if (timeLeft.seconds > 0) {
      timeLeft.seconds--;
    } else {
      if (timeLeft.minutes > 0) {
        timeLeft.minutes--;
        timeLeft.seconds = 59;
      } else {
        if (timeLeft.hours > 0) {
          timeLeft.hours--;
          timeLeft.minutes = 59;
          timeLeft.seconds = 59;
        } else {
          timerElement.textContent = "EXPIRED";
          clearInterval(interval);
          return;
        }
      }
    }

    const display = `${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = display;
  }

  const interval = setInterval(updateTimer, 1000);
  updateTimer();
}


document.addEventListener('DOMContentLoaded', function() {
  // عداد التنازلي
  if (document.getElementById('deal-timer')) {
    startCountdown();
  }

  // إغلاق الـ Offcanvas
  const offcanvases = document.querySelectorAll('.offcanvas');
  offcanvases.forEach(offcanvas => {
    offcanvas.addEventListener('show.bs.offcanvas', function(e) {
      offcanvases.forEach(otherOffcanvas => {
        if (otherOffcanvas !== e.target) {
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(otherOffcanvas);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        }
      });
    });
  });
});