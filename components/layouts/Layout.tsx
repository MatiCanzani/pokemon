import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui/index';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Mati Canzani' />
        <meta name='description' content={`Info about Pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Info about ${title}`} />
        <meta
          property='og:description'
          content={`This is the page about ${title}`}
        />
        <meta
          property='og:image'
          content={`${origin}/img/banner.jpg`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0x 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
