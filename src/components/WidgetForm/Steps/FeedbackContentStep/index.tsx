import { ArrowLeft } from 'phosphor-react';

import { CloseButton } from '../../../CloseButton';
import { FeedbackType, feedbackTypes } from '../../';
import { ScheenshotButton } from '../../ScreenshotButton';

import styles from '../../styles.module.css';
import stylesContentStep from './styles.module.css';
import { useState } from 'react';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);

  return (
    <>
      <header>
        <button
          type="button"
          className={styles.arrowLeft}
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className={styles.titleFeedback}>
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className={stylesContentStep.textareaContentStep}
          placeholder='Conte com detalhes o que esta acontecendo...'
        />

        <footer className='flex gap-2 mt-2'>
          <ScheenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type='submit'
            className={`${stylesContentStep.sendButton} bg-brand-500`}
          >
            Enviar feedback
          </button>

        </footer>
      </form>

    </>
  )
}

