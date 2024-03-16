import { Head } from './head';
import { Navbar } from './navbar';

export const HtmlLayout = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <html lang="en">
      <Head title={title} />
      <body>{children}</body>
    </html>
  );
};
