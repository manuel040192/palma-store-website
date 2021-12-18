import React from 'react';
import { Link } from 'react-router-dom';

function ProductTypeCovers() {
    return (
        <div style={{
                display: 'flex',
                position: 'relative',
                height: '486px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
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
                        <Link to="/women"><img src="images/A8C0C744-4A5C-46F6-9C8D-3B59573CE182.jpeg" alt='' style={{ width: 350, height: 310, objectFit: 'cover' }}/></Link>
                        <Link to="/women"><span style={{ position: 'absolute', top: 135, left: 140, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Women</span></Link>   
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Link to="/petsandowners"><img src="images/0A8E19A8-A8ED-48E9-B942-5C164EE487CD.jpeg" alt='' style={{ width: 350, height: 310, objectFit: 'cover' }}/></Link>
                        <Link to="/petsandowners"><span style={{ position: 'absolute', top: 135, left: 78, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Pets and Owners</span></Link>    
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Link to="/goods"><img src="images/IMG_2710.png" alt='' style={{ width: 350, height: 310, objectFit: 'cover' }}/></Link>
                        <Link to="/goods"><span style={{ position: 'absolute', top: 135, left: 150, color: '#ffffff', fontFamily: 'Rajdhani', fontSize: 28, fontWeight: 400 }}>Goods</span></Link>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTypeCovers

