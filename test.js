


        
    <script type="text/javascript">
           function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  data = response.getDataTable();
  var table = new google.visualization.Table(document.getElementById('querytable'));
  table.draw(data, {'showRowNumber': true});
  if (isFirstTime) {
  init();
  }
}

function setQuery(queryString) {
  // Query language examples configured with the UI
  query.setQuery(queryString);
  sendAndDraw();
  queryInput.value = queryString;
}

​
         </script>    
