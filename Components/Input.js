import { useRouter } from 'next/router';

export default function Input() {
  const router = useRouter();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const domainRegex =
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const input = event.target.ipAddress.value;

    if (input) {
      if (emailRegex.test(input)) {
        router.push(`?email=${input}`);
      } else if (ipRegex.test(input)) {
        router.push(`?ip=${input}`);
      } else if (domainRegex.test(input)) {
        router.push(`?domain=${input}`);
      }
    } else router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        id="ip-address"
        name="ipAddress"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <img src="/icon-arrow.svg" alt="right arrow icon" />
      </button>
    </form>
  );
}
