const prismic = require("@prismicio/client");

const sm = require("./sm.json");

/**
 * @returns {import('next').NextConfig}
 */
module.exports = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    images: {
      domains: ["images.prismic.io"],
    },
  };
};
