const en = {
  portal:{
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
    note: 'Sorry! we are not ready for all users yet. Please fill out the form below to join our early access program.',
    title: 'We invite you to join our early access program!',
    description:
      'We are looking for early access users to help us shape the future of OneFlow. You will have the opportunity to provide feedback and gain value directly from our team. Also, you will be the first to experience our new features and updates.  Nonetheless, you will have the potential to receive exclusive offers and discounts. If you are interested, please fill out the form below, and we will provide you a quick demo and get you started as soon as possible.',
    form: {
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
        label: 'Company',
        placeholder: 'Your Company',
      },
      phone: {
        label: 'Phone',
        placeholder: 'Your Phone',
      },
      submit: 'Submit',
      submit_success:
        'Thank you for your interest! We will get back to you as soon as possible.',
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
