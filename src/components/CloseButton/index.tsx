import { Popover } from "@headlessui/react";
import styles from './styles.module.css';
import { X } from 'phosphor-react';

export function CloseButton() {
  return(
    <Popover.Button className={styles.closeButton} title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4"/>
    </Popover.Button>
  )
}
