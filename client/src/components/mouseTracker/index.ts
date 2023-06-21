export function mouseTracker() {
  const mouseTracker = document.getElementById('mouseTracker');
  const mouseTrackerX = document.getElementById('mouseTracker__x');
  const mouseTrackerY = document.getElementById('mouseTracker__y');

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    mouseTrackerX!.textContent = clientX.toString().padStart(3, '0');
    mouseTrackerY!.textContent = clientY.toString().padStart(3, '0');
  };

  window!.addEventListener('mousemove', handleMouseMove);

  return () => mouseTracker!.removeEventListener('mousemove', handleMouseMove);
}
