import Link from 'next/link';
import Provider from './provider';

export const metadata = {
  title: 'Tatsumi Yamamoto',
  description: '山本達己のサイトです。山本達己はいつも頑張っています。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head />
      <Provider>
        <body>
          <header>
            <h1>
              <Link href='/'>ブログ</Link>
            </h1>
            <Link href='/articles/new'>記事を書く</Link>
          </header>
          {children}

          <footer>
            <small>&copy; 2023 Tatsumi Yamamoto</small>
          </footer>
        </body>
      </Provider>
    </html>
  );
}
