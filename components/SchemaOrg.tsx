
// components/SchemaOrg.tsx
export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionCompany',
    name: 'Mutiks Grassroots Investments',
    alternateName: 'Mutiks Construction',
    url: 'https://mutiks.africa',
    logo: 'https://mutiks.africa/logo.png',
    image: 'https://mutiks.africa/og-image.jpg',
    description: 'Premium construction and infrastructure authority specializing in prefabricated containers, steel structures, modular classrooms, and institutional execution.',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Harare',
        addressRegion: 'Harare',
        addressCountry: 'ZW',
        streetAddress: 'Wheeldon Borrowdale 436',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Gaborone',
        addressRegion: 'Gaborone',
        addressCountry: 'BW',
        streetAddress: '30481 Gaborone Block 8',
      },
    ],
    telephone: ['+263783372825', '+26771234567', '+27111234567'],
    email: 'projects@mutiks.africa',
    sameAs: [
      'https://www.facebook.africa/mutiksconstruction',
      'https://www.linkedin.africa/company/mutiks-grassroots-investments',
    ],
    foundingDate: '2008',
    founder: {
      '@type': 'Person',
      name: 'Founder Name',
    },
    areaServed: ['Zimbabwe', 'Botswana', 'South Africa', 'Southern Africa'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prefabricated Container Structures',
            description: 'Rapid-deployment container classrooms, medical facilities, and institutional buildings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Steel Structural Systems',
            description: 'Engineered steel frames for commercial and industrial buildings.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Street Lighting Installation',
            description: 'Complete street and infrastructure lighting systems.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Construction',
            description: 'Premium residential housing and apartment complexes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Construction',
            description: 'Office blocks, retail centers, and commercial developments.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '45',
    },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$',
    keywords: 'construction company, prefabricated containers, steel structures, modular classrooms, street lighting, commercial construction',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}