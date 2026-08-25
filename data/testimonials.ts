export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

// TODO_VERIFY: Placeholder testimonial copy for layout only. Replace with owner-approved guest quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "A comfortable place for a family meal after a Bhongir trip. The biryani feels generous, warm and made for sharing.",
    name: "Local family guest",
    context: "Dine-in placeholder"
  },
  {
    quote:
      "Good for quick takeaway when you want biryani and Chinese starters without making dinner complicated.",
    name: "Nearby resident",
    context: "Takeaway placeholder"
  },
  {
    quote:
      "The kind of restaurant travelers look for near Bhuvanagiri: easy to find, filling food and friendly service.",
    name: "Highway visitor",
    context: "Travel placeholder"
  }
];
