import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to=`${process.env.PUBLIC_URL}/`><img src='images/IMG_2714.jpg' alt='' style={{ width: 350, height: 310, objectFit: 'cover' }}/></Link>
                        <span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Link to=`${process.env.PUBLIC_URL}/`><img src='images/IMG_2711.jpg' alt='' style={{ width: 350, height: 310, objectFit: 'cover' }}/></Link>
                        <span style={{ position: 'absolute', top: 135, left: 155, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}></span>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goods
