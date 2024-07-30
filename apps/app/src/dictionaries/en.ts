const en = {
  portal: {
    title: 'OneFlow',
    description: 'OneFlow is a consolidated payment collection tool',
    contactUs: 'Contact Us',
    earlyAccess: 'Early Access',
  },
  themeToggle: {
    label: 'Theme Toggle',
    light: 'Light Mode',
    dark: 'Dark Mode',
    system: 'System Mode',
  },
  brand: 'OneFlow',
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    login: 'Login',
    earlyAccess: 'Early Access?',
    earlyAccessOK: "Let's Go!",
  },
  earlyAccess: {
    questionnaire: {
      submit: 'Submit',
      title: 'Questionnaire',
      description:
        'We would like to know more about your business to provide you with the best solution.',
      help: 'Do you think OneFlow help with your business to some extent?',
      how: {
        title:
          'How do you select your Third Party Payment Provider when doing business?',
        options: [
          {
            value: 'platform',
            label: 'Based on availability options on the platform',
          },
          {
            value: 'research',
            label: 'Based on market research and comparison',
          },
          {
            value: 'recommendation',
            label: 'Based on recommendation from friends or partners',
          },
          { value: 'sales', label: 'Communicate with sales' },
          { value: 'others', label: 'Others' },
        ],
      },
      experience: {
        title: 'If Yes, Rate Your Experience with OneFlow (1-5)',
        mapping: {
          1: 'Very Bad',
          2: 'Bad',
          3: 'Average',
          4: 'Good',
          5: 'Very Good',
        }
      },
      pay: 'Are you willing to pay for OneFlow?',
      amount: {
        title:
          'If Yes, How much are you willing to pay for OneFlow? (CNY/month)',
        options: [
          { value: '20', label: 'less than $20' },
          { value: '40', label: 'less than $40' },
          { value: '60', label: 'less than $60' },
          { value: 'above', label: 'above $60' },
        ],
      },
      additional:
        'What additional service do you want to see on OneFlow? How can we further improve?',
    },
    results: {
      title: 'Results',
      description: 'Here is the best solution for you!',
      youShouldChoose: 'You should choose',
      asYourPaymentGateway: 'as your payment gateway',
      youWillPay: 'You will pay',
      ofWithdrawalFee: 'of withdrawal fee',
      andWait: 'and wait',
      forWithdrawal: 'days for withdrawal',
      youWillGet: 'You will get',
      customerService: 'customer service',
      enjoyYourBusiness: 'Enjoy your business!',
      goOn: 'Go On',
    },
    ok: {
      title: 'Thank you for your interest!',
      description:
        'We will get back to you as soon as possible. Save this page to check your status later.',
      information: {
        title: 'Here is your submission information',
        description: 'Please click the button below to save the page URL',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        status: 'Status',
      },
      cta: 'Got it! Save the page URL',
    },
    run: {
      checkResults: 'Check Results!',
      letsGo: "Let's Go!",
    },
    note: 'Sorry! we are not ready for all users yet. Please fill out the form below to join our early access program.',
    title: 'We invite you to join our early access program!',
    description:
      'We are looking for early access users to help us shape the future of OneFlow. You will have the opportunity to provide feedback and gain value directly from our team. Also, you will be the first to experience our new features and updates.  Nonetheless, you will have the potential to receive exclusive offers and discounts. If you are interested, please fill out the form below, and we will provide you a quick demo and get you started as soon as possible.',
    form: {
      basicInformation: {
        title: 'Basic Information',
        tooltip:
          'We need some basic information to reach out to you in the future. We will not use your information for any other purposes or spam you.',
      },
      financialInformation: {
        title: 'Financial Information',
        tooltip:
          'We need some information to provide you with the best payment collection service. We will not use your information for any other purposes.',
      },
      name: {
        label: 'Name',
        placeholder: 'Your Name',
      },
      email: {
        label: 'Email (required)',
        placeholder: 'email@example.com',
        invalid_type_error: 'Email is required',
        required_error: 'Email is required.',
        invalid_email_error: 'Invalid email.',
      },
      country: {
        label: 'Country',
        placeholder: 'Your Country',
      },
      company: {
        label: 'Company Name',
        placeholder: 'ACME Inc.',
      },
      phone: {
        label: 'Phone',
        placeholder: '1234567890',
      },
      businessType: {
        label: 'Business Type',
        placeholder: 'E-commerce, Online Education, etc.',
      },
      averageMonthlyCashFlow: {
        label: 'Average Monthly Cash Flow (required)',
        placeholder: '100,000',
        required_error: 'Average Monthly Cash Flow is required.',
      },
      withdrawFeeRange: {
        label: 'Acceptable Withdraw Fee Range (required)',
        placeholderMin: '0',
        placeholderMax: '2.5',
        unit: '%',
        tooltip:
          'How much percentage of the withdrawal fee are you willing to pay?',
      },
      withdrawSpeedRange: {
        label: 'Acceptable Withdraw Speed Range (required)',
        placeholderMin: '1',
        placeholderMax: '7',
        unit: 'days',
        tooltip: 'How many days are you willing to wait for the withdrawal?',
      },
      customerServices: {
        label: 'Customer Service',
        placeholder: '24/7 Support, etc.',
        options: [
          { value: '24/7', label: '24/7 Support' },
          { value: '9/5', label: '9/5 Support' },
          { value: 'response-time', label: 'Response Time' },
          { value: 'analytics', label: 'Analytics and Reporting Tools' },
          { value: 'loyalty', label: 'Loyalty Programs' },
          { value: 'integration', label: 'Integration Support' },
          { value: 'security', label: 'Security Risk Management' },
          { value: 'compliance', label: 'Compliance Management' },
        ],
      },
      theMostConcerned: {
        label: 'Which of the following is your most concerned?',
        placeholder: 'Cost, Speed, Security, etc.',
        options: [
          { value: 'cost', label: 'Cost (Fees)' },
          { value: 'speed', label: 'Speed (Withdrawal Time)' },
          { value: 'security', label: 'Security (Risk Management)' },
          { value: 'customer-service', label: 'Customer Service' },
          { value: 'compliance', label: 'Compliance' },
          { value: 'other', label: 'Other' },
        ],
      },
      businessCoverage: {
        label: 'Business Coverage',
        placeholder: 'China, US, UK, etc.',
        options: [
          { value: 'china', label: 'China 🇨🇳' },
          { value: 'us', label: 'US 🇺🇸' },
          { value: 'uk', label: 'UK 🇬🇧' },
          { value: 'jp', label: 'Japan 🇯🇵' },
          { value: 'kr', label: 'Korea 🇰🇷' },
          { value: 'sg', label: 'Singapore 🇸🇬' },
          { value: 'my', label: 'Malaysia 🇲🇾' },
          { value: 'id', label: 'Indonesia 🇮🇩' },
          { value: 'in', label: 'India 🇮🇳' },
          { value: 'th', label: 'Thailand 🇹🇭' },
          { value: 'vn', label: 'Vietnam 🇻🇳' },
          { value: 'ph', label: 'Philippines 🇵🇭' },
          { value: 'au', label: 'Australia 🇦🇺' },
          { value: 'nz', label: 'New Zealand 🇳🇿' },
          { value: 'ca', label: 'Canada 🇨🇦' },
          { value: 'mx', label: 'Mexico 🇲🇽' },
          { value: 'au', label: 'Australia 🇦🇺' },
          { value: 'other', label: 'Other' },
        ],
      },
      currency: {
        label: 'Currency',
        placeholder: 'USD, CNY, GBP, etc.',
        options: [
          { value: 'usd', label: 'USD' },
          { value: 'cny', label: 'CNY' },
          { value: 'gbp', label: 'GBP' },
          { value: 'eur', label: 'EUR' },
          { value: 'jpy', label: 'JPY' },
          { value: 'krw', label: 'KRW' },
          { value: 'sgd', label: 'SGD' },
          { value: 'myr', label: 'MYR' },
          { value: 'idr', label: 'IDR' },
          { value: 'inr', label: 'INR' },
          { value: 'thb', label: 'THB' },
          { value: 'vnd', label: 'VND' },
          { value: 'php', label: 'PHP' },
          { value: 'aud', label: 'AUD' },
          { value: 'nzd', label: 'NZD' },
          { value: 'cad', label: 'CAD' },
          { value: 'mxn', label: 'MXN' },
        ],
      },
      provideMoreInformation: {
        title: 'Provide More Information',
        tooltip:
          'Please provide more information about your business so that we can better understand your needs and provide you with the more accurate service.',
      },
      submit: 'Submit',
      submit_success:
        'Thank you for your interest! We will get back to you as soon as possible.',
      submit_error:
        'Failed to submit the form. Please make sure all fields are filled out correctly and try again later.',
      next: 'Next Step',
    },
  },
  landing: {
    earlyAccess: {
      title: 'We are looking for early access users!',
      description:
        'Click the button below, fill out the form, and we will get back to you as soon as possible.',
    },
    splash: {
      header:
        'your one-stop cross-border consolidated payment collection solution',
      subheader:
        'provides A consolidated payment collection tool designed for cross-border e-merchants to find optimal collection gateway for each single transaction with a customizable, tailor-made solution to reach your best potential with seamless experience.',
      slogan: 'Your perfect match, effortlessly found.',
    },
    cta: 'Get Started',
    content: {
      title: 'Say Goodbye to Payment Collection Overwhelm.',
      description:
        'Unlock your unknown potential of your business with OneFlow.',
      cards: {
        findYourBestMatch: {
          title: 'Find Your Perfect Match for Every Collection in Real-Time',
          description:
            'There are too many choices and complex pricing and service plans. Stop struggling with the right payment collection method.',
          content:
            'Choosing the right payment collection method can be complex with countless options and intricate pricing plans. OneFlow simplifies this process by providing personalized insights and recommendations. Our extensive database and advanced algorithms help you make informed financial decisions tailored to your unique needs.',
          cta: 'Learn More',
        },
        itJustWorks: {
          title:
            "Discover the Growth Potential You Didn't Know Existed Straightforwardly",
          description:
            'Do not miss out on business growth opportunities that you might not have realized.',
          content:
            'Think your current payment collection methods are sufficient? Think again. OneFlow uncovers opportunities for business growth that you might not have realized. Our tool is designed to optimize your payment collection process and unlock new avenues for efficiency and success. Trust in OneFlow to reveal the untapped potential and transform the way you handle payments.',
          cta: 'Learn More',
        },
        howMuch: {
          title: 'Affordable and Cost-Effective – Save More with OneFlow',
          description: 'Save money with OneFlow',
          content:
            'OneFlow offers an affordable SaaS solution designed to provide exceptional value. We ensure that our tool not only fits within your budget but also helps you save money. With transparent pricing and cost-saving features, OneFlow is an investment that pays off by optimizing your payment collection process and reducing unnecessary expenses.',
          cta: 'Learn More',
        },
      },
      cta: 'Get Started',
      numberTicker: {
        title: 'Collect over ...',
        description:
          'We collect over 15 payment gateways information and provide you with the best in real-time.',
        footer: 'Payment Gateways Real-Time Information',
      },
      beamMultiple: {
        title: 'Consolidated Payment Collection',
        description:
          'OneFlow handles all your payment collection needs in one place.',
      },
    },
  },
  auth: {
    public: {
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      forgotPassword: 'Forgot Your Password?',
      orContinueWith: 'Or continue with',
    },
    login: {
      header: 'Welcome back',
      subheader: 'Enter your email to sign in to your account',
      createAccount: "Don't have an account? Sign Up",
    },
    register: {
      header: 'Register now!',
      subheader: 'Enter your email to sign in to your account',
      haveAccount: 'Have an account? Sign In',
    },
    forgotPassword: {
      header: 'Forgot your password?',
      subheader: 'Enter your email to reset your password',
      rememberPassword: 'Remember your password?',
      signInHere: 'Sign in here',
    },
  },
  footer: {
    builtBy: 'Built by OneFlow Team',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contactUs: 'Contact Us',
    allRightsReserved: '© 2024 OneFlow. All rights reserved.',
  },
};

export default en;

export type Dictionary = typeof en;
