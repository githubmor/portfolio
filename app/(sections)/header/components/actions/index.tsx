import React from "react";
import SwitchTheme from "./switch-theme";
import DownloadCv from "./download-cs";

type Props = {
  className?: string;
};

function Actions({ className = "" }: Props) {
  return (
    <div
      className={`flex flex-col md:flex md:flex-row gap-4 p-4 md:p-0 ${className}`}
    >
      <SwitchTheme />
      <DownloadCv />
    </div>
  );
}

export default Actions;
