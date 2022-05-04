import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../../CloseButton';
import { FeedbackType, feedbackTypes } from '../../';

import styles from '../../styles.module.css';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps){
  const feedbackTypeInfo = feedbackTypes[feedbackType];

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
     <div className={styles.contentWidgetForm}>
  
    </div>
  </>
  )
}
        
