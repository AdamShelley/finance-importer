import { IconType } from "react-icons/lib";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "./ui/card";

const boxVariant = cva("rounded-md p-3", {
  variants: {
    variant: {
      default: "bg-blue-500/20",
      success: "bg-emerald-500/20",
      danger: "bg-rose-500/20",
      warning: "bg-yellow-500/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconVariant = cva("size-6", {
  variants: {
    variant: {
      default: "fill-blue-500/20",
      success: "fill-emerald-500/20",
      danger: "fill-rose-500/20",
      warning: "fill-yellow-500/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
  icon: IconType;
  title: string;
  value?: number;
  dateRange: string;
  percentageChange?: number;
}

export const DataCard = ({
  icon: Icon,
  title,
  value = 0,
  variant,
  dateRange,
  percentageChange,
}: DataCardProps) => {
  return <Card></Card>;
};
