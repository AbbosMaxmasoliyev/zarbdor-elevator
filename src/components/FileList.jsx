import React from "react";
import FileCard from "./FileCard";



const FileList = ({ doc }) => {
  if (!doc) {
    return <p>Fayllar mavjud emas.</p>;
  }

  return (
    <div className="file-list w-full ">
      <p className="text-4xl text-black text-center font-bold">{doc?.title}</p>
      <ul className="grid grid-cols-1  justify-between  w-full gap-5">
        {doc?.documentIds.map((file, index) => (
          <li key={index} className="file-item">
            <FileCard title={file.title} type={file.type} link={file.document} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
