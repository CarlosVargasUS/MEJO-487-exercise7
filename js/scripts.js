$(document).ready(function () {
    console.log('scripts loaded');
    var xhttp = new XMLHttpRequest();
    var grants;
    var html = '';
    var tablecontent = document.getElementById('#results');
    var projectTitle = '';
    var yearAwarded = '';
    var originalAmount = '';
    var description = '';
  
    $.get('./NEH_Grants2010s.xml', function (grants) {
      // console.log(grants);
      //creating the structure of the table
      html += '<tr><th>Project Title</th>';
      html += '<th>Year Awarded</th>';
      html += '<th>Original Amount</th>';
      html += '<th>Description</th></tr>';
  
      $(grants).find('Grant').each(function () { //getting the element grant from the xml file
        projectTitle = $(this).find('ProjectTitle').text(); //finding the Title of the project
        yearAwarded = $(this).find('YearAwarded').text(); //finding the year awarded 
        originalAmount = $(this).find('OriginalAmount').text(); //finding original amount
        description = $(this).find('ToSupport').text(); //finding description 
        // console.log(projectTitle + yearAwarded + originalAmount + description);
        if (description == 'None') {
          return;
        } else {
          html += '<tr>'; // building the table with its elements 
          html += '<td>' + projectTitle + '</td>';
          html += '<td>' + yearAwarded + '</td>';
          html += '<td>' + originalAmount + '</td>';
          html += '<td>' + description + '</td>';
          html += '</tr>';
        }
  
  
      });
  
      $('#results').append(html); //injecting the content to the html
  
  
  
  
  
      /*
      1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
         The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
      2) The table should have four columns:
          The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
      3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
         blank spaces with just 'None.' Clean this up with conditional logic in your code.
         If the grant has no description, do not include it in the table.
      */
  
  
    });
  
  });