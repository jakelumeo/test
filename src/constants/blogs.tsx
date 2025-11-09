export interface BlogSection {
    header: string;
    subheader: string;
    bulletPoints: string[];
    footer: string;
}

export interface BlogData {
    header: string;
    subheader: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    excerpt: string;
    sections: BlogSection[];
    footer: string;
}

export const BLOGS: BlogData[] = [
    {
        slug: "grocery-prices-rising-how-to-save",
        header: "Grocery Prices Are Rising: How You Can Save on Every Shopping Trip",
        subheader: "Prices at the grocery store are going up faster than ever, but with smart planning and modern tools, you can still keep your budget under control.",
        excerpt: "Prices at the grocery store are going up faster than ever, but with smart planning and modern tools, you can still keep your budget under control.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop",
        date: "March 20, 2024",
        readTime: "6 min read",
        category: "Savings Tips",
        sections: [
            {
                header: "Why Grocery Prices Are Increasing",
                subheader: "Several factors are driving the rising cost of everyday groceries:",
                bulletPoints: [
                    "Supply chain disruptions: Shipping delays and labor shortages push prices higher.",
                    "Inflation: Energy, transportation, and raw material costs impact what you pay.",
                    "Climate events: Extreme weather affects crop yields and availability.",
                    "Global demand: Growing populations and exports increase competition for essential goods."
                ],
                footer: "Understanding why prices rise helps you make informed decisions and plan smarter grocery trips."
            },
            {
                header: "How Rising Prices Affect Your Budget",
                subheader: "Even small increases add up, impacting your monthly expenses significantly.",
                bulletPoints: [
                    "A few cents per item can quickly total hundreds of extra dollars per month.",
                    "Families with large grocery lists feel the impact more.",
                    "Unplanned purchases or price fluctuations can inflate your weekly grocery bill."
                ],
                footer: "Recognizing the effect of rising prices allows you to focus on strategies that truly save you money."
            },
            {
                header: "Smart Ways to Save on Groceries",
                subheader: "You can combat rising costs with actionable strategies and tools.",
                bulletPoints: [
                    "Compare prices across stores: Use apps or visit multiple stores to find the cheapest options.",
                    "Plan your meals: Buy only what you need to avoid waste.",
                    "Use coupons and loyalty programs: Take advantage of discounts and digital offers.",
                    "Buy in bulk wisely: Only purchase what you can use before items expire.",
                    "Leverage technology: AI-powered apps like Lumeo scan receipts and identify cheaper alternatives."
                ],
                footer: "Combining planning with smart tools ensures you stay in control of your grocery budget."
            }
        ],
        footer: "Rising grocery prices don't have to break your budget. With Lumeo Finance, you can track your spending, compare prices, and save smarter on every grocery trip. Download the app today and see how much you could save!"
    },
    {
        slug: "top-3-grocery-stores-east-village-nyc",
        header: "Top 3 Grocery Stores in East Village, NYC to Save Money",
        subheader: "Finding affordable groceries in the East Village can be tricky. Here are the top three stores where you can get the best prices without compromising quality.",
        excerpt: "Finding affordable groceries in the East Village can be tricky. Here are the top three stores where you can get the best prices without compromising quality.",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&auto=format&fit=crop",
        date: "March 18, 2024",
        readTime: "5 min read",
        category: "Local Guides",
        sections: [
            {
                header: "Trader Joe's",
                subheader: "Known for its competitive pricing and quality products, Trader Joe's is a favorite for local shoppers.",
                bulletPoints: [
                    "Affordable fresh produce and staples.",
                    "Unique products you won't find in other stores.",
                    "Frequent promotions and seasonal specials."
                ],
                footer: "Trader Joe's offers a balance of quality and price, making it a go-to for East Village residents."
            },
            {
                header: "Whole Foods Market",
                subheader: "Whole Foods is ideal for shoppers who want organic options and high-quality products, sometimes at slightly higher prices.",
                bulletPoints: [
                    "Good deals on bulk items and select promotions.",
                    "Wide selection of organic and specialty foods.",
                    "Convenient location for East Village residents."
                ],
                footer: "With careful shopping and awareness of deals, Whole Foods can be cost-effective while offering premium choices."
            },
            {
                header: "Key Food",
                subheader: "Key Food is a local chain that offers competitive pricing, especially for everyday staples.",
                bulletPoints: [
                    "Affordable produce, dairy, and pantry items.",
                    "Frequent sales on household essentials.",
                    "Easy-to-access for neighborhood residents."
                ],
                footer: "For budget-conscious shoppers in the East Village, Key Food is a reliable option for keeping grocery bills low."
            }
        ],
        footer: "Rising grocery prices don't have to break your budget. With Lumeo Finance, you can track your spending, compare local prices, and see how much you could save at your favorite East Village stores. Download the app today and start saving smarter!"
    }
];

export const getBlogBySlug = (slug: string): BlogData | undefined => {
    return BLOGS.find(blog => blog.slug === slug);
};
