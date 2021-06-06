
export interface EcontInstructions {
  id?: number;
  type?: string;
  title?: string;
  description?: string;
  attachments?: string;
  voiceDescription?: string;
  name?: string;
  applyToAllParcels: boolean;
  applyToReceivers?: string;
}

