const en = {
  portal: {
    title: 'OneFlow',
    description: 'OneFlow is an integrated cross-border payment tool',
    contactUs: 'Contact Us',
    earlyAccess: 'Early Access',
  },
  themeToggle: {
    label: 'Theme Toggle',
    light: 'Light Theme',
    dark: 'Dark Theme',
    system: 'System Theme',
  },
  brand: 'OneFlow',
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    contactUs: 'Contact Us',
    login: 'Login',
    earlyAccess: 'Early Access?',
    earlyAccessOK: 'Let’s Start!',
  },
  earlyAccess: {
    questionnaire: {
      submit: 'Submit',
      title: 'Questionnaire',
      description:
        'We would like to know more about your business to provide you with tailored solutions.',
      help: 'Do you think OneFlow helps your business to some extent?',
      how: {
        title:
          'How do you choose a third-party payment provider when doing business?',
        options: [
          {
            value: 'platform',
            label: 'Based on available options on the platform',
          },
          {
            value: 'research',
            label: 'Based on market research and comparison',
          },
          {
            value: 'recommendation',
            label: 'Based on recommendations from friends or partners',
          },
          { value: 'sales', label: 'Communicating with salespeople' },
          { value: 'others', label: 'Others' },
        ],
      },
      experience: {
        title: 'If so, how would you rate your experience with OneFlow? (1-5)',
        mapping: {
          1: 'Very bad',
          2: 'Bad',
          3: 'Average',
          4: 'Good',
          5: 'Very good',
        },
      },
      pay: 'Are you willing to pay for OneFlow?',
      amount: {
        title:
          'If yes, how much would you be willing to pay for OneFlow? (RMB/month)',
        options: [
          { value: '20', label: 'Less than 20' },
          { value: '40', label: 'Less than 40' },
          { value: '60', label: 'Less than 60' },
          { value: 'above', label: 'More than 60' },
        ],
      },
      additional:
        'What additional services would you like to see on OneFlow? How can we further improve?',
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
      goOn: 'Go on',
    },
    ok: {
      title: 'Thank you for your interest!',
      description:
        'We will get back to you soon. Save this page to check your status later.',
      information: {
        title: 'Here is your submission information',
        description: 'Click the button below to save the page link',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        status: 'Status',
      },
      cta: 'Got it! Save the page link',
    },
    run: {
      checkResults: 'Check Results',
      letsGo: 'Let’s Go!',
    },
    note: 'OneFlow is currently in product development stage! We are publicly looking for first-stage internal testers to help shape the future of OneFlow.',
    title: 'We invite you to join our Early Access Program!',
    description:
      'Please fill in the information below, and you will have the chance to become one of the first batch of internal testers of OneFlow.',
    benefits: {
      title: 'Benefits of Being a Beta Tester',
      list: [
        'Free access to OneFlow products and more exclusive offers',
        'First-time updates on each new feature',
        'Free consultation from experts in the cross-border payment field',
      ],
    },
    responsibilities: {
      title: 'Responsibilities of Beta Testers',
      list: ['Provide honest and reliable feedback for product demos'],
    },
    interested:
      'If you are interested, please fill out the form below. We will provide a quick product demo. What are you waiting for?',
    form: {
      basicInformation: {
        title: 'Basic Information',
        tooltip:
          'We need some basic information to contact you in the future. We will not use your information for other purposes or send you spam.',
      },
      financialInformation: {
        title: 'Financial Information',
        tooltip:
          'We need some information to provide you with tailored cross-border payment services. We will not use your information for other purposes.',
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
        placeholder: 'ACME Company',
      },
      phone: {
        label: 'Phone',
        placeholder: '1234567890',
      },
      averageMonthlyCashFlow: {
        label: 'Average Monthly Cash Flow (required)',
        placeholder: '100,000',
        required_error: 'Average monthly cash flow is required.',
      },
      withdrawFeeRange: {
        label: 'Acceptable Withdrawal Fee Range (required)',
        placeholderMin: '0',
        placeholderMax: '2.5',
        unit: '%',
        tooltip:
          'What range of withdrawal fees can you accept? We will provide you with tailored solutions based on your needs.',
      },
      withdrawSpeedRange: {
        label: 'Acceptable Withdrawal Speed Range (required)',
        placeholderMin: '1',
        placeholderMax: '7',
        unit: 'days',
        tooltip: 'How many days do you expect to receive withdrawals?',
      },
      customerServices: {
        label: 'Customer Services',
        placeholder: '24/7 support, etc.',
        options: [
          { value: '24/7', label: '24/7 Support' },
          { value: 'fx', label: 'FX Exchange' },
          { value: 'marketing-tools', label: 'Marketing Tools' },
          { value: 'tax-refund', label: 'Export Tax Refund' },
          { value: 'business-card-service', label: 'Business Card Service' },
          { value: 'payment-tracking', label: 'Payment Tracking' },
          { value: 'overseas-logistics', label: 'Overseas Logistics' },
          { value: 'vat-service', label: 'VAT Service' },
          { value: 'loyalty-rewards', label: 'Loyalty Rewards' },
          { value: 'financing-service', label: 'Financing Service' },
          { value: 'product-sourcing', label: 'Product Sourcing' },
        ],
      },
      theMostConcerned: {
        label: 'What do you care about most?',
        placeholder: 'Cost, speed, security, etc.',
        options: [
          { value: 'cost', label: 'Cost (Withdrawal Fee)' },
          { value: 'speed', label: 'Speed (Withdrawal Speed)' },
          { value: 'security', label: 'Security (Risk Management)' },
          { value: 'customer-service', label: 'Customer Service' },
          { value: 'compliance', label: 'Compliance Management' },
          { value: 'other', label: 'Others' },
        ],
      },
      currentGateway: {
        label: 'What payment channels are you currently using?',
        placeholder: 'PayPal, Alipay, etc.',
      },
      currentRate: {
        label: 'What is your current cross-border payment rate?',
        placeholder: '2.9% + $0.30',
      },
      businessType: {
        label: 'Business Type',
        placeholder: 'E-commerce, online education, etc.',
      },
      businessCoverage: {
        label: 'Business Coverage',
        placeholder: 'China, USA, UK, etc.',
        options: [
          { value: 'china', label: 'China 🇨🇳' },
          { value: 'us', label: 'USA 🇺🇸' },
          { value: 'uk', label: 'UK 🇬🇧' },
          { value: 'jp', label: 'Japan 🇯🇵' },
          { value: 'kr', label: 'South Korea 🇰🇷' },
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
          { value: 'other', label: 'Others' },
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
          { value: 'other', label: 'Others' },
        ],
      },
      provideMoreInformation: {
        title: 'Provide More Information',
        tooltip:
          'Please provide more information about your business so that we can better understand your needs and provide you with more accurate services.',
      },
      submit: 'Submit',
      submit_success: 'Thank you for your interest! We will contact you soon.',
      submit_error:
        'Submission failed, please make sure all fields are filled correctly and try again.',
      next: 'Next',
    },
  },
  landing: {
    earlyAccess: {
      title: 'We are looking for Early Access users!',
      description:
        'Click the button below, fill out the form, and we will get back to you soon.',
    },
    splash: {
      header: 'One-stop Cross-border Integrated Payment Tool',
      subheader:
        'OneFlow is dedicated to solving various pain points encountered in cross-border payment for cross-border merchants. With our OneFlow payment assistant, you can recommend the most suitable payment gateway based on your business situation, characteristics, and preferences, and provide customized solutions. Through powerful APIs and models, we provide an extremely smooth payment experience for many merchants.',
      slogan: 'Find the most suitable payment channel for you',
    },
    cta: 'Get Started',
    content: {
      title: 'Say Goodbye to Cross-border Payment Troubles',
      description:
        'Unlock the unknown potential of your business with OneFlow.',
      cards: {
        findYourBestMatch: {
          title: 'Find the Best Match for Each Payment in Real Time',
          description:
            'No more headaches about choosing the right cross-border payment method with numerous options and complex pricing and service plans.',
          content:
            'Facing countless options and complex pricing plans. OneFlow simplifies this process by providing personalized insights and recommendations. Our extensive database and advanced algorithms help you make wise financial decisions that suit your unique needs.',
          cta: 'Learn More',
        },
        itJustWorks: {
          title: 'Intuitively Discover Growth Potential You Never Knew Existed',
          description:
            'Don’t miss out on potential business growth opportunities you may not have realized.',
          content:
            'Think your current cross-border payment method is enough? Think again. OneFlow reveals business growth opportunities you may not have realized. Our tools are designed to optimize your cross-border payment process, opening new avenues for efficiency and success. Trust OneFlow to uncover untapped potential and change the way you handle payments.',
          cta: 'Learn More',
        },
        howMuch: {
          title: 'Affordable – Save More with OneFlow',
          description: 'Save Costs with OneFlow',
          content:
            'OneFlow offers an affordable SaaS solution aimed at providing exceptional value. We ensure our tools not only fit your budget but also help you save costs. With transparent pricing and cost-saving features, OneFlow is a worthwhile investment that reduces unnecessary expenses by optimizing the cross-border payment process.',
          cta: 'Learn More',
        },
      },
      cta: 'Get Started',
      numberTicker: {
        title: 'Collecting Over ...',
        description:
          'We collect information from over 15 payment gateways and provide you with the best real-time choices.',
        footer: 'Real-time Payment Gateway Information',
      },
      howWeHelp: 'How OneFlow Helps You?',

      solution1: {
        title: 'Discover the Best You Never Knew',
        description:
          'OneFlow helps you discover the best payment gateway for your business among the countless options available.',
      },
      solution2: {
        title: 'Integrate Cross-border Payments',
        description:
          'OneFlow handles all your cross-border payment needs in one place.',
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
      forgotPassword: 'Forgot Password?',
      orContinueWith: 'Or Continue With',
    },
    login: {
      header: 'Welcome Back',
      subheader: 'Enter your email to sign into your account',
      createAccount: 'Don’t have an account? Sign Up',
    },
    register: {
      header: 'Sign Up Now!',
      subheader: 'Enter your email to create your account',
      haveAccount: 'Already have an account? Sign In',
    },
    forgotPassword: {
      header: 'Forgot Password?',
      subheader: 'Enter your email to reset your password',
      rememberPassword: 'Remembered your password?',
      signInHere: 'Sign In Here',
    },
  },
  footer: {
    builtBy: 'Built by the OneFlow team',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contactUs: 'Contact Us',
    allRightsReserved: '© 2024 OneFlow. All rights reserved.',
  },
};

export default en;

export type Dictionary = typeof en;
