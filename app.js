/*
1.DOM Selection
2.Event Listner
3.Basic Validation
4.Creating Elements
5.Append
*/


//Dom Sectection
const title = document.querySelector('#title');    //select title
const author = document.querySelector('#author');    //select ahthor
const year = document.querySelector('#year');    //select year
const btn = document.querySelector('.btn');    //select title
const bookList = document.querySelector('#book-list');    //select title


//Event Listner
btn.addEventListener('click',  function(e) {
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == '') {
        alert('fill up your details')
    }else {
        const newRow = document.createElement ('tr'); 

        //connect with Title
        const newTitle = document.createElement ('th'); 
         newTitle.innerHTML = title.value;
         newRow.appendChild(newTitle);


         //connect with Author
        const newAuthor = document.createElement ('th'); 
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //connect with Year
        const newYear= document.createElement ('th'); 
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        //connect tbody.
        bookList.appendChild(newRow);
    }
});