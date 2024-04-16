import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const buttonStyles = cva(
  ["w-full", "rounded", "font-semibold", "disabled:cursor-not-allowed"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

const Button = ({
  variant,
  colorscheme,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, colorscheme, size }), className)}
      {...props}
    ></button>
  );
};

export default Button;
