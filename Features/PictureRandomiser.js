//randomises 2 items from an array and sends them to be outputted on the current page

const taylor = new Image();  // Creates a new HTMLImageElement
taylor.src = 'https://fortune.com/img-assets/wp-content/uploads/2015/08/gettyimages-4834702281.jpg';  // Set the image source to the online URL
const weeknd = new Image();
weeknd.src = 'https://assets.mycast.io/actor_images/actor-the-weeknd-458030_large.jpg?1655391106';
const beiber = new Image();
beiber.src = 'https://www.liveabout.com/thmb/XDEAXn4e0sRZjzjXpCNrKq7SFbI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/justin-bieber-56a96cf43df78cf772a6ddc7.jpg';
const styles = new Image();
styles.src = 'https://inews.co.uk/wp-content/uploads/2023/07/SEI_163599621.jpg?crop=0px%2C274px%2C1701px%2C963px&resize=1200%2C675';

const randomPicture = () => {
    let arr = [beiber, taylor, weeknd, styles]
    let arrPic = []
    for (let i = 0; i < 2; i++) {
        var pic = arr[Math.floor(Math.random() * arr.length)]
        return arrPic.push(...pic)
    }
}
//console.log(randomPicture)
export default randomPicture

//currently 'image is not defined'