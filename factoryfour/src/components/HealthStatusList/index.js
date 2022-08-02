import React from "react";
import FetchData from "../HealthStatusCard";

const items = [
  {
    title: "accounts",
    type: "accounts",
  },
  {
    title: "assets",
    type: "assets",
  },
  {
    title: "customers",
    type: "customers",
  },
  {
    title: "datapoints",
    type: "datapoints",
  },
  {
    title: "devices",
    type: "devices",
  },
  {
    title: "documents",
    type: "documents",
  },
  {
    title: "forms",
    type: "forms",
  },
  {
    title: "invites",
    type: "invites",
  },
  {
    title: "media",
    type: "media",
  },
  {
    title: "messages",
    type: "messages",
  },
  {
    title: "namespaces",
    type: "namespaces",
  },
  {
    title: "orders",
    type: "orders",
  },
  {
    title: "patients",
    type: "patients",
  },
  {
    title: "relationships",
    type: "relationships",
  },
  {
    title: "templates",
    type: "templates",
  },
  {
    title: "users",
    type: "users",
  },
  {
    title: "workflows",
    type: "workflows",
  },
];

const HealthStatusList = () => {
  return (
    <div className="  bg-gray-900 p-10 flex flex-wrap">
      {items.map((item) => {
        return <FetchData title={item.title} type={item.type} />;
      })}
    </div>
  );
};

export default HealthStatusList;
