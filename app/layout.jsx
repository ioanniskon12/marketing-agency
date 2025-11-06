import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

export const metadata = {
  title: 'Creative Marketing Agency | Digital Solutions',
  description: 'Transform your brand with our creative marketing solutions. We specialize in digital marketing, branding, and creative campaigns.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
