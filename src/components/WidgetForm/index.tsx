import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thougthImageUrl from '../../assets/thought.svg';
import styles from './styles.module.css';


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

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  const handleRestartFeedback = () => {
    setFeedbackType(null);
  }

  return(
    <div className={styles.widgetForm}>
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType} 
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className={styles.footerWidgetForm}>
        {'Feito com ♥ pela '}
        <a className={styles.siteRocket} href="https://rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
