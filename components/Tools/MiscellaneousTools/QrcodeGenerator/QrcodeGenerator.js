import React, { useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';
import ButtonDiv from "../../ButtonDiv";
import styled from 'styled-components';
import LabeledInput from '../../../Common/LabeledInput'

const StyledInput = styled.input`
${({ theme }) => theme.mixins.textbox}
height: 3em;
font-size: 0.8em;
`;

const StyledOutputBackgroud = styled.div`
${({ theme }) => theme.mixins.flexCenter};
background-color: ${({ theme }) => theme.shadeBackcard};
padding: 3em;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; 

    ::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
    }
`;

const QrcodeGenerator = () => {
    const [qrValue, setQrValue] = useState("Try https://toolpool.ml");

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
        
    ];

    const finalButtons = [
        {
            key: "2",
            title: "Download QR Code",
            method: () => downloadQRCode(),
            type: "submit",
        },
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
            <LabeledInput label="Enter URL or Text">
                <StyledInput
                    value={qrValue}
                    onChange={handleOnChange}
                />
            </LabeledInput>
            <ButtonDiv filter={filter} finalButtons={[]} />

            <StyledOutputBackgroud>
            <QRCodeCanvas
                id="qr-gen"
                value={qrValue}
                size={250}
                level={"H"}
                    includeMargin={true} />
            </StyledOutputBackgroud>
            <ButtonDiv filter={[]} finalButtons={finalButtons} />
        </div>
    )
}

export default QrcodeGenerator