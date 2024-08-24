import type { NextPage } from 'next';
import Head from 'next/head';

const TermsOfService: NextPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 px-6 py-12 lg:px-32'>
      <Head>
        <title>Terms of Service - OneFlow</title>
      </Head>
      <main className='rounded-lg bg-white p-8 shadow-md'>
        <h1 className='mb-6 text-3xl font-bold'>
          Terms of Service for OneFlow
        </h1>
        <p className='mb-4'>
          <strong>Effective Date:</strong> July 1, 2024
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>1. Acceptance of Terms</h2>
        <p className='mb-6'>
          By using OneFlow, you agree to these Terms of Service. If you do not
          agree, please do not use our services.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          2. Description of Service
        </h2>
        <p className='mb-6'>
          OneFlow is an SaaS helping cross-border online business to choose the
          best payment solution.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>3. User Accounts</h2>
        <p className='mb-4'>
          <strong>Registration:</strong> To access our services, you must
          register by providing your email address for quick login.
        </p>
        <p className='mb-6'>
          <strong>Responsibility:</strong> You are responsible for maintaining
          the confidentiality of your login credentials and for all activities
          that occur under your account.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>4. Use of Services</h2>
        <p className='mb-4'>
          <strong>Compliance:</strong> You agree to use OneFlow in compliance
          with all applicable laws and regulations.
        </p>
        <p className='mb-6'>
          <strong>Restrictions:</strong> You may not use OneFlow for any
          unlawful or prohibited activities.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          5. Intellectual Property
        </h2>
        <p className='mb-4'>
          <strong>Ownership:</strong> All content and materials on OneFlow,
          including text, graphics, logos, and software, are the property of
          OneFlow or its licensors and are protected by intellectual property
          laws.
        </p>
        <p className='mb-6'>
          <strong>License:</strong> You are granted a limited, non-exclusive,
          non-transferable license to use OneFlow for your personal or business
          use in accordance with these Terms of Service.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>6. Termination</h2>
        <p className='mb-6'>
          We reserve the right to terminate or suspend your account and access
          to our services at our sole discretion, without notice, for conduct
          that we believe violates these Terms of Service or is harmful to other
          users of OneFlow.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          7. Limitation of Liability
        </h2>
        <p className='mb-6'>
          OneFlow is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind. We do not warrant that the service
          will be uninterrupted, error-free, or secure.
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>8. Governing Law</h2>
        <p className='mb-6'>
          These Terms of Service are governed by and construed in accordance
          with the laws of [Insert Jurisdiction].
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>9. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions or concerns about these Terms of Service,
          please contact us at:
        </p>
        <p className='mb-4'>
          Email:{' '}
          <a className='text-blue-500 underline' href='mailto:team@one-flow.cn'>
            team@one-flow.cn
          </a>
        </p>
        <p className='mb-6'>
          Email:{' '}
          <a className='text-blue-500 underline' href='mailto:team@one-flow.cn'>
            team@one-flow.cn
          </a>
        </p>

        <h2 className='mb-4 text-2xl font-semibold'>
          10. Changes to These Terms
        </h2>
        <p className='mb-4'>
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page with an updated effective date.
        </p>
      </main>
    </div>
  );
};

export default TermsOfService;
