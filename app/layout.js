
export const metadata = {
  title: "redant.in | RedANT — WhatsApp Business API | AI Automate WhatsApp",
  description: "redant.in is RedANT — Official WhatsApp Business API provider. AI automate WhatsApp, WhatsApp CRM, broadcast, chatbot. Trusted by 4000+ brands. Not RedAnt Staffing.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
