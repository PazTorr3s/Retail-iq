import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Insight, InsightType } from "@/src/types/insight";
import { TrendingUp, AlertTriangle, Sparkles } from "lucide-react";

const typeMap: Record<
  InsightType,
  {
    label: string;
    icon: React.ElementType;
  }
> = {
  opportunity: {
    label: "Opportunity",
    icon: TrendingUp,
  },
  alert: {
    label: "Alert",
    icon: AlertTriangle,
  },
  insight: {
    label: "Insight",
    icon: Sparkles,
  },
};

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  const Icon = typeMap[insight.type].icon;

  return (
    <Card>
      <CardContent className="p-5 space-y-3 ">
        <div className="flex items-center justify-between">
          <Icon className="text-muted-foreground" />
          <Badge variant={insight.severity}>
            {typeMap[insight.type].label}
          </Badge>
        </div>

        <div>
          <h3 className="font-semibold">{insight.title}</h3>
          <p className="text-sm text-muted-foreground">
            {insight.description}
          </p>
        </div>

        <div className="text-sm font-medium">{insight.metric}</div>

        <button className="text-sm text-primary hover:underline">
          View details →
        </button>
      </CardContent>
    </Card>
  );
}
