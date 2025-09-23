import React, { useState, type ReactNode } from "react";
import "./tooltip.scss";

interface TooltipProps {
  content: ReactNode;   // Tooltip text/content
  children: ReactNode;  // The element that triggers the tooltip
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="vl-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`vl-tooltip vl-tooltip--${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};
