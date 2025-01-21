import '/estilos/style2.css'
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
          <span onClick={closeFullImage}>X</span>
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
