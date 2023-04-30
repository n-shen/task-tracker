const Footer = () => {
  return (
    <div className="mt-5 mb-5">
      <p className="text-center text-decoration-underline">
        If you see an empty page, please login again since your authentication
        token may expired.{" "}
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Developed by{" "}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vST-CII2b4CxgqApqwRXySUtCcDzQNP_VXymKHIq6wRShxwX7QxuWheb5A-dkVolO-O-waCXSuGe9w8/pub"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          Team-2
        </a>{" "}
        for educational purpose only. Powered by{" "}
        <a
          href="https://shen.dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          Nicholas Shen
        </a>
        . Copyrights Reserved @2023
      </p>
    </div>
  );
};

export default Footer;
