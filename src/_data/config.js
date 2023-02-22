// Config for the entire site.
module.exports = {
  // Site title.
  title: "Atin Suri",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Atin Suri.",

  // Site URLs.
  baseUrl: "https://www.atinsuri.me/", // No slash at the end.
  shortBaseUrl: "www.atinsuri.me", // Same as baseUrl but without http or https.

  // Your name.
  name: "Atin Suri",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadavSlow.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Chief Experientialist at The Experiential Hub",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Website",
      desc: "atinsuri.me",
      url: "https://www.atinsuri.me",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Work",
      desc: "atin@theexperientialhub.com",
      url: "mailto:theexperientialhub.com",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "Twitter",
      desc: "@suri_atin",
      url: "https://twitter.com/suri_atin",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
    },
    {
      name: "LinkedIn",
      desc: "Atin Suri",
      url: "https://www.linkedin.com/in/atin-suri-8b00a651/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
       {
      name: "Instagram",
      desc: "@patin.suri.bonzo",
      url: "https://www.instagram.com/atin.suri.bonzo/,
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/pankajcontact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
