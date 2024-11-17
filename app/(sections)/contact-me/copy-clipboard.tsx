"use client";
import IconButton from "@/app/components/icon-button";
import CopyIcon from "./copy-icon";
import { useState } from "react";

type Props = {
  text: string;
};

function CopyClipboard({ text }: Props) {
  const [showToast, setShowToast] = useState(false);
  const copyToClipboard = () => {
    try {
      setShowToast(true);
      navigator.clipboard.writeText(text).then(() =>
        setTimeout(() => {
          setShowToast(false); // Reset the status after 2 seconds
        }, 3000)
      );
    } catch (err) {
      setShowToast(false);
      alert(err);
    }
  };
  return (
    <>
      <IconButton onClick={() => copyToClipboard()}>
        <CopyIcon />
      </IconButton>
      <div className="toast toast-center">
        {showToast && (
          <div className="alert alert-info">
            <span>
              <strong>{text}</strong> copied!
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default CopyClipboard;
