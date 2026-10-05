import type { Metadata } from "next";
import CityPageView from "@/components/sections/CityPageView";
import { cityMetadata } from "@/lib/cities";

export const metadata: Metadata = cityMetadata("vence");

export default function Page() {
  return <CityPageView slug="vence" />;
}
