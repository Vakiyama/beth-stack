export const Head = ({ title }: { title: string }) => {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
      {process.env.IS_DEV && <script type="text/javascript" src="/public/js/devReload.js" />}
      {/* // roboto if you'd like to include it
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      */}
      <script src="https://unpkg.com/htmx.org@1.9.10"></script> {/* htmx */}
      <link rel="stylesheet" href={`/public/output.css`} /> {/* tailwind */}
    </head>
  );
};
