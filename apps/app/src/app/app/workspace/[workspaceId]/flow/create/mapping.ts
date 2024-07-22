import type { Edge, Node } from '@xyflow/react';

export type Type = {
  label: string;
  value: string;
};

export const types = [
  { label: 'Default', value: 'default' },
  { label: 'Payment Processing', value: 'payment-processing' },
  { label: 'Cash Flow Management', value: 'cash-flow-management' },
  { label: 'Transaction Processing', value: 'transaction-processing' },
  { label: 'Financial Reporting', value: 'financial-reporting' },
  { label: 'Budgeting', value: 'budgeting' },
  { label: 'Tax Management', value: 'tax-management' },
  { label: 'Bank Reconciliation', value: 'bank-reconciliation' },
  { label: 'Expense Tracking', value: 'expense-tracking' },
  { label: 'Invoice Management', value: 'invoice-management' },
  { label: 'Financial Analysis', value: 'financial-analysis' },
  { label: 'Risk Management', value: 'risk-management' },
  { label: 'Regulatory Compliance', value: 'regulatory-compliance' },
  { label: 'Investment Management', value: 'investment-management' },
  { label: 'Estate Planning', value: 'estate-planning' },
  { label: 'Personal Finance', value: 'personal-finance' },
  { label: 'Other', value: 'other' },
] as Type[];

export type Template = {
  name: string;
  value: string;
  description: string;
  nodes: Node[];
  edges: Edge[];
};

export const templates = {
  default: [
    {
      name: 'Default',
      value: 'default',
      description: 'A blank canvas to create your own flow',
      nodes: [],
      edges: [],
    },
  ],
  'payment-processing': [
    {
      name: 'Payment Processing',
      value: 'payment-processing',
      description: 'A flow to process payments',
      nodes: [],
      edges: [],
    },
  ],
  'cash-flow-management': [
    {
      name: 'Cash Flow Management',
      value: 'cash-flow-management',
      description: 'A flow to manage cash flow',
      nodes: [],
      edges: [],
    },
  ],
  'transaction-processing': [
    {
      name: 'Transaction Processing',
      value: 'transaction-processing',
      description: 'A flow to process transactions',
      nodes: [],
      edges: [],
    },
  ],
  'financial-reporting': [
    {
      name: 'Financial Reporting',
      value: 'financial-reporting',
      description: 'A flow to generate financial reports',
      nodes: [],
      edges: [],
    },
  ],
  budgeting: [
    {
      name: 'Budgeting',
      value: 'budgeting',
      description: 'A flow to manage budgets',
      nodes: [],
      edges: [],
    },
  ],
  'tax-management': [
    {
      name: 'Tax Management',
      value: 'tax-management',
      description: 'A flow to manage taxes',
      nodes: [],
      edges: [],
    },
  ],
  'bank-reconciliation': [
    {
      name: 'Bank Reconciliation',
      value: 'bank-reconciliation',
      description: 'A flow to reconcile bank accounts',
      nodes: [],
      edges: [],
    },
  ],
  'expense-tracking': [
    {
      name: 'Expense Tracking',
      value: 'expense-tracking',
      description: 'A flow to track expenses',
      nodes: [],
      edges: [],
    },
  ],
  'invoice-management': [
    {
      name: 'Invoice Management',
      value: 'invoice-management',
      description: 'A flow to manage invoices',
      nodes: [],
      edges: [],
    },
  ],
  'financial-analysis': [
    {
      name: 'Financial Analysis',
      value: 'financial-analysis',
      description: 'A flow to analyze financial data',
      nodes: [],
      edges: [],
    },
  ],
  'risk-management': [
    {
      name: 'Risk Management',
      value: 'risk-management',
      description: 'A flow to manage risks',
      nodes: [],
      edges: [],
    },
  ],
  'regulatory-compliance': [
    {
      name: 'Regulatory Compliance',
      value: 'regulatory-compliance',
      description: 'A flow to manage regulatory compliance',
      nodes: [],
      edges: [],
    },
  ],
  'investment-management': [
    {
      name: 'Investment Management',
      value: 'investment-management',
      description: 'A flow to manage investments',
      nodes: [],
      edges: [],
    },
  ],
  'estate-planning': [
    {
      name: 'Estate Planning',
      value: 'estate-planning',
      description: 'A flow to manage estate planning',
      nodes: [],
      edges: [],
    },
  ],
  'personal-finance': [
    {
      name: 'Personal Finance',
      value: 'personal-finance',
      description: 'A flow to manage personal finances',
      nodes: [],
      edges: [],
    },
  ],
  other: [
    {
      name: 'Other',
      value: 'other',
      description: 'A flow for other purposes',
      nodes: [],
      edges: [],
    },
  ],
} as Record<string, Template[]>;
