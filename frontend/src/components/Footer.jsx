const Footer = () => {
  return (
    <div className="mt-5 mb-5">
      <p className="text-center text-decoration-underline">
        If you see an empty page, please login again since your authentication
        token may expired.{" "}
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Developed by LH-Team-2 (Nicholas S., Anjali G., Elue M.) for educational
        purpose only. Powered by{" "}
        <a
          href="https://nws.nicholastec.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          NCloud
        </a>
        . Copyrights Reserved @2023
      </p>
    </div>
  );
};

export default Footer;
