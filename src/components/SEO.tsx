import React from 'react'
import { Helmet } from 'react-helmet'
export function SEO() {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Jagdeep Singh | Debt Relief Services Since 2005</title>
      <meta
        name="title"
        content="Jagdeep Singh | Debt Relief Services Since 2005"
      />
      <meta
        name="description"
        content="Professional debt relief services to help you save up to 60% and become debt-free in 6-48 months. No upfront fees - pay only when you see results."
      />
      <meta
        name="keywords"
        content="debt relief, debt settlement, credit repair, financial freedom, debt negotiation, debt reduction, debt consolidation"
      />
      <meta name="author" content="Jagdeep Singh" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.jagdeepsingh.com/" />
      <meta
        property="og:title"
        content="Jagdeep Singh | Debt Relief Services Since 2005"
      />
      <meta
        property="og:description"
        content="Professional debt relief services to help you save up to 60% and become debt-free in 6-48 months. No upfront fees - pay only when you see results."
      />
      <meta
        property="og:image"
        content="https://uploadthingy.s3.us-west-1.amazonaws.com/aE92eSBPDt3Xp5jC7iJvtu/Juddeep_Sing_Logo.webp"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.jagdeepsingh.com/" />
      <meta
        property="twitter:title"
        content="Jagdeep Singh | Debt Relief Services Since 2005"
      />
      <meta
        property="twitter:description"
        content="Professional debt relief services to help you save up to 60% and become debt-free in 6-48 months. No upfront fees - pay only when you see results."
      />
      <meta
        property="twitter:image"
        content="https://uploadthingy.s3.us-west-1.amazonaws.com/aE92eSBPDt3Xp5jC7iJvtu/Juddeep_Sing_Logo.webp"
      />
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.jagdeepsingh.com/" />
      {/* Viewport for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}
