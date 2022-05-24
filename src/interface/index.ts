export interface IWebhook {
    allToken: boolean;
    id: string;
    label: string;
    created: string;
    coin: string;
    type: string;
    url: string;
    version: number;
    numConfirmations: number;
    state: string;
    lastAttempt: string;
    failingSince: string;
    successiveFailedAttempts: number;
  }
  