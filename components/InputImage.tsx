"use client";

import { useState } from "react";
import Image from "next/image";

export default function InputImage({
  name,
  required = undefined,
}: {
  name: string;
  required: undefined | boolean;
}) {
  const [file, setFile] = useState<File>();

  return (
    <div>
      <input
        type="file"
        name={name}
        accept="image/*"
        required={required}
        onChange={(e) => {
          const file = e.target.files;
          if (file != null) {
            setFile(file[0]);
          }
        }}
      />
      {file ? (
        <Image
          src={URL.createObjectURL(file!)}
          width={200}
          height={200}
          alt={file!.name}
        />
      ) : null}
    </div>
  );
}
