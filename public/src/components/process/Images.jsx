import { useAppStore } from "airbnb/store/store";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const Images = () => {
  const { images, setImages } = useAppStore();

  const handleUpload = (data) => {
    setImages([...images, data.info.secure_url]);
  };
  return (
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-4xl">Add some images of your house</h2>
      <p>Add at least 5 images to get started, you can add more later on.</p>
      <CldUploadButton
        options={{ multiple: true }}
        onUpload={handleUpload}
        uploadPreset="oucgtwns"
      >
        <span className="bg-airbnb-gradient py-3 mt-5 px-5 text-white text-base font-medium rounded-full cursor-pointer">
          Click to Upload
        </span>
      </CldUploadButton>
      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {images.map((image) => (
          <div className="relative h-36 w-[200px]" key={image}>
            <Image src={image} fill alt="Upload" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
