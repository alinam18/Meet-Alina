const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy everything in /public to the site root at build time
  // public/styles/main.css -> _site/styles/main.css
  // public/images/...      -> _site/images/...

  eleventyConfig.addFilter("dateFilter", (dateStr) => {
    // Parse the date from your JSON: "2026-02-15 11:36:55"
    const dateObj = DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm:ss");
    
    const day = dateObj.day;

    // Logic to determine the suffix
    let suffix = "th";
    if (day % 10 === 1 && day !== 11) suffix = "st";
    else if (day % 10 === 2 && day !== 12) suffix = "nd";
    else if (day % 10 === 3 && day !== 13) suffix = "rd";

    // Format: Day + Suffix + Month + 'Year
    // Result example: 1st March '26 or 22nd June '26
    return `${day}${suffix} ${dateObj.toFormat("MMMM yyyy")}`;
  });
  
  eleventyConfig.addPassthroughCopy({ public: "." });

  return {
    dir: {
      input: "src",
      includes: "_includes",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    pathPrefix: "/Meet-Alina/",


    // If deploying to GitHub Pages at /Meet-Alina/, UNCOMMENT this:
    // pathPrefix: "/Meet-Alina/",
  };
};
