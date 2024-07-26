import Head from 'next/head';
import FAQAccordion from '../components/User/FAQAccordion';

const User = () => {
  return (
    <div>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="User dashboard with FAQ" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">FAQ</h1>
        <FAQAccordion />
      </main>
    </div>
  );
};

export default User;
