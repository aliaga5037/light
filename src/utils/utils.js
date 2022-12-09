const statusMap = {
  scanning: { text: "Scanning", check: false, type: "primary" },
  scanned: { text: "Scanned", check: true, type: "primary" },
  approving: { text: "Approving", check: false, type: "info" },
  approved: { text: "Approved", check: true, type: "info" },
  scheduled: { text: "Scheduled", check: true, type: "success" },
  paid: { text: "Paid", check: true, type: "success" },
  pending: { text: "Pending", check: false, type: "warning" },
  rejected: { text: "Rejected", check: false, type: "danger" },
};

export const statusMapper = (status) => {
  if (statusMap[status]) {
    return statusMap[status];
  }
  return status;
};

export const getTimeStatus = (time) => {
  const diffDays = time.split("d")[0];
  if (diffDays > 10) {
    return "danger";
  }
  if (diffDays >= 4) {
    return "warning";
  }
  return "default";
};
