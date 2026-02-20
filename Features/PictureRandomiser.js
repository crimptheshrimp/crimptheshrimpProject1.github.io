import taylor from 'https://fortune.com/img-assets/wp-content/uploads/2015/08/gettyimages-4834702281.jpg'
import weeknd from 'https://assets.mycast.io/actor_images/actor-the-weeknd-458030_large.jpg?1655391106'
import beiber from 'https://www.liveabout.com/thmb/XDEAXn4e0sRZjzjXpCNrKq7SFbI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/justin-bieber-56a96cf43df78cf772a6ddc7.jpg'

//randomises (2?) items from an array and sends them to be outputted on the current page

const randomPicture = () => {
    let arr = [beiber, taylor, weeknd]
    var pic = arr[Math.floor(Math.random() * arr.length)]
    return pic
}

export default randomPicture