const zh = {
  portal: {
    title: 'OneFlow',
    description: 'OneFlow 是一个整合的跨境收款工具',
    contactUs: '联系我们',
    earlyAccess: '提前访问',
  },
  themeToggle: {
    label: '主题切换',
    light: '浅色主题',
    dark: '深色主题',
    system: '默认主题',
  },
  brand: 'OneFlow',
  buttons: {
    getStarted: '开始使用',
    learnMore: '了解更多',
    contactUs: '联系我们',
    login: '登录',
    earlyAccess: '提前访问？',
    earlyAccessOK: '我们开始吧！',
  },
  earlyAccess: {
    questionnaire: {
      submit: '提交',
      title: '调查问卷',
      description: '我们希望了解更多关于您的业务，以便为您提供专属解决方案。',
      help: '您认为 OneFlow 在一定程度上有助于您的业务吗？',
      how: {
        title: '在做生意时，您如何选择第三方支付提供商？',
        options: [
          { value: 'platform', label: '基于平台上的可用选项' },
          { value: 'research', label: '基于市场调查和比较' },
          { value: 'recommendation', label: '基于朋友或合作伙伴的推荐' },
          { value: 'sales', label: '与销售人员沟通' },
          { value: 'others', label: '其他' },
        ],
      },
      experience: {
        title: '如果是，您对 OneFlow 的体验如何？（1-5）',
        mapping: {
          1: '非常糟糕',
          2: '糟糕',
          3: '一般',
          4: '好',
          5: '非常好',
        },
      },
      pay: '您愿意为 OneFlow 付费吗？',
      amount: {
        title: '如果是，您愿意为 OneFlow 付费吗？（人民币／月）',
        options: [
          { value: '20', label: '少于 20' },
          { value: '40', label: '少于 40' },
          { value: '60', label: '少于 60' },
          { value: 'above', label: '超过 60' },
        ],
      },
      additional: '您希望在 OneFlow 上看到哪些额外服务？我们如何进一步改进？',
    },
    results: {
      title: '结果',
      description: '这是最适合您的解决方案！',
      youShouldChoose: '您应该选择',
      asYourPaymentGateway: '作为您的支付网关',
      youWillPay: '您将支付',
      ofWithdrawalFee: '的提款费用',
      andWait: '并等待',
      forWithdrawal: '天提款',
      youWillGet: '您将获得',
      customerService: '客户服务',
      enjoyYourBusiness: '享受您的业务！',
      goOn: '继续',
    },
    ok: {
      title: '感谢您的关注！',
      description: '我们将尽快回复您。保存此页面以稍后检查您的状态。',
      information: {
        title: '这是您的提交信息',
        description: '请点击下面的按钮保存页面链接',
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        company: '公司',
        status: '状态',
      },
      cta: '明白了！保存页面链接',
    },
    run: {
      checkResults: '检查结果',
      letsGo: '开始吧！',
    },
    note: 'OneFlow 目前仍在产品研发阶段！我们正在公开寻找第一阶段的内部测试用户，帮助我们一同塑造 OneFlow 的未来。',
    title: '我们邀请您加入我们的提前访问计划！',
    description: '请填写以下信息，您将有机会成为 OneFlow 的第一批内测用户。',
    benefits: {
      title: '内测用户的好处',
      list: [
        'OneFlow 产品的免费使用权及更多独家优惠',
        '第一时间提供每次新功能的更新',
        '获得来自跨境支付领域专家的免费咨询',
      ],
    },
    responsibilities: {
      title: '内测用户的责任',
      list: ['为产品 demo 提供真实可靠的意见'],
    },
    interested:
      '如果您感兴趣，请填写以下表格，我们将提供快速产品演示，还在等什么呢？',
    form: {
      basicInformation: {
        title: '基本信息',
        tooltip:
          '我们需要一些基本信息以便将来与您联系。我们不会将您的信息用于其他目的或向您发送垃圾邮件。',
      },
      financialInformation: {
        title: '财务信息',
        tooltip:
          '我们需要一些信息，以便为您提供专属您的跨境收款服务。我们不会将您的信息用于其他目的。',
      },
      name: {
        label: '姓名',
        placeholder: '您的姓名',
      },
      email: {
        label: '电子邮件（必填）',
        placeholder: 'email@example.com',
        invalid_type_error: '电子邮件是必填项',
        required_error: '电子邮件是必填项。',
        invalid_email_error: '无效的电子邮件。',
      },
      country: {
        label: '国家',
        placeholder: '您的国家',
      },
      company: {
        label: '公司名称',
        placeholder: 'ACME 公司',
      },
      phone: {
        label: '电话',
        placeholder: '1234567890',
      },
      averageMonthlyCashFlow: {
        label: '平均月流水（必填）',
        placeholder: '100,000',
        required_error: '平均月流水是必填项。',
      },
      withdrawFeeRange: {
        label: '可接受的提款费用范围（必填）',
        placeholderMin: '0',
        placeholderMax: '2.5',
        unit: '%',
        tooltip:
          '您可以接受的提款费用范围为何？我们将根据您的需求为您提供专属解决方案。',
      },
      withdrawSpeedRange: {
        label: '可接受的提款速度范围（必填）',
        placeholderMin: '1',
        placeholderMax: '7',
        unit: '天',
        tooltip: '您希望几天内收到提款？',
      },
      customerServices: {
        label: '客户服务',
        placeholder: '24/7 支持等',
        options: [
          { value: '24/7', label: '24/7 支持' },
          { value: 'fx', label: 'FX 换汇' },
          { value: 'marketing-tools', label: '营销工具' },
          { value: 'tax-refund', label: '出口退税' },
          { value: 'business-card-service', label: '商务卡服务' },
          { value: 'payment-tracking', label: '付款追踪' },
          { value: 'overseas-logistics', label: '海外物流' },
          { value: 'vat-service', label: '增值税服务' },
          { value: 'loyalty-rewards', label: '忠诚奖励' },
          { value: 'financing-service', label: '融资服务' },
          { value: 'product-sourcing', label: '选品工具' },
        ],
      },
      theMostConcerned: {
        label: '您最关心的是以下哪个？',
        placeholder: '成本、速度、安全性等',
        options: [
          { value: 'cost', label: '成本（提款费用）' },
          { value: 'speed', label: '速度（提款速度）' },
          { value: 'security', label: '安全性（风险管理）' },
          { value: 'customer-service', label: '客户服务' },
          { value: 'compliance', label: '合规管理' },
          { value: 'other', label: '其他' },
        ],
      },
      currentGateway: {
        label: '你目前在使用的收款渠道是？',
        placeholder: 'PayPal、Alipay 等',
      },
      currentRate: {
        label: '您目前支付的跨境收款利率是多少？',
        placeholder: '2.9% + $0.30',
      },
      businessType: {
        label: '业务类型',
        placeholder: '电子商务、在线教育等',
      },
      businessCoverage: {
        label: '业务覆盖范围',
        placeholder: '中国、美国、英国等',
        options: [
          { value: 'china', label: '中国 🇨🇳' },
          { value: 'us', label: '美国 🇺🇸' },
          { value: 'uk', label: '英国 🇬🇧' },
          { value: 'jp', label: '日本 🇯🇵' },
          { value: 'kr', label: '韩国 🇰🇷' },
          { value: 'sg', label: '新加坡 🇸🇬' },
          { value: 'my', label: '马来西亚 🇲🇾' },
          { value: 'id', label: '印度尼西亚 🇮🇩' },
          { value: 'in', label: '印度 🇮🇳' },
          { value: 'th', label: '泰国 🇹🇭' },
          { value: 'vn', label: '越南 🇻🇳' },
          { value: 'ph', label: '菲律宾 🇵🇭' },
          { value: 'au', label: '澳大利亚 🇦🇺' },
          { value: 'nz', label: '新西兰 🇳🇿' },
          { value: 'ca', label: '加拿大 🇨🇦' },
          { value: 'mx', label: '墨西哥 🇲🇽' },
          { value: 'au', label: '澳大利亚 🇦🇺' },
          { value: 'other', label: '其他' },
        ],
      },
      currency: {
        label: '货币',
        placeholder: 'USD, CNY, GBP, 等',
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
          { value: 'other', label: '其他' },
        ],
      },
      provideMoreInformation: {
        title: '提供更多信息',
        tooltip:
          '请提供有关您的业务的更多信息，以便我们更好地了解您的需求并为您提供更准确的服务。',
      },
      submit: '提交',
      submit_success: '感谢您的关注！我们会尽快与您联系。',
      submit_error: '提交失败，请确保所有字段填写正确后再试。',
      next: '下一步',
    },
  },
  landing: {
    earlyAccess: {
      title: '我们正在寻找提前访问用户！',
      description: '点击下面的按钮，填写表格，我们会尽快回复您。',
    },
    splash: {
      header: '一站式跨境整合收款工具',
      subheader:
        '致力于为跨境店商用户解决跨境收款端遇到的各种痛点，通过我们打造的 OneFlow 收款小助手，可根据您的业务情况、特点、偏好，推荐最适合的收款网关，更可提供定制化的解决方案，通过强大的 API 与模型，为众多商户提供极致的流畅收款体验。',
      slogan: [
        '您的收款小助手',
        '帮你找到最适合你的收款渠道',
        '省钱、省时、省力',
      ],
    },
    cta: '开始使用',
    content: {
      title: '告别跨境收款的困扰',
      description: '用 OneFlow 解锁您业务的未知潜力。',
      cards: {
        findYourBestMatch: {
          title: '实时找到每笔收款的最佳匹配',
          description:
            '面对众多选择和复杂的定价及服务计划，不再为选择合适的跨境收款方式而烦恼。',
          content:
            '面对无数的选项和复杂的定价计划。OneFlow 通过提供个性化的见解和建议简化这一过程。我们的广泛数据库和先进算法帮助您做出符合您独特需求的明智财务决策。',
          cta: '了解更多',
        },
        itJustWorks: {
          title: '直观发现您未曾意识到的增长潜力',
          description: '不要错过可能未曾意识到的业务增长机会。',
          content:
            '认为您当前的跨境收款方式足够了吗？再想想。OneFlow 揭示了您可能未曾意识到的业务增长机会。我们的工具旨在优化您的跨境收款过程，开辟新的效率和成功途径。相信 OneFlow，将揭示未开发的潜力，改变您处理支付的方式。',
          cta: '了解更多',
        },
        howMuch: {
          title: '价格实惠 – 用 OneFlow 节省更多',
          description: '用 OneFlow 节省开支',
          content:
            'OneFlow 提供了一个价格实惠的 SaaS 解决方案，旨在提供卓越的价值。我们确保我们的工具不仅符合您的预算，还能帮助您节省开支。凭借透明的定价和节省成本的功能，OneFlow 是一个值得投资的工具，通过优化跨境收款过程来减少不必要的开支。',
          cta: '了解更多',
        },
      },
      cta: '开始使用',
      howWeHelp: '我们如何帮助您',
      numberTicker: {
        title: '收集超过 ...',
        description: '我们收集超过 15 种支付网关信息，并为您提供实时最佳选择。',
        footer: '支付网关实时信息',
      },
      solution1: {
        title: '发现您从未意识到的最佳选择',
        description: 'OneFlow 帮助您从无数的选择中找到最适合您业务的支付网关。',
      },
      solution2: {
        title: '整合跨境收款',
        description: 'OneFlow 在一个地方处理您的所有跨境收款需求。',
      },
    },
  },
  auth: {
    public: {
      email: '邮箱',
      password: '密码',
      confirmPassword: '确认密码',
      signIn: '登录',
      signUp: '注册',
      forgotPassword: '忘记密码？',
      orContinueWith: '或继续使用',
    },
    login: {
      header: '欢迎回来',
      subheader: '输入您的邮箱登录您的账户',
      createAccount: '没有账户？ 注册',
    },
    register: {
      header: '立即注册！',
      subheader: '输入您的邮箱注册您的账户',
      haveAccount: '已有账户？ 登录',
    },
    forgotPassword: {
      header: '忘记密码？',
      subheader: '输入您的邮箱以重置密码',
      rememberPassword: '记得密码？',
      signInHere: '在这里登录',
    },
  },
  footer: {
    builtBy: '由 OneFlow 团队开发',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    contactUs: '联系我们',
    allRightsReserved: '© 2024 OneFlow. 保留所有权利。',
  },
};

export default zh;
