export default function Info({ info }) {
  const locationData = info.location;

  return (
    <div className="card">
      <div className="information">
        <h2 className="title">IP ADDRESS</h2>
        <p className="big-text">{info.ip}</p>
      </div>
      <div className="information">
        <h2 className="title">LOCATION</h2>
        <p className="big-text">
          {locationData.city}, {locationData.region} {locationData.postalCode}
        </p>
      </div>
      <div className="information">
        <h2 className="title">TIMEZONE</h2>
        <p className="big-text">UTC {locationData.timezone}</p>
      </div>
      <div className="information">
        <h2 className="title">ISP</h2>
        <p className="big-text">{info.isp}</p>
      </div>
    </div>
  );
}
