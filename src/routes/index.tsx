import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./Routes";
import { Section01Header } from "../page-sections/section-01-header";
import { Section02 } from "../page-sections/section-02";
import { Section03 } from "../page-sections/section-03";
import { Section04 } from "../page-sections/section-04";
import { Section05 } from "../page-sections/section-05";
import { Section09Footer } from "../page-sections/section-09-footer";
import { Section07Mentor } from "../page-sections/section-07-mentor";
import { Section08Contacts } from "../page-sections/section-08-contacts";
import { Section06 } from "../page-sections/section-06";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <Section01Header />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07Mentor />
        <Section08Contacts />
        <Section09Footer />
      </Router>
    </Main>
  );
}
