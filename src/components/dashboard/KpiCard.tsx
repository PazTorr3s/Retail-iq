import { Card, CardContent } from "../../components/ui/card";
import { cn } from "@/src/lib/utils";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

type Trend = {
  value: string;
  direction: "up" | "down";
};

type KpiCardProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  trend?: Trend;
  variant?: "default" | "danger";
};

export function KpiCard({
  label,
  value,
  icon,
  trend,
  variant = "default",
}: KpiCardProps) {
  return (
    <Card>
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {label}
          </span>
          {icon}
        </div>

        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">
            {value}
          </span>

          {trend && (
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium",
                trend.direction === "up"
                  ? "text-green-600"
                  : "text-red-600"
              )}
            >
              {trend.direction === "up" ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {trend.value}
            </div>
          )}
        </div>

        {variant === "danger" && (
          <div className="flex items-center gap-1 text-xs text-red-600">
            <AlertTriangle size={14} />
            Attention required
          </div>
        )}
      </CardContent>
    </Card>
  );
}
