import invoicesData from "./invoices.json";

type Vendor = {
  id: number | string;
  name: string;
  approved: boolean;
  avatar: string | null;
};

type Approver = {
  id: number | string;
  name: string;
  avatar: string | null;
};

export interface Invoice {
  id: number | string;
  invoiceNumber?: string;
  vendor: Vendor;
  description: string;
  status: string;
  pages?: number;
  scanned?: number;
  hasIssues: number;
  timeInStage: string;
  approver: Approver | null;
  paymentDate: string;
  due: number;
}

export const invoices: Invoice[] = invoicesData.data;

export const getInvoicesCount = () => {
  return Promise.resolve(invoices.length);
};

export const getInvoices = (page: number, pageSize: number) => {
  return Promise.resolve(
    invoices.slice((page - 1) * pageSize, page * pageSize)
  );
};

export const getInvoice = (id: number) => {
  return Promise.resolve(invoices.find((invoice) => invoice.id === id));
};
