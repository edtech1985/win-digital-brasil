import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./Routes";
import { Section01Header } from "../page-sections/section-01-header";
import { Section02 } from "../page-sections/section-02";
import { Section03 } from "../page-sections/section-03";
import { Section04 } from "../page-sections/section-04";
import { Section05 } from "../page-sections/section-05";
import { Section06 } from "../page-sections/section-06";
import { Section07 } from "../page-sections/section-07";
import { Section08 } from "../page-sections/section-08";
import { Section010Contacts } from "../page-sections/section-010-contacts";
import { Section011Footer } from "../page-sections/section-011-footer";

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
        <Section07 />
        <Section08 />
        <Section010Contacts />
        <Section011Footer />
      </Router>
    </Main>
  );
}
