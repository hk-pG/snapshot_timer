import { Button } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: 'user',
};

export const CameraPage = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      {isCaptureEnable || (
        <Button onClick={() => setCaptureEnable(true)}>開始</Button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <Button onClick={() => setCaptureEnable(false)}>終了</Button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <Button onClick={capture}>キャプチャ</Button>
        </>
      )}
      {url && (
        <>
          <div>
            <Button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </Button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
};
