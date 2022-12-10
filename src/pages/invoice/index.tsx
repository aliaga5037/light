import React from "react";
import { Tabs, Select } from "antd";
import { Link } from "react-router-dom";
import Input from "@/components/input";
import chevronDown from "@/assets/icons/chevron_down.svg";
import chevronright from "@/assets/icons/chevron_right.svg";
import briefCaseIcon from "@/assets/icons/briefcase.svg";
import usaIcon from "@/assets/icons/usa.svg";
import binIcon from "@/assets/icons/bin.svg";
import closeIcon from "@/assets/icons/close.svg";
import listIcon from "@/assets/icons/list_checks.svg";
import arrowLeft from "@/assets/icons/arrow_left.svg";
import arrowRight from "@/assets/icons/arr_right.svg";

const Details = () => {
  return (
    <div className="invoice">
      <div className="invoice__backdrop"></div>
      <div className="invoice__container">
        <div className="invoice__header">
          <div className="invoice__title">Invoice #123456</div>
          <div className="invoice__actions">
            <button className="btn" style={{ marginRight: "0.5rem" }}>
              Submit for approval
            </button>
            <button className="btn btn--white" style={{ marginRight: "2rem" }}>
              <img src={binIcon} alt="binIcon" />
            </button>

            <div className="invoice__nav" style={{ marginRight: "2rem" }}>
              <button className="btn btn--white">
                <img src={arrowLeft} alt="arrowLeft" />
              </button>

              <div className="invoice__nav-numbers">
                <span className="invoice__nav-number">1</span>
                <span>/</span>
                <span className="invoice__nav-number">12</span>
              </div>
              <button className="btn btn--white">
                <img src={arrowRight} alt="arrowRight" />
              </button>
            </div>

            <Link className="invoice__nav-close" to={"/"}>
              <img src={closeIcon} alt="close" />
            </Link>
          </div>
        </div>
        <div className="invoice__body">
          <div className="invoice__body-left">
            <div className="invoice__tabs">
              <Tabs
                activeKey="1"
                onChange={() => {}}
                items={[
                  { key: "1", label: "Details" },
                  { key: "2", label: "History" },
                ]}
              />
            </div>
            <div className="invoice__body-left-bottom">
              <div className="invoice__settings">
                <Select
                  defaultValue="1"
                  suffixIcon={<img src={chevronDown} alt="chevronDown" />}
                  className="invoice__account-select"
                  options={[
                    {
                      value: "1",
                      label: (
                        <>
                          <div className="invoice__account">
                            <div className="invoice__account-icon">
                              <img src={briefCaseIcon} alt="briefCaseIcon" />
                            </div>
                            <div className="invoice__account-details">
                              <span className="invoice__account-name">
                                Oracle
                              </span>
                              <span className="invoice__account-email">
                                oracle.com · billing@oracle.com
                              </span>
                            </div>
                          </div>
                        </>
                      ),
                    },
                    {
                      value: "2",
                      label: (
                        <>
                          <div className="invoice__account">
                            <div className="invoice__account-icon">
                              <img src={briefCaseIcon} alt="briefCaseIcon" />
                            </div>
                            <div className="invoice__account-details">
                              <span className="invoice__account-name">AWS</span>
                              <span className="invoice__account-email">
                                amazon.com · billing@amazon.com
                              </span>
                            </div>
                          </div>
                        </>
                      ),
                    },
                    {
                      value: "3",
                      label: (
                        <>
                          <div className="invoice__account">
                            <div className="invoice__account-icon">
                              <img src={briefCaseIcon} alt="briefCaseIcon" />
                            </div>
                            <div className="invoice__account-details">
                              <span className="invoice__account-name">
                                Dixa
                              </span>
                              <span className="invoice__account-email">
                                dixa.com · billing@dixa.com
                              </span>
                            </div>
                          </div>
                        </>
                      ),
                    },
                  ]}
                />
                <div className="invoice__settings-inputs">
                  <Select
                    defaultValue="1"
                    suffixIcon={<img src={chevronDown} alt="chevronDown" />}
                    className="invoice__currency-select"
                    placeholder="Currency"
                    options={[
                      {
                        value: "1",
                        label: (
                          <>
                            <span className="invoice__currency-label">
                              Currency
                            </span>
                            <div className="invoice__currency">
                              <div className="invoice__currency-icon">
                                <img src={usaIcon} alt="usdIcon" />
                              </div>
                              <div className="invoice__currency-details">
                                <span className="invoice__currency-name">
                                  USD
                                </span>
                              </div>
                            </div>
                          </>
                        ),
                      },
                      {
                        value: "2",
                        label: (
                          <>
                            <span className="invoice__currency-label">
                              Currency
                            </span>
                            <div className="invoice__currency">
                              <div className="invoice__currency-icon">
                                <img src={usaIcon} alt="usdIcon" />
                              </div>
                              <div className="invoice__currency-details">
                                <span className="invoice__currency-name">
                                  EUR
                                </span>
                              </div>
                            </div>
                          </>
                        ),
                      },
                      {
                        value: "3",
                        label: (
                          <>
                            <span className="invoice__currency-label">
                              Currency
                            </span>
                            <div className="invoice__currency">
                              <div className="invoice__currency-icon">
                                <img src={usaIcon} alt="usdIcon" />
                              </div>
                              <div className="invoice__currency-details">
                                <span className="invoice__currency-name">
                                  MXN
                                </span>
                              </div>
                            </div>
                          </>
                        ),
                      },
                    ]}
                  />
                  <Select
                    defaultValue="1"
                    suffixIcon={<img src={chevronDown} alt="chevronDown" />}
                    className="invoice__due-select"
                    options={[
                      {
                        value: "1",
                        label: (
                          <>
                            <span className="invoice__due-label">
                              To be paid
                            </span>
                            <div className="invoice__due">
                              <div className="invoice__due-details">
                                <span className="invoice__due-price">
                                  32.159.00
                                </span>
                                <span className="invoice__due-tax">
                                  Tax 2102.12
                                </span>
                              </div>
                            </div>
                          </>
                        ),
                      },
                      {
                        value: "2",
                        label: (
                          <>
                            <span className="invoice__due-label">
                              To be paid
                            </span>
                            <div className="invoice__due">
                              <div className="invoice__due-details">
                                <span className="invoice__due-price">
                                  45.159.00
                                </span>
                                <span className="invoice__due-tax">
                                  Tax 3302.12
                                </span>
                              </div>
                            </div>
                          </>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="invoice__payment-details">
                <h3 className="invoice__details-title">Payment details</h3>
                <Input
                  value="Today"
                  label="Payment date"
                  inputClass="invoice__payment-date"
                  onChange={() => {}}
                  icon={<img src={chevronDown} alt="arrow" />}
                />
                <div className="invoice__settings-inputs">
                  <Input
                    label="Pay from account"
                    onChange={() => {}}
                    value="Amazon"
                    icon={<img src={chevronDown} alt="arrow" />}
                  />

                  <Input
                    label="Send to account"
                    onChange={() => {}}
                    value="Amazon"
                    icon={<img src={chevronDown} alt="arrow" />}
                  />
                </div>
              </div>
              <div className="invoice__accounting-details">
                <h3 className="invoice__details-title">Accounting details</h3>
                <Input
                  label="Note"
                  onChange={() => {}}
                  value="New laptop for the new marketing team"
                  className="input--grey"
                />

                <Input
                  value="Marketing"
                  label="Cost center"
                  onChange={() => {}}
                  icon={<img src={chevronDown} alt="arrow" />}
                />

                <div className="invoice__settings-inputs">
                  <Input
                    value="DK-company"
                    label="Entity"
                    onChange={() => {}}
                    icon={<img src={chevronDown} alt="arrow" />}
                  />
                  <Input
                    value="IT & Technology"
                    label="Sync to Category"
                    onChange={() => {}}
                    icon={<img src={chevronDown} alt="arrow" />}
                  />
                </div>
                <div className="invoice__settings-inputs">
                  <Input
                    value="22/11/2022"
                    label="Due date"
                    onChange={() => {}}
                    icon={<img src={chevronDown} alt="arrow" />}
                  />
                  <Input
                    value="2/11/2022"
                    label="Invoice date"
                    onChange={() => {}}
                    icon={<img src={chevronDown} alt="arrow" />}
                  />
                </div>

                <div className="invoice__approvers">
                  <div className="input" style={{ padding: "1rem" }}>
                    <img
                      src={listIcon}
                      alt="arrow"
                      style={{ marginRight: "0.5rem" }}
                    />
                    <div className="input__wrapper">
                      <span className="input__input">Approver</span>
                    </div>
                    <div className="invoice__badge">4 left</div>
                    <img src={chevronright} alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="invoice__line-items">
                <h3 className="invoice__details-title">Line items</h3>
                <div className="invoice__line-items-table">
                  <div className="invoice__line-items-row">
                    <div className="invoice__line-items-col">
                      <div className="invoice__line-items-name">
                        MacBook Pro 16/2.8/Tim
                      </div>
                      <div className="invoice__line-items-label">
                        IT & Technology
                      </div>
                    </div>
                    <div className="invoice__line-items-col">
                      <span className="invoice__line-items-price">
                        2,199.00
                      </span>
                    </div>
                  </div>
                  <div className="invoice__line-items-row">
                    <div className="invoice__line-items-col">
                      <div className="invoice__line-items-name">
                        Magic Keyboard DK
                      </div>
                      <div className="invoice__line-items-label">
                        IT & Technology
                      </div>
                    </div>
                    <div className="invoice__line-items-col">
                      <span className="invoice__line-items-price">295.00</span>
                    </div>
                  </div>

                  <div className="invoice__line-items-row">
                    <div className="invoice__line-items-col">
                      <div className="invoice__line-items-name">
                        Magic Trackpad DK
                      </div>
                      <div className="invoice__line-items-label">
                        IT & Technology
                      </div>
                    </div>
                    <div className="invoice__line-items-col">
                      <span className="invoice__line-items-price">199.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="invoice__body-right">
            <img
              src="/images/invoice.jpg"
              alt="Invoice"
              className="invoice__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
