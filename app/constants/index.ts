// NAVIGATION
export const NAV_LINKS = [
    { href: '#home', key: 'home', label: 'Home' },
    { href: '#about-us', key: 'about-uss', label: 'About Us' },
    { href: '#how-it-works', key: 'how-it-works', label: 'How It Works' },
    { href: '#key-features', key: 'Key-features', label: 'Key Features' },
    { href: '#Get-started', key: 'Get-started', label: 'Get Started' },
    { href: '#contact-us', key: 'contact-us', label: 'Contact Us' },
  ];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Ecoflow dynamics',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['AI Learners', 'Green Technologists', 'women in Tech'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '+254-708-567-809' },
      { label: 'Email Officer', value: 'info@ecoflowdynamics.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

   // KEY FEATURES SECTION
   export const FEATURES = [
    {
      title: 'Real-Time Monitoring',
      icon: '/realtime.svg',
      variant: 'blue',
      description:
        'Our software utilizes advanced data analytics to monitor drilling operations in real-time. Key benefits include:',
      benefits: [
            'Immediate detection of inefficiencies or anomalies.', 'Proactive response capabilities to mitigate risks.',
             'Comprehensive visibility into operational performance.'
        ],
    },
    {
        title: 'Machine Learning Integration',
        icon: '/humanmachine.svg',
        variant: 'blue',
        description:
          'Leverage the power of machine learning to:',
        benefits: [
              'Predict equipment failures and schedule maintenance proactively.', 'Optimize drilling parameters for maximum efficiency.',
               'Analyze historical data to refine extraction techniques.'
          ],
      },
      {
        title: 'Environmental Impact Reduction',
        icon: '/environmental.svg',
        variant: 'blue',
        description:
          'By optimizing operations, our software helps:',
        benefits: [
              'Minimize waste and resource overuse.', 'Lower greenhouse gas emissions.',
               'Ensure compliance with environmental regulations.'
          ],
      },

      {
        title: 'Cost Efficiency',
        icon: '/costeffective.svg',
        variant: 'blue',
        description:
          'EcoFlow Dynamics solutions drive cost efficiency by:',
        benefits: [
              'Reducing downtime through predictive maintenance.', 'Enhancing resource allocation and operational planning.',
               'Lowering overall operational costs with data-driven decisions.'
          ],
      },
  ];

  //CUSTOMER FEEDBACK

export const reviews = [
  {
      imgURL: '/customer1.jpeg',
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback: "The data-driven insights provided by EcoFlow Dynamics' software have revolutionized our decision-making process. We're now able to make informed choices that drive business growth and sustainability!"
  },
  {
      imgURL: '/customer2.svg',
      customerName: 'Lota Mongeskar',
      rating: 4.5,
      feedback: "EcoFlow Dynamics' software has significantly improved our operational efficiency. By automating routine tasks and providing real-time insights, we've been able to reduce costs and increase production output.!"
  }
];