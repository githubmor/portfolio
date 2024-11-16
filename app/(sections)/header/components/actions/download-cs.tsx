"use client";
import Button from "@/app/components/button";
import { useCVDownload } from "./hook";

function DownloadCv() {
  const handleDownload = useCVDownload();
  return <Button onClick={handleDownload} text="Download CV" />;
}

export default DownloadCv;
