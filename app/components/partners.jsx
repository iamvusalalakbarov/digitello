import Heading from "./heading";

export default function Partners({ className }) {
  return (
    <div className={className}>
      <Heading className="mb-14">Partners</Heading>
      <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-16 gap-y-8 opacity-70">
        <li>
          <img src="/partner-logos/spotify-logo.png" alt="Spotify Logo" />
        </li>
        <li>
          <img src="/partner-logos/microsoft-logo.png" alt="Microsoft Logo" />
        </li>
        <li>
          <img src="/partner-logos/google-logo.png" alt="Google Logo" />
        </li>
        <li>
          <img src="/partner-logos/dribbble-logo.png" alt="Dribbble Logo" />
        </li>
        <li>
          <img src="/partner-logos/webflow-logo.png" alt="Webflow Logo" />
        </li>
      </ul>
    </div>
  );
}
