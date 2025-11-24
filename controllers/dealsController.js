import Deal from "../models/Deal.js";
import { generateAffiliateLink } from "../utils/affiliate.js";

export async function getDeals(req, res) {
  const deals = await Deal.find();

  const enhancedDeals = deals.map((deal) => ({
    ...deal._doc,
    affiliate: generateAffiliateLink(deal.title)
  }));

  res.json({ items: enhancedDeals });
}
