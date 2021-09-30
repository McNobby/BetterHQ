let avatarBack = document.querySelector('.avatar-image')
let userPage = document.querySelector('.UserPage')

let backgroundImage = "https://mocah.org/uploads/posts/345116-Rick-and-Morty-Cartoon-TV-Series-Rick-Sanchez-Morty-Smith-Spaceship.jpg"
let avatarBackground = "https://wallpapers-clan.com/wp-content/uploads/2021/08/rick-and-morty-portal-wallpaper-2-scaled.jpg"

document.body.style.backgroundImage = `url(${backgroundImage})`
document.body.style.backgroundAttachment = `fixed`
document.body.style.backgroundSize = `cover`

//set avatar image and give it nesceary id for styling
if(backgroundImage){
    avatarBack.src = avatarBackground;
    avatarBack.id = "myImage";
    //set background image
    userPage.style.backgroundImage = `url(${backgroundImage})` 
}

storage.onChanged((changes, area) =>{
    console.log(changes);
    console.log(area);
})
