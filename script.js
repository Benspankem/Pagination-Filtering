/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. ***/

   const studentList = document.querySelector('.student-list');

   const student = studentList.children; 
   
   const pagebody = document.querySelector('div.page'); 
   
   const pagediv = document.createElement('div'); 
      pagediv.classList.add("pagination"); 
      pagebody.appendChild(pagediv);
   
   const pageUl = document.createElement('ul');
      pagediv.appendChild(pageUl);

      console.log(pageUl);
   
   
   /*** 
      Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show. ***/
   const showPage = function(list, page) {
         let last = page * 10;
         let first = last - 10;
      
         for (var i = 0; i < student.length; i++) {
           if (i >= last || i < first) {
             student[i].style.display = "none";
           } else {
             student[i].style.display = "";  
           }
         }
       }
     
   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/
   const appendPageLinks = function (list) {
   let pageCount = Math.ceil(student.length / 10); 
   
   for (var i = 0; i < pageCount; i++) {
      let pageLi = document.createElement('li'); 
      pageUl.appendChild(pageLi); 
      let pageAnchor = document.createElement('a'); 
      pageLi.appendChild(pageAnchor); 
      pageAnchor.setAttribute('href', "#");
      pageAnchor.innerHTML= i + 1;
      pageAnchor.addEventListener("click", function() {
         let aLinks = document.querySelectorAll("a");
         for (var i = 0; i < aLinks.length; i++) {
            aLinks[i].className = "";
         }
         event.target.className = "active";
         showPage(studentList, pageAnchor.innerHTML);
      });
   }
}                  
   // create the search bar
   function searchBar () {
      const searchDiv = document.createElement("div");
      searchDiv.className = "student-search";
      let searchInput = document.createElement("input");
      searchInput.setAttribute("placeholder", "Search for students...");
      searchDiv.appendChild(searchInput);
      let searchBtn = document.createElement("button");
      searchBtn.textContent = "Search";
      searchDiv.appendChild(searchBtn);
   }  
   
   showPage(studentList, 1);
   appendPageLinks(studentList);
