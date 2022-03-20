import React from "react";
import { Row, Spin } from "antd";

export const Spinner = () => {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Spin size="large" />
    </Row>
  );
};
