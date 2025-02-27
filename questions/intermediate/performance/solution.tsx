/* eslint-disable */

// Question 2 : What caching strategies exist for storing data in the browser?

// HTTP Caching (Cache-Control & CDN Caching)
import type { NextApiRequest, NextApiResponse } from "next";

export function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.json({ data: "Cached response" });
}

// ISR for page caching
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => ({
  props: { time: new Date().toISOString() },
  revalidate: 10, // Rebuild every 10 seconds
});

// Client-Side Caching with SWR (Stale-While-Revalidate)
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

const Page: React.FC = function () {
  const { data, error } = useSWR("/api/data", fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return <p>Data: {data.message}</p>;
};

export default Page;

// Service Worker & PWA Caching
import withPWA from "next-pwa";

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

// Local Storage & Session Storage Caching
import { useEffect, useState } from "react";

const [state, setState] = useState<UserData | null>(null);

useEffect(() => {
  const cachedData = localStorage.getItem("userData");
  if (cachedData) {
    setState(JSON.parse(cachedData) as UserData);
  }
}, []);
