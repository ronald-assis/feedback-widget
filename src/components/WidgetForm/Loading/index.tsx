import { CircleNotch } from "phosphor-react";

import stylesLoading from './styles.module.css';

export function Loading() {
  return (
    <div className={stylesLoading.loading}>
      <CircleNotch weight="bold" className="w-4 h-4  animate-spin" />
    </div>
  );
};
