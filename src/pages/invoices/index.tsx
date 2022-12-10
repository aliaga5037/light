/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { Pagination, Tabs } from "antd";
import type { PaginationProps } from "antd";
import { getInvoices, getInvoicesCount } from "@/api/invoices";
import type { Invoice as InvoiceProps } from "@/api/invoices";
import Invoice from "./invoice";
import plusIcon from "@/assets/icons/plus.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import searchIcon from "@/assets/icons/search.svg";
import messageIcon from "@/assets/icons/send.svg";
import chevronDown from "@/assets/icons/chevron_down.svg";

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <img src={chevronDown} alt="previous" />;
  }
  if (type === "next") {
    return <img src={chevronDown} alt="next" />;
  }
  return originalElement;
};

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<InvoiceProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [activeTab, setActiveTab] = useState("inbox");
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  // filter by description
  const filteredInvoices = useCallback(async () => {
    const res = await getInvoices(currentPage, pageSize);
    const filtered = res.filter(
      (invoice) =>
        invoice.description.toLowerCase().includes(search.toLowerCase()) &&
        (activeTab === "inbox"
          ? invoice
          : invoice.status.toLowerCase() === activeTab.toLowerCase())
    );

    setInvoices(filtered);
  }, [activeTab, currentPage, pageSize, search]);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize || 10);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  const getInitialInvoices = useCallback(async () => {
    const res = await getInvoices(currentPage, pageSize);
    setInvoices(res);
  }, []);

  const getTotalInvoiceCount = useCallback(async () => {
    const res = await getInvoicesCount();
    setTotal(res);
  }, []);

  useEffect(() => {
    filteredInvoices();
  }, [filteredInvoices]);

  useEffect(() => {
    getInitialInvoices();
    getTotalInvoiceCount();
  }, [getInitialInvoices, getTotalInvoiceCount]);

  return (
    <section className="invoices">
      <div className="invoices__header">
        <h1 className="invoices__title">Invoices</h1>
        <button className="invoices__button btn btn--sm btn--white">
          New Invoice
        </button>
      </div>
      <div className="invoices__tabs">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            { key: "inbox", label: "Inbox" },
            {
              key: "approving",
              label: (
                <span>
                  Approving <span className="invoices__tab-badge">1</span>
                </span>
              ),
            },
            { key: "scheduled", label: "Scheduled" },
            {
              key: "processing",
              label: (
                <span>
                  Processing
                  <span className="invoices__tab-badge invoices__tab-badge--blue"></span>
                </span>
              ),
            },
            { key: "paid", label: "Paid" },
          ]}
        />
      </div>

      <div className="invoices__utils">
        <div className="invoices__search">
          <span className="invoices__search-icon">
            <img
              src={searchIcon}
              alt="search icon"
              className="invoices__search-image"
            />
          </span>

          <input
            type="text"
            className="invoices__search-input"
            placeholder="Search invoices"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="invoices__filter">
          <button className="invoices__filter-button">
            <img
              src={plusIcon}
              alt="plus icon"
              className="invoices__filter-image"
            />
            <span className="invoices__filter-text">Add Filter</span>
          </button>
        </div>
        <div className="invoices__settings">
          <button className="invoices__settings-button">
            <span className="invoices__settings-icon">
              <img
                src={settingsIcon}
                alt="settings icon"
                className="invoices__settings-image"
              />
            </span>
          </button>
        </div>
      </div>

      <table className="invoices__table">
        <thead className="invoices__table-head">
          <tr>
            <th>
              <input type="checkbox" name="selectAll" />
            </th>
            <th>Vendor</th>
            <th>Description</th>
            <th>Status</th>
            <th>Time in stage</th>
            <th>Approver</th>
            <th>Paym. date</th>
            <th>To be paid</th>
          </tr>
        </thead>
        <tbody className="invoices__table-body">
          {invoices.map((invoice) => (
            <Invoice key={invoice.id} {...invoice} />
          ))}
        </tbody>
      </table>

      <div className="footer">
        <div className="message">
          <div>
            <div className="message__icon">
              <img
                src={messageIcon}
                alt="message icon"
                className="message__image"
              />
            </div>
          </div>
          <div>
            <div className="message__text">Send or forward invoices to</div>
            <div className="message__email">company@inbox.light.inc</div>
          </div>
        </div>

        <div className="footer__pagination">
          <Pagination
            pageSizeOptions={["5", "10", "20", "50"]}
            total={total}
            current={currentPage}
            showSizeChanger
            showLessItems
            defaultPageSize={pageSize}
            itemRender={itemRender}
            onChange={handlePageChange}
            onShowSizeChange={handlePageSizeChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Invoices;
