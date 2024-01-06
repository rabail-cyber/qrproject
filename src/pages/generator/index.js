// QRCodeGenerator.js
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

const QRCodeGenerator = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        // Get user's current location using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className="p-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className='card w-md-50 w-75 p-3 justify-content-center d-flex flex-column'>
                <h1 className='text-center'> QR Generator </h1>
                <hr/>
                <div className='justify-content-center d-flex my-3'>
                <QRCode size={500} value={`Location: ${latitude},${longitude} Class: 1432`} />
                </div>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
