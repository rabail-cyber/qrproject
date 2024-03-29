import React, { useState, useEffect, useCallback } from 'react';
// import { QrReader } from 'react-qr-reader';
import {Html5QrcodeScanner} from 'html5-qrcode'

const QRCodeScanner = () => {
    const[scanResult, setScanResult]= useState(null)
    // const [scannedData, setScannedData] = useState('');
    // // const [facingMode, setFacingMode] = useState('environment');
    // const [isCameraAvailable, setIsCameraAvailable] = useState(true);
    // const readerRef = useRef(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 500,
                height: 500
            },
            fps: 5,
        });
    
        scanner.render(success, error);

        function success(result){
            scanner.clear();
            console.log(result)
            setScanResult(result)
        }

        function error(err){
            console.warn(err)
        }

    },[])
    //     const requestCameraPermission = async () => {
    //         try {
    //             const stream = await navigator.mediaDevices.getUserMedia({
    //                 video: { facingMode: { ideal: 'environment' } },
    //                 audio: false,
    //             });
    //             readerRef.current.srcObject = stream;
    //             setIsCameraAvailable(true);
    //         } catch (error) {
    //             console.error('Error accessing camera:', error);
    //             setIsCameraAvailable(false);
    //         }
    //     };

    //     if ('mediaDevices' in navigator) {
    //         requestCameraPermission();
    //     }
    // }, []);

    // const handleScan = (data) => {
    //     setScannedData(data);
    // };

    // const handleError = (error) => {
    //     console.error('Error with QR code scanner:', error);
    //     setIsCameraAvailable(false);
    // };

    // // const switchCamera = () => {
    // //     setFacingMode((prevFacingMode) =>
    // //         prevFacingMode === 'user' ? 'environment' : 'user'
    // //     );
    // // };

    // useImperativeHandle(readerRef, () => ({
    //     // Expose a function to trigger a scan externally if needed
    //     triggerScan: () => {
    //         readerRef.current.handleImage(null);
    //     },
    // }));

    return (
        <>
            <h1> QR Scanner </h1>

            { scanResult 
            ?   <div> success: {scanResult}</div>
            :<div id='reader'></div>
            }
            </>
            // {isCameraAvailable ? (
            //     <></>
            //     // <QrReader
            //     //     key="environment"
            //     //     constraints={{ facingMode: 'environment' }}
            //     //     ref={readerRef}
            //     //     onScan={handleScan}
            //     //     onError={handleError}
            //     //     style={{ width: 300, height: 300 }}
            //     //     facingMode={'environment'}
            //     //     reactivate
            //     // />
            // ) : (
            //     <p>Camera not available. Please check your permissions or try another device.</p>
            // )}
            // {/* <button onClick={switchCamera}>Switch Camera</button> */}
            // {scannedData && <p>Scanned Data: {scannedData}</p>}

    );
};

export default QRCodeScanner;
