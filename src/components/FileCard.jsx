import config from "../config/constanta";
import moment from "moment";
import React from "react";
import { FaFileExcel, FaFileWord, FaFilePdf } from "react-icons/fa";

const FileCard = ({ title, date, type, link }) => {
  const fileIcons = {
    pdf: <FaFilePdf size={50} color="white" className="h-full " />,
    excel: <FaFileExcel size={50} color="white" className="h-full " />,
    word: <FaFileWord size={50} color="white" className="h-full " />,
  };
  return (
    <div className="max-w-full mx-auto bg-primary rounded-xl shadow-md p-6 flex items-stretch space-x-4">
      <div className="text-4xl">{fileIcons[type]}</div>
      <div>
        <a
          href={config.baseURL + link}
          target="_blank"
          className="text-xl font-bold text-white  "
        >
          {title}
        </a>
        <p className="text-gray-600"> {moment(date).format("DD. MMM YYYY")}</p>
      </div>
    </div>
  );
};

export default FileCard;
