import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thougthImageUrl from '../../assets/thought.svg';
import styles from './styles.module.css';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';


export const feedbackTypes = {
  BUG: {
    title: 'Ploblema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thougthImageUrl,
      alt: 'Imagem de um balãoa de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSend, setFeedbackSend] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSend(false);
    setFeedbackType(null);
  }

  return (
    <div className={styles.widgetForm}>
      {feedbackSend ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}
      < footer className={styles.footerWidgetForm}>
        {'Feito com ♥ pela '}
        <a className={styles.siteRocket} href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div >
  )
}
