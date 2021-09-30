//find dom elements
let avatar = document.querySelector('#avatar').value;
let background = document.querySelector('#background').value;
let button = document.querySelector('#btn').addEventListener;

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

button('click', () =>{
    localStorage.setItem('test', 'testt')
    if(avatar){
        browser.storage.sync.set({"avatar": avatar})
    }

    if(background){
        browser.storage.sync.set({"background": background})
    }

})

browser.storage.onChanged((changes, area) =>{
    console.log(changes);
    console.log(area);
})
