import html2canvas from 'html2canvas';
import { Camera, Trash } from "phosphor-react";
import { useState } from 'react';
import { Loading } from '../Loading';

import stylesScreenshotButton from './styles.module.css';

type Props = {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
};

export function ScheenshotButton({ onScreenshotTook, screenshot }: Props) {
  const [IsTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        className={stylesScreenshotButton.screenshot}
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  };

  return (
    <button
      type='button'
      className={`${stylesScreenshotButton.cameraButton}`}
      onClick={handleTakeScreenshot}
    >
      {IsTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
};
