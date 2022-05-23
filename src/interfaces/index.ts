export interface IWebhook {
    allToken: boolean;
    id: string;
    label: string;
    created: string;
    coin: string;
    type: string;
    url: string;
    version: number;
    numConfirmation: number;
    state: string;
    lastAttemp: string;
    failingSince: string;
    successiveFailedAttempts: number;
}