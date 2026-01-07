module.exports = function (eleventyConfig) {
  // Copy everything in /public to the site root at build time
  // public/styles/main.css -> _site/styles/main.css
  // public/images/...      -> _site/images/...
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
