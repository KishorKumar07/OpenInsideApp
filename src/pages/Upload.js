import { useCallback, useRef, useState } from "react";
import "./Upload.css";
import "./Uploaded.css";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

import * as XLSX from "xlsx";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [sheetData, setSheetData] = useState([]);
  const [isFlagged, setIsFlagged] = useState(false);

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const onFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      readSheetDataFromFile(file)
        .then((data) => 
        
        {  console.log(data); 
          setSheetData(data)})
        .catch((error) => console.error("Error reading sheet data:", error));
    }
  };

  const readSheetDataFromFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        resolve(sheetData);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };
  return (
    <div className="upload">
      <Sidebar />
      <section className="upload-child">
        <div className="frame-group">
          <div className="upload-c-s-v-container-parent">
            <div className="upload-c-s-v-container">
              <div className="upload-c-s-v-container-inner">
                <div className="upload-csv-wrapper">
                  <h3 className="upload-csv">Upload CSV</h3>
                </div>
              </div>
            </div>
            <div className="vector-mask">
              <img
                className="vector-icon"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="mask-group-icon"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <div className="input-container-wrapper">
            <div className="input-container">
              <div className="placeholder-text-frame">
                <img
                  className="size-med-icon-left-type-primar"
                  loading="eager"
                  alt=""
                  src="/frame-7682.svg"
                />
                {selectedFileName ? (
                  <div className="placeholder-text">
                    <span>{selectedFileName}</span>
                    <div
                      className="remove"
                      onClick={() => {
                        setSelectedFileName(null);
                        setSheetData([]); 
                      }}
                    >
                      Remove
                    </div>
                  </div>
                ) : (
                  <div className="placeholder-text">
                    <span>{`Drop your excel sheet here or `}</span>
                    <span
                      className="browse"
                      onClick={onSizemdIconLeftTypePrimaClick}
                    >
                      Browse
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv, .xls, .xlsx"
                      onChange={onFileInputChange}
                      style={{ display: "none" }}
                    />
                  </div>
                )}
                <div className="placeholder-text-frame-child" />
                <div className="placeholder-text-frame-item" />
              </div>
              <button className="upload-btn" onClick={()=>setIsFlagged(true)}>
                <img className="icon" alt="" src="/icon.svg" />
                <div className="upload-text">Upload</div>
              </button>
            </div>
          </div>
        </div>

        {sheetData && sheetData.length > 0 && isFlagged && (

          <div className="table-demo">
            <div className="uploads">
              <h2 className="uploads1">Uploads</h2>
              <form className="table-demo-3">
                <Table data={sheetData} />
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Upload;
