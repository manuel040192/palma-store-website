import React from 'react';

function Goods() {
    return (
        <div style={{
                display: 'flex',
                position: 'relative',
                height: '486px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingTop: '300px',
            }}
        >
            <div style={{
                    width: '1086px',
                    display: 'flex',
                    maxWidth: '1200px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '1336px',
                }}
            >
                <div style={{
                        width: '100%',
                        display: 'grid',
                        gridGap: 30,
                        gridTemplateColumns: '1fr 1fr 1fr',
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/1546460272960 2.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/A9769C79-33CA-455F-8399-EFA34A992CEC.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 155, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/37092222-A409-43E1-A57D-2B305E1E1EDA.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/65CA8B8F-B80F-4220-A451-5C1664667707 2.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/E27DA587-BC90-414A-AF54-F5BB4A28DD7D 5.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/IMG_2714.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/IMG_2711.jpg" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <a href="#"><img src="images/IMG_2621.png" style={{ width: 350, height: 310, objectFit: 'cover' }}/></a>
                        <span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods
