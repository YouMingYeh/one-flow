export const taskOptions = [
  {
    label: 'Start Flow',
    value: 'start-flow',
    configOptions: [
      {
        label: 'Authentication Method',
        value: 'authentication-method',
        placeholder: 'token/basic/none',
      },
      {
        label: 'Authorization',
        value: 'authorization',
        placeholder: 'on/off',
      },
    ],
  },
  {
    label: 'Use Preferences',
    value: 'use-preferences',
    configOptions: [
      {
        label: 'Preset',
        value: 'preset',
        placeholder: 'default/other/none',
      },
    ],
  },
  {
    label: 'Use Financial Status',
    value: 'use-financial-status',
    configOptions: [
      {
        label: 'Preset',
        value: 'preset',
        placeholder: 'default/other/none',
      },
    ],
  },
  {
    label: 'Find Best Payment Collection Match',
    value: 'find-best-payment-collection-match',
    configOptions: [
      {
        label: 'Use Preference (default is on if available)',
        value: 'use-preference',
        placeholder: 'on/off',
      },
      {
        label: 'Use Financial Status (default is on if available)',
        value: 'use-financial-status',
        placeholder: 'on/off',
      },
      {
        label: 'Model',
        value: 'model',
        placeholder: 'default/other',
      },
    ],
  },
  {
    label: 'Report',
    value: 'report',
    configOptions: [
      {
        label: 'Type (default is comprehensive)',
        value: 'type',
        placeholder: 'comprehensive/summary',
      },
      {
        label: 'Insights (default is on)',
        value: 'insights',
        placeholder: 'on/off',
      },
      {
        label: 'Analytics (default is on)',
        value: 'analytics',
        placeholder: 'on/off',
      },
      {
        label: 'Include Financial Status (default is on)',
        value: 'include-financial-status',
        placeholder: 'on/off',
      },
      {
        label: 'Include Preferences (default is on)',
        value: 'include-preferences',
        placeholder: 'on/off',
      },
    ],
  },
  {
    label: 'Process Payment',
    value: 'process-payment',
    configOptions: [
      {
        label: 'Require Confirmation (default is on)',
        value: 'require-confirmation',
        placeholder: 'on/off',
      },
    ],
  },
  {
    label: 'End Flow',
    value: 'end-flow',
    configOptions: [
      {
        label: 'Save Report (default is on)',
        value: 'save-report',
        placeholder: 'on/off',
      },
      {
        label: 'Send Report to Email (default is on)',
        value: 'send-report-to-email',
        placeholder: 'on/off',
      },
      {
        label: 'Send Notification (default is on)',
        value: 'send-notification',
        placeholder: 'on/off',
      },
    ],
  },
];
