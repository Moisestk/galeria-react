import './estilos/style2.css'
import React, { useState } from 'react';
function Part() {
    const [fullImage, setFullImage] = useState(null);

  const openFullImage = (src) => {
    setFullImage(src);
  };

  const closeFullImage = () => {
    setFullImage(null);
  };
    return (
        <>
            {fullImage && (
        <div className="ful-img" id="fulImgBox" style={{ display: 'flex' }}>
          <img src={fullImage} id="fulImg" alt="Full Size" />
          <span onClick={closeFullImage}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg></span>
        </div>
      )}
            <div className="container-fluid">
                <div className="heading pt-4 ">
                    <h1 className="text-center text-white p-4">Todas las Imagenes</h1>
                </div>
                <div className="row row-cols-3 img-gallery">
                    <div className="col-md">
                        <img src="https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_960_720.jpg" onClick={() => openFullImage('https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_960_720.jpg')} />
                        <img src="https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_960_720.jpg" onClick={() => openFullImage('https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_960_720.jpg')}/>
                    </div>
                    <div class="col-md">
                        <img src="https://picsum.photos/id/1015/1000/600/"onClick={() => openFullImage('https://picsum.photos/id/1015/1000/600/')} />
                        <img src="https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg"onClick={() => openFullImage('https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg')} />
                    </div>
                    <div className="col-md">
                        <img src="https://picsum.photos/id/1019/1000/600/"onClick={() => openFullImage('https://picsum.photos/id/1019/1000/600/')} />
                    </div>

                </div>
            </div>
        </>


    )
}
export default Part
