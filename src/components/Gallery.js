import React from 'react'

import GalleryCard3 from './GalleryImage'

const Gallery = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        height: '1166px',
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
          paddingTop: 'var(--dl-space-space-twounits)',
          paddingLeft: 'var(--dl-space-space-threeunits)',
          paddingRight: 'var(--dl-space-space-threeunits)',
          flexDirection: 'column',
          paddingBottom: 'var(--dl-space-space-twounits)',
          height: '1336px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            paddingTop: '250px',
            /* paddingLeft: '250px', */
          }}
        >
          Women
        </h1>
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridGap: 30,
            gridTemplateColumns: '1fr 1fr 1fr',
            /* paddingLeft: '270px', */
            paddingTop: '30px',
          }}
        >
          <GalleryCard3 
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5030523-1500-1500/1881719.jpg?v=637678484936130000"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/4475756-1500-1500/1810779.jpg?v=637641395470330000"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/4475696-1500-1500/1810791.jpg?v=637641396130770000"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5173800-1500-1500/1874113.jpg?v=637686470923730000"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/4085637-1000-1000/1805178.jpg?v=637614911681100000"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5173755-1500-1500/1874118.jpg?v=637686471024100000"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/4968363-1500-1500/1930671.jpg?v=637674417321370000"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/4969220-1500-1500/1930709.jpg?v=637674417777070000"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5030478-1000-1000/1881712.jpg?v=637678484795100000"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5027545-1000-1000/1806973.jpg?v=637678504877800000 "
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5027891-1000-1000/1807513.jpg?v=637678508006400000"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://oechsle.vteximg.com.br/arquivos/ids/5933327-1500-1500/1819775.jpg?v=637727771912470000"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
    </div>
  )
}

export default Gallery
