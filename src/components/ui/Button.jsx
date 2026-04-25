import React from "react";

const variantClasses = {
  primary:
    "bg-[#f49f1c] text-[#111b20] hover:bg-[#ffad35] shadow-lg shadow-[#f49f1c]/15",
  outline:
    "border border-white/20 bg-white/[0.04] text-white hover:border-[#f49f1c]/45 hover:bg-white/[0.08]",
  ghost: "text-white/72 hover:bg-white/[0.06] hover:text-white",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
  icon: "p-2",
};

const Button = ({
  as: Component = "button",
  type = Component === "button" ? "button" : undefined,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => (
  <Component
    type={type}
    className={`inline-flex items-center justify-center rounded-2xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#f49f1c]/60 focus:ring-offset-2 focus:ring-offset-[#0d1418] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    {...props}
  >
    {children}
  </Component>
);

export default Button;
