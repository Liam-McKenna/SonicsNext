import '../styles/globals.css';
import Layout, { siteTitle } from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
