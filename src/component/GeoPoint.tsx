import { Alert, Button, Snackbar } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

type Location = {
  latitude: number | null;
  longitude: number | null;
};

/* エラーテキスト */
const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

export const GeoPoint = () => {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // useEffectが実行されているかどうかを判定するために用意しています
  const isFirstRef = useRef(true);

  /*
   * ページ描画時にGeolocation APIが使えるかどうかをチェックしています
   * もし使えなければその旨のエラーメッセージを表示させます
   */
  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((_position) => {
      const { latitude, longitude } = _position.coords;
      const prev = position;
      if (!position.latitude) {
        setPosition({ latitude, longitude });
      }
      if (prev.latitude != latitude && prev.longitude != longitude) {
        console.log(`diff lat: ${prev.latitude} <> ${latitude}`);
        console.log(`diff lng: ${prev.longitude} <> ${longitude}`);
        setPosition({ latitude, longitude });
        handleClick();
      }
    });

    setTimeout(getCurrentPosition, 5000);
  };

  // useEffect実行前であれば、"Loading..."という呼び出しを表示させます
  if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <div className="App">
      {!isFirstRef && !isAvailable && <ErrorText />}
      {isAvailable && (
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <p>latitude: {position.latitude}</p>
          <p>longitude: {position.longitude}</p>
          <Button onClick={getCurrentPosition}>Get Current Position</Button>

          <Snackbar
            //
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={300}
            onClose={handleClose}
          >
            <Alert severity="success">情報を更新しました</Alert>
          </Snackbar>
        </div>
      )}
    </div>
  );
};
