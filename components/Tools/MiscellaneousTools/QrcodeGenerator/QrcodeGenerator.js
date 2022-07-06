import React, { useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';
import ButtonDiv from "../../ButtonDiv";

const QrcodeGenerator = () => {
    const [qrValue, setQrValue] = useState("jeftar");

    const handleOnChange = event => {
        const { value } = event.target;
        setQrValue(value);
    };

    const filter = [
        {
            key: "1",
            title: "Reset",
            method: () => setQrValue(""),
            type: "normal",
        },
        {
            key: "2",
            title: "Download QR Code",
            method: () => downloadQRCode(),
            type: "submit",
        },
    ];

    const finalButtons = [
    ];

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${qrValue}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div>
            <input
                value={qrValue}
                onChange={handleOnChange}
            />
            <QRCodeCanvas
                id="qr-gen"
                value={qrValue}
                size={290}
                level={"H"}
                includeMargin={true} />
            <p>
                Click for
                <br />
                <ButtonDiv filter={filter} finalButtons={finalButtons} />
            </p></div>
    )
}

export default QrcodeGenerator