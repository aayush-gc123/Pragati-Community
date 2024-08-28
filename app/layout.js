import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "Pragati Community",
  description: "A platform for studensts and learners.",
};


export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <body>
          <SessionWrapper>

            <Navbar />
            <div style={{}} className="childrenDiv">
              {children}
            </div>
            <Footer />

          </SessionWrapper>
        </body>
      </html>
    </>
  );
}