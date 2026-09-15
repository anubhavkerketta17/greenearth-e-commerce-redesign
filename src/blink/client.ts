import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'greenearth-premium-store-126zc4h6',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_A2nOUeU5DvqivP7cNcF-EC6rke2x_Qml',
  authRequired: false,
  auth: { mode: 'managed' },
})
