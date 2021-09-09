import '../styles/globals.css';
import Layout, { siteTitle } from '../components/Layout.js';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout>
      <Layout layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
