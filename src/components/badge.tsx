import React from "react";
import { statusMapper } from "@/utils/utils";
import checkIcon from "@/assets/icons/check_orange.svg";

export type BadgeType = "primary" | "success" | "danger" | "warning" | "info";

export interface BadgeProps {
  status: string;
  hasIssues: number;
  pages?: number;
  scanned?: number;
}

const Badge: React.FC<BadgeProps> = ({ status, hasIssues, pages, scanned }) => {
  const { type, text, check } = statusMapper(status);
  return (
    <>
      <span className={`badge badge--${type} ${check ? "badge--checked" : ""}`}>
        {text}
        {hasIssues > 0 && ` • ${hasIssues} issues`}
      </span>
      {pages && scanned && (
        <span className="invoices__table-pending">
          <img src={checkIcon} alt="" className="invoices__table-check" />
          {scanned}/{pages}
        </span>
      )}
    </>
  );
};

export default Badge;
