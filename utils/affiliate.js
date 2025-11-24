export function generateAffiliateLink(productName) {
  const encoded = encodeURIComponent(productName);
  const amazonTag = process.env.AMAZON_TAG;

  return {
    amazon: `https://www.amazon.com/s?k=${encoded}&tag=${amazonTag}`,
    ebay: `https://www.ebay.com/sch/i.html?_nkw=${encoded}`,
    temu: `https://www.temu.com/search_result.html?search_key=${encoded}`,
    aliexpress: `https://www.aliexpress.com/wholesale?SearchText=${encoded}`
  };
}
