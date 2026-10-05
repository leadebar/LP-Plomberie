import type { Metadata } from "next";
import CityPageView from "@/components/sections/CityPageView";
import { cityMetadata } from "@/lib/cities";

export const metadata: Metadata = cityMetadata("antibes");

export default function Page() {
  return <CityPageView slug="antibes" />;
}
