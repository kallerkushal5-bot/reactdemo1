import { useState } from "react";

const FAQ_LIST = [
  {
    icon: "🕐",
    q: "What are your opening hours?",
    a: "We serve sakura-season flavors every day from 11:00 AM to 11:30 PM. Kitchen closes at 10:45 PM for dine-in and last delivery orders are accepted until 11:15 PM.",
  },
  {
    icon: "📅",
    q: "Can I reserve a table?",
    a: "Yes, reservations are available for lunch and dinner. We recommend booking ahead for weekends and festival evenings to secure the best sakura-view seating.",
  },
  {
    icon: "🛵",
    q: "How long does delivery take?",
    a: "Delivery typically arrives within 35-45 minutes across the city. During peak hours, we target under 60 minutes while keeping every order fresh and warm.",
  },
  {
    icon: "🌱",
    q: "Do you offer vegetarian and vegan dishes?",
    a: "Absolutely. Our menu includes clearly labelled vegan and vegetarian options, from miso ramen to vegetable tempura and plant-based sushi rolls.",
  },
  {
    icon: "💳",
    q: "What payment methods do you accept?",
    a: "We accept cards, UPI, wallets, and Cash on Delivery for delivery orders. In-restaurant payments can also be made by card or contactless mobile pay.",
  },
  {
    icon: "📦",
    q: "Is packaging eco-friendly?",
    a: "Yes, our delivery packaging is biodegradable and sourced from bamboo-based materials wherever possible to keep your meal fresh and the planet happy.",
  },
  {
    icon: "🥢",
    q: "Can I customize my order?",
    a: "You can customize spice levels, add extra veggies, or request no onion in many dishes. Our kitchen team is happy to tailor orders when possible.",
  },
  {
    icon: "⭐",
    q: "Do you have any signature chef specials?",
    a: "Yes, our daily specials rotate with the season. Look for the Sakura Roll, Miso Ramen Deluxe, and the Chef's Seasonal Bento on the menu.",
  },
  {
    icon: "🎁",
    q: "How can I redeem offers?",
    a: "Offers are applied at checkout automatically when eligible. Check the homepage banner or menu page for current codes and seasonal promotions.",
  },
  {
    icon: "📞",
    q: "Need help with an order?",
    a: "Our support team is available every day from 11 AM to 11:30 PM. Use the help page or app chat for quick assistance and order updates.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-header" style={{ textAlign: "center", marginBottom: 42 }}>
        <div className="section-sub">Frequently Asked</div>
        <h2 className="section-title" style={{ marginTop: 10 }}>Restaurant FAQ</h2>
        <p style={{ maxWidth: 640, margin: "16px auto 0", color: "#5a3d5c", lineHeight: 1.75 }}>
          Hover or keyboard-focus a question to reveal the answer instantly. Only one answer stays open at a time for quick browsing.
        </p>
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {FAQ_LIST.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.q}
              className={`faq-card ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ borderRadius: 20 }}
            >
              <button
                type="button"
                className="faq-question"
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                aria-expanded={isActive}
              >
                <div className={`faq-icon ${isActive ? "active" : ""}`}>
                  {item.icon}
                </div>
                <span style={{ flex: 1, textAlign: "left" }}>{item.q}</span>
                <span className="faq-chevron">›</span>
              </button>

              <div className={`faq-answer ${isActive ? "open" : ""}`} aria-hidden={!isActive}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
