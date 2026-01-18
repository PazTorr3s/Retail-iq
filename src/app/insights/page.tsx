import { getBaseUrl } from "@/src/lib/getBaseUrl";
import { Topbar } from "@/src/components/layout/Topbar";
import { Insight } from "@/src/types/insight";
import { InsightsClient } from "@/src/components/insights/InsightClients";

async function getInsights(): Promise<Insight[]> {
    const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/insights`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch insights");
  }

  return res.json();
}

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <>
      <Topbar title="Insights" />
      <InsightsClient insights={insights} />
    </>
  );
}
