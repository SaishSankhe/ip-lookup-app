import Head from 'next/head';

export default function LinkPreview() {
  return (
    <Head>
      <title>IP Lookup</title>
      <meta property="og:url" content="ip-lookup-saish.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="IP Lookup" />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content="Get information about any IP address, domain or email."
      />
      <meta property="og:image" content={'preview.png'} />
      <meta property="og:image:alt" content="IP lookup app" />
    </Head>
  );
}
