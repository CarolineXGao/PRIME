import React from 'react';

const collaborators = [
  {
    name: "Orygen",
    logo: "https://media.healthdirect.org.au/images/logos/w300/orygennew_logo-3964f3.png",
    alt: "Orygen logo",
    url: "https://www.orygen.org.au"
  },
  {
    name: "University of Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/The_University_of_Melbourne_Logo.png/250px-The_University_of_Melbourne_Logo.png",
    alt: "University of Melbourne logo",
    url: "https://www.unimelb.edu.au"
  },
   {
    name: "Climate CATCH Lab",
    logo: "https://www.unimelb.edu.au/__data/assets/image/0007/4756228/varieties/thumb.png",
    alt: "Climate CATCH Lab logo",
    url: "https://www.unimelb.edu.au/climate/collaboration/climate-catch-lab"
  },
  {
    name: "Matilda Centre (University of Sydney)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU01mLySlNvgDfJU__6AxYuNMehJ7FTzqmuRk644U0WbH9nfYsqsx2W8&s",
    alt: "Matilda Centre logo",
    url: "https://www.sydney.edu.au/matilda-centre.html"
  },
  {
    name: "YACVIC",
    logo: "https://www.yacvic.org.au/assets/Uploads/Persons/_resampled/ScaleWidthWyIyNDUiXQ/YACVic-2022-logo-redRGBvert.png",
    alt: "YACVIC logo",
    url: "https://www.yacvic.org.au"
  },
  {
    name: "Museums Victoria",
    logo: "https://camd.org.au/wp-content/uploads/2023/06/MUSEUM_VIC.png",
    alt: "Museums Victoria logo",
    url: "https://museumsvictoria.com.au"
  },
  {
    name: "headspace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Headspace_organisation_logo.jpg/500px-Headspace_organisation_logo.jpg",
    alt: "headspace logo",
    url: "https://headspace.org.au"
  },
  {
    name: "Psychology for a Safe Climate",
    logo: "https://cdn.prod.website-files.com/66cd274b33c44e807584831d/68c7576e2646441b0d7165bb_PSC-LogoPattern-Horizontal_Green.svg",
    alt: "Psychology for a Safe Climate logo",
    url: "https://www.psychologyforasafeclimate.org"
  },
  {
    name: "Mission Australia",
    logo: "https://www.includeacharity.com.au/wp-content/uploads/2022/02/MA-MasterLogo-POS-CMYK-FA.png",
    alt: "Mission Australia logo",
    url: "https://www.missionaustralia.com.au"
  },
  {
    name: "STTOP",
    logo: "https://sttop2030.com/media/site/56edc6627f-1710994515/sttop_logo_black.png",
    alt: "STTOP logo",
    url: "https://sttop2030.com/"
  },
  {
    name: "Blue Minds",
    logo: "https://blueminds.org.au/cdn/shop/files/blue_minds_social_logo.png?v=1721267800&width=420",
    alt: "Blue Minds logo",
    url: "https://blueminds.org.au"
  },
  {
    name: "CIRCLE at Stanford Psychiatry",
    logo: "https://circle.sites.stanford.edu/sites/g/files/sbiybj30351/files/styles/breakpoint_2xl_2x/public/media/image/10.jpg.webp?itok=55_X7BA0",
    alt: "CIRCLE logo",
    url: "https://circle.sites.stanford.edu"
  }
];

const Collaborators = () => (
  <section className="py-12 bg-gray-100" aria-labelledby="collaborators-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 id="collaborators-heading" className="text-center text-lg font-semibold text-gray-600 mb-8">
        Collaborating with leading organisations
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {collaborators.map(({ name, logo, alt, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border-2 border-gray-200 rounded-lg p-6 text-center h-40 flex flex-col justify-between hover:border-[#2D6AA3] hover:border-opacity-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2D6AA3] focus:ring-offset-2"
            aria-label={`Visit ${name} website (opens in new tab)`}
          >
            <div className="flex-1 flex items-center justify-center">
              {logo ? (
                <img src={logo} alt="" className="max-h-16 object-contain mx-auto" />
              ) : (
                <div className="w-full h-12 bg-gray-300 rounded" aria-hidden="true"></div>
              )}
            </div>
            <p className="text-xs text-gray-600 font-medium mt-3">{name}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Collaborators;
