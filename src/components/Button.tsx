import React, { MouseEventHandler, ReactNode } from "react";
import { ButtonType } from "@/src/enums/ButtonType.enum";
import { ThemeColor } from "@/src/enums/ThemeColor.enum";
import { mapButtonColors } from "@/src/components/buttonColors.map";
import classNames from "classnames";
import { ButtonSize } from "@/src/enums/ButtonSize.enum";
import { mapButtonSizes } from "@/src/components/buttonSizes.map";

interface ButtonProps {
  type: ButtonType;
  title: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  value?: string;
  className?: string;
  disabled?: boolean;
  color?: ThemeColor;
  size?: ButtonSize;
}
export const Button = ({
  value,
  onClick,
  type,
  className,
  disabled,
  title,
  color = ThemeColor.PRIMARY,
  size = ButtonSize.NORMAL,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn",
        className,
        mapButtonSizes[size],
        mapButtonColors[color],
      )}
      type={type}
      disabled={disabled}
      value={value}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
