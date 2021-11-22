import React from 'react'

import GalleryCard3 from './GalleryImage'

const ThreeImages = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        height: '486px',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '1086px',
          display: 'flex',
          maxWidth: '1200px',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '1336px',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridGap: 30,
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <GalleryCard3 
            image_src="https://imagizer.imageshack.com/img924/8536/e1Zru5.jpg"
            rootClassName="rootClassName"
          >
            <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            >
              <div>
                <h1
                  style={{
                    color: '#000000',
                    fontSize: '24',
                    fontWeight: '600',
                    fontFamily: 'Rajdhani',
                  }}
                >
                  Project Title
                </h1>
              </div>
            </div>
          </GalleryCard3>
          <GalleryCard3
            image_src="https://imagizer.imageshack.com/img923/6236/oVXpuv.jpg"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://imagizer.imageshack.com/img922/777/8m78m7.png"
            rootClassName="rootClassName3"
          ></GalleryCard3>
        </div>
      </div>
    </div>
  )
}

export default ThreeImages