import { Upload } from "lucide-react";

import { useCSVReader } from "react-papaparse";
import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  // TODO: Add a paywall

  return (
    <div>
      <CSVReader onUploadAccepted={onUpload}>
        {({ getRootProps }: any) => (
          <Button className="w-full lg:w-auto" {...getRootProps()}>
            Import
          </Button>
        )}
      </CSVReader>
    </div>
  );
};
