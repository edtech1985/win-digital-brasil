import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./Routes";
import { Section01Header } from "../page-sections/section-01-header";

import { Section03 } from "../page-sections/section-03";

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

        <Section03 />

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
