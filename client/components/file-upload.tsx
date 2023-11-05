import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import "@uploadthing/react/styles.css";

import { UploadDropzone } from "@/lib/uploadthing";

// interface FileUploadProps {
//   onChange: (url?: string) => void;
//   endpoint: "messageFile" | "serverImage";
//   value: string;
// }

// const FileUpload = ({ onChange, endpoint, value }: FileUploadProps) => {
//   const fileType = value.split(".").pop();

//   if (value && fileType !== "pdf") {
//     console.log(value);
//     return (
//       <div className="relative h-20 w-20">
//         <Image fill src={value} alt="upload" className="rounded-full" />
//         <button
//           className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
//           type="button"
//           onClick={() => onChange("")}
//         >
//           <X className="h-4 w-4" />
//         </button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <UploadDropzone
//         endpoint={endpoint}
//         onClientUploadComplete={(res) => onChange(res?.[0].url)}
//         onUploadError={(error) => {
//           console.log(error);
//         }}
//       />
//     </div>
//   );
// };

// "use client";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
