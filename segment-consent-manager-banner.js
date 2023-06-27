<script>
  var html = '<div id="__segmentConsentManager"></div>';
  var newDiv = document.createElement('div');
  var selectedElement = document.querySelector('body');
  if(selectedElement) {
    newDiv.innerHTML = html;
    var pointerElement = selectedElement.nextSibling;
    selectedElement.parentNode.insertBefore(newDiv, pointerElement);
  }
</script>
