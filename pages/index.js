import Input from '@/Components/Input';
import Info from '@/Components/Info';
import dynamic from 'next/dynamic';
import Footer from '@/Components/Footer';
import LinkPreview from '@/Components/LinkPreview';

const Map = dynamic(() => import('../Components/Map'), { ssr: false });

export async function getServerSideProps(context) {
  // const requestUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=';

  // const fetchUrl = returnFetchUrl(context.query, requestUrl);

  // const data = await fetch(fetchUrl);

  // const info = await data.json();

  // if (info.code) {
  //   // send empty state data when api errors
  //   const info = {
  //     ip: '-',
  //     location: {
  //       region: '-',
  //       city: '-',
  //       lat: 0,
  //       lng: 0,
  //       postalCode: '-',
  //       timezone: '-',
  //     },
  //     isp: '-',
  //   };

  //   return {
  //     props: {
  //       info,
  //     },
  //   };
  // }

  // return {
  //   props: {
  //     info,
  //   },
  // };

  // dummy data for UI
  const info = {
    ip: '71.127.206.36',
    location: {
      country: 'US',
      region: 'New Jersey',
      city: 'Newark',
      lat: 40.73566,
      lng: -74.17237,
      postalCode: '07101',
      timezone: '-05:00',
      geonameId: 5101798,
    },
    as: {
      asn: 701,
      name: 'UUNET',
      route: '71.127.192.0/18',
      domain: 'https://www.verizon.com/business/',
      type: 'NSP',
    },
    isp: 'Verizon Business',
  };

  // dummy error data
  // const info = {
  //   ip: '-',
  //   location: {
  //     region: '-',
  //     city: '-',
  //     lat: 0,
  //     lng: 0,
  //     postalCode: '-',
  //     timezone: '-',
  //   },
  //   isp: '-',
  // };

  return {
    props: {
      info,
    },
  };
}

export default function Home({ info }) {
  return (
    <>
      <LinkPreview />
      <main>
        <section className="top-section">
          <h1>IP Address Tracker</h1>
          <div className="content-wrapper">
            <Input />
            {info.ip === '-' ? (
              <p className="error-card">
                Please enter correct IP address, domain or email.
              </p>
            ) : (
              <></>
            )}
            <Info info={info} />
          </div>
        </section>
        <section className="bottom-section">
          <div id="map">
            <Map location={info.location} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const returnFetchUrl = (query, requestUrl) => {
  const { ip, domain, email } = query;

  if (email) {
    return requestUrl + process.env.API_KEY + '&email=' + email;
  } else if (domain) {
    return requestUrl + process.env.API_KEY + '&domain=' + domain;
  } else if (ip) {
    return requestUrl + process.env.API_KEY + '&ipAddress=' + ip;
  } else {
    return requestUrl + process.env.API_KEY;
  }
};
