import React from "react";
import QRCode from "react-qr-code";

export default function QrCode({ value }: { value: any }) {
  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/${value}`);

  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={`${process.env.NEXT_PUBLIC_BASE_URL}/${value}`}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
