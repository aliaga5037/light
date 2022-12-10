import React from "react";
import { Invoice as InvoiceProps } from "@/api/invoices";
import { getTimeStatus } from "@/utils/utils";
import { Link } from "react-router-dom";
import moment from "moment";
import Badge from "@/components/badge";
import userIcon from "@/assets/icons/briefcase.svg";
import bellIcon from "@/assets/icons/bell.svg";
import arrowRightIcon from "@/assets/icons/arrow_right.svg";
import checkIcon from "@/assets/icons/check.svg";

const Invoice: React.FC<InvoiceProps> = ({
  id,
  vendor,
  description,
  status,
  pages,
  scanned,
  hasIssues,
  timeInStage,
  approver,
  paymentDate,
  due,
}) => {
  return (
    <tr>
      <td>
        <input type="checkbox" name="select" />
      </td>
      <td>
        <Link className="invoices__table-user" to={`invoice/${id}`}>
          <span className="invoices__table-user-icon">
            <img
              src={vendor.avatar || userIcon}
              alt={vendor.name}
              className="invoices__table-user-img"
            />
          </span>
          {vendor.name}
          &nbsp;
          {vendor.approved && <img src={checkIcon} alt="verified" />}
        </Link>
      </td>
      <td>
        <span className="invoices__table-description">{description}</span>
      </td>
      <td>
        <Badge
          status={status}
          hasIssues={hasIssues}
          pages={pages}
          scanned={scanned}
        />
      </td>
      <td>
        <span className={`text text--${getTimeStatus(timeInStage)}`}>
          {timeInStage}
        </span>
      </td>
      <td className="invoices__table-user">
        {approver ? (
          <>
            <span className="invoices__table-user-icon">
              <img
                src={approver.avatar || userIcon}
                alt={approver.name}
                className="invoices__table-user-img"
              />
            </span>
            {approver.name}

            {getTimeStatus(timeInStage) !== "default" && (
              <span className="invoices__table-user-action">
                <img
                  src={
                    getTimeStatus(timeInStage) === "warning"
                      ? bellIcon
                      : arrowRightIcon
                  }
                  alt="user action"
                  className="invoices__table-user-action-image"
                />

                {getTimeStatus(timeInStage) === "warning"
                  ? "Remind"
                  : "Re-assign"}
              </span>
            )}
          </>
        ) : (
          <>
            <span className="invoices__table-user-icon"></span>
            Not set
          </>
        )}
      </td>
      <td>{moment(paymentDate).format("MM/DD/YY")}</td>
      <td>${due}</td>
    </tr>
  );
};

export default Invoice;
