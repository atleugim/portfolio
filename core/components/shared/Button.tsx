import { Button } from "@/utils/types";
import Link from "next/link";
import Spinner from "./icons/Spinner";

const Button = ({
  children,
  childrenPosition,
  className,
  onClick,
  type = "button",
  disabled = false,
  text,
  isNavigation = false,
  target = "_self",
  href = "",
  isLoading = false,
}: Button) => {
  const child = (
    <div className="flex items-center justify-center w-full space-x-4">
      {childrenPosition === "start" && children}
      <span className="link-underline">{text}</span>
      {childrenPosition === "end" && children}
    </div>
  );
  return (
    <div
      className={`flex items-center justify-center btn ${
        disabled ? "opacity-60 cursor-not-allowed" : "opacity-100"
      }`}
    >
      {isNavigation ? (
        <Link href={href} passHref>
          <a
            target={target}
            rel="noreferrer"
            className={`${className} ${
              isLoading ? "py-1" : "py-2"
            } px-6 rounded-md text-xs font-bold uppercase hover:bg-opacity-90 duration-200 border border-gray-200`}
          >
            {isLoading ? (
              <Spinner className="text-primary dark:text-light" />
            ) : (
              child
            )}
          </a>
        </Link>
      ) : (
        <button
          className={`${className} ${
            isLoading ? "py-1" : "py-2"
          } px-6 rounded-md text-xs font-bold uppercase hover:bg-opacity-90 duration-200 border border-gray-200`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {isLoading ? (
            <Spinner className="text-primary dark:text-light" />
          ) : (
            child
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
