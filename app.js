
function slideBox(e) {
  const target = e.target;
  if (!target.classList.contains('segment__title')) return;

  const currentSegment = target.closest('.segment');
  const segments = target.closest('.slide-box').querySelectorAll('.segment');
  
  segments.forEach((segment) => {
      if (segment === currentSegment) {
        segment.classList.toggle('active');
      } else {
        segment.classList.remove('active');
      }

      if (segment.classList.contains('active')) {
        segment.querySelector('.segment__inner').style.marginTop = '0px';
      } else {
        segment.querySelector('.segment__inner').style.marginTop = "-" + segment.querySelector('.segment__inner').offsetHeight + 'px';
      }
    });
}

// document.addEventListener('DOMContentLoaded', slideBox);

document.addEventListener('click', slideBox);