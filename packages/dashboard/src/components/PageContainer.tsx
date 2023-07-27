import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-mobile)",
        minHeight: "100%",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      {children}
    </div>
  );
};
export default PageContainer;
