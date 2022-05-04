import { feedbackTypes, FeedbackType } from '../..';
import { CloseButton } from '../../../CloseButton';
import styles from '../../styles.module.css';

interface FeedbacktypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbacktypeStepProps) {
  return (
    <>
      <header>
         <span className={styles.titleFeedck}>
           Deixe seu feedback
         </span>
        <CloseButton />
     </header>
     <div className={styles.contentWidgetForm}>
       {
         Object.entries(feedbackTypes).map(([key, value], i) => {
          return (
             <button
               key={`${i}_${key}`}
               className={`${styles.buttonFeedbackTypes} bg-zinc-800`}
               type="button"
               onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
             >
               <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
           )
        })
      }
    </div>
  </>
  )
}
