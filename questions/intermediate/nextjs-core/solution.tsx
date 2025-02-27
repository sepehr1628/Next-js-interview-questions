// Question 4: What is Incremental Static Regeneration (ISR), and how does it work?

//Explanation : When the page is first loaded, time variable is generated. If another user visits the page within 10 seconds, they see the same pre-generated version.

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => ({
  props: { time: new Date().toISOString() },
  revalidate: 10, // Rebuild every 10 seconds
});

///////////////////////////////////////////////////////////////////////////////////////////

// Question 5: How do you create a new page in Next.js?

// about/page.tsx
export default function About() {
  return <h1>About Page</h1>;
}

// access url: `/about`
