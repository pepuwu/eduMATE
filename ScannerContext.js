// ScannerContext.js
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { CameraView } from "expo-camera";

const ScannerContext = createContext();

export const useScanner = () => useContext(ScannerContext);

export const ScannerProvider = ({ children }) => {
  const [isScanning, setIsScanning] = useState(false);
  const scannerHandler = useRef(null); // Referencia para manejar el callback actual

  useEffect(() => {
    CameraView.onModernBarcodeScanned((data) => {
      if (data && scannerHandler.current) {
        scannerHandler.current(data.data);
      }
      setIsScanning(false);
      CameraView.dismissScanner();
    });

    return () => {
      CameraView.dismissScanner();
      CameraView.onModernBarcodeScanned(null);
    };
  }, []);

  const launchScanner = (onScan) => {
    if (isScanning) return;
    setIsScanning(true);
    scannerHandler.current = onScan;

    CameraView.launchScanner({
      isHighlightingEnabled: true,
      isGuidanceEnabled: false,
      VideoStabilization: "off",
      VideoQuality: "1080p",
      barCodeTypes: ["qr"],
    });
  };

  return (
    <ScannerContext.Provider value={{ launchScanner, isScanning }}>
      {children}
    </ScannerContext.Provider>
  );
};
