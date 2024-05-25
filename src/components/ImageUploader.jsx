"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "antd";
import Image from "next/image";

const ImageUploader = ({ onChange, onRemove, images, setImages }) => {
  const onUpload = (result) => {
    console.log(result.info.secure_url);
    setImages([...images, result.info.secure_url]);
  };
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {images.length > 0 &&
          images.map((url) => (
            <div key={url} className="relative w-[200px] h-[200px]">
              <div className="absolute top-0 right-0 z-10">
                <Button
                  type="button"
                  onClick={() => onRemove(url)}
                  className="text-white bg-red-500"
                  size="sm"
                >
                  {/* <Trash className="h-4 w-4" /> */}
                </Button>
              </div>
              <Image
                fill
                src={url}
                alt="collection"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <CldUploadWidget uploadPreset="skwsbpf7" onUpload={onUpload}>
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUploader;
