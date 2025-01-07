import React, { useEffect, useImperativeHandle, forwardRef, useRef } from "react";

const CloudinaryUploadWidget = forwardRef(({ uwConfig, onUploadSuccess }, ref) => {
  const uploadWidgetRef = useRef(null);

  useEffect(() => {
    if (window.cloudinary) {
      // Create the Cloudinary upload widget
      uploadWidgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Upload successful:", result.info);
            onUploadSuccess(result.info.public_id); // Notify parent component
          }
        }
      );
    }
  }, [uwConfig, onUploadSuccess]);

  // Expose the `open` function to parent via ref
  useImperativeHandle(ref, () => ({
    openWidget: () => {
      if (uploadWidgetRef.current) {
        uploadWidgetRef.current.open();
      }
    },
  }));

  return null; // This component doesn't render anything
});

export default CloudinaryUploadWidget;
