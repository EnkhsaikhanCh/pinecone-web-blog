import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Trending />
      <Card />
    </div>
  );
}
