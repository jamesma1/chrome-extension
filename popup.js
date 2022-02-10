const body = document.querySelector('body');
const searchBar = document.createElement('div')
searchBar.setAttribute("id", 'searchbar');
body.appendChild(searchBar)
const search = document.createElement('input');
searchBar.appendChild(search);


const button = document.createElement("button");
button.setAttribute('id', 'button');
button.innerHTML = "Search";
searchBar.appendChild(button);              // edit if not working

const genres = document.createElement('div');
genres.setAttribute('id', 'genres');
body.appendChild(genres);


const a = document.createElement('a');
const link = document.createTextNode('HANZ ZIMMER')
a.setAttribute('id', 'button1');
a.appendChild(link)
a.href = '';
genres.appendChild(a)
a.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=IqiTJK_uzUY", '_blank');
})

const b = document.createElement('b');
const link2 = document.createTextNode('GERMAN REGGAE')
b.setAttribute('id', 'button2');
b.appendChild(link2)
b.href = '';
genres.appendChild(b)
b.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=btvhe8Tgj2k&list=PLd5ZuiAuFdBY86Zv1t-fkM7BtAieJx-8Y", '_blank');
})

const c = document.createElement('c');
const link3 = document.createTextNode('KPOP')
c.setAttribute('id', 'button3');
c.appendChild(link3)
c.href = '';
genres.appendChild(c)
c.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=SCK8yBLqQJc&list=PLOHoVaTp8R7dfrJW5pumS0iD_dhlXKv17", '_blank');
})




//event listeners
document.addEventListener('DOMContentLoaded', () => {
    function searchMyQuery() {
        let query = search.value;
        window.open(`https://www.youtube.com/results?search_query=${query}`);
    }
    const body = document.querySelector('body');
    body.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            searchMyQuery();   
        }
    });
})


