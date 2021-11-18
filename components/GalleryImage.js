import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard3 = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        style={{
          top: '0px',
          left: '0px',
          right: 'auto',
          width: '100%',
          bottom: 'auto',
          height: '100%',
          position: 'absolute',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          width: '100%',
          height: '300px',
          zIndex: '1',
          display: 'flex',
          opacity: '0',
          padding: 'var(--dl-space-space-twounits)',
          alignItems: 'center',
          transition: '0.3s',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9));',
        }}
      >
        <h1
          style={{
            color: 'var(--dl-color-gray-white)',
            fontSize: '1.5rem',
            textAlign: 'center',
            fontWeight: '500',
            marginBottom: 'var(--dl-space-space-oneandhalfunits)',
          }}
        >
          {props.title}
        </h1>
        <span
          style={{
            color: 'var(--dl-color-gray-white)',
            textAlign: 'center',
          }}
        >
          {props.subtitle}
        </span>
      </div>
    </div>
  )
}

GalleryCard3.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  image_alt: 'image',
  rootClassName: '',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&h=1000',
}

GalleryCard3.propTypes = {
  subtitle: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard3
