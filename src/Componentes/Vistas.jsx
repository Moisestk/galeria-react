import Second from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const images = [{
    original: "https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_960_720.jpg",
    thumbnail: "https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_960_720.jpg",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg",
    thumbnail: "https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg"
  },
  {
    original: "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_960_720.jpg",
    thumbnail: "https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_960_720.jpg"
  }
  ];

function Vistas() {
    return(
        <div className='bg-dark cont'>
        <Second items={images} />
      </div>
    )
}

export default Vistas