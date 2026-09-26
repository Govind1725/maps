const socialIcons = {
  Facebook: "M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z",
  X: "M5 4h4l3.2 4.4L16 4h3l-5.4 6.4L20 20h-4l-3.6-4.9L8 20H5l5.7-6.8L5 4Zm3 1.5 8 13h1.2l-8-13H8Z",
  YouTube: "M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z",
  LinkedIn: "M6.5 8.3A2.3 2.3 0 1 0 6.5 3.7a2.3 2.3 0 0 0 0 4.6ZM4.5 20h4V10h-4v10Zm6.5 0h4v-5.6c0-1.5.3-3 2.2-3 1.8 0 1.8 1.8 1.8 3.1V20h4v-6.4c0-3.1-.7-5.5-4.3-5.5-1.7 0-2.9 1-3.4 1.8h-.1V10H11v10Z",
  Instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5A1.5 1.5 0 1 1 17 7a1.5 1.5 0 0 1 1.5-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
};

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media">
      {Object.entries(socialIcons).map(([name, path]) => (
        <span className="social-link" aria-label={name} key={name}>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path fill="currentColor" d={path} />
          </svg>
        </span>
      ))}
    </div>
  );
}
