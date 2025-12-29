import React from "react";

const faqs = [
  {
    question: "How is Ken42 different from a traditional ERP or SIS?",
    answer:
      "Ken42 works as an AI-native operating system across the full student lifecycle, not just as a back-office ERP. It connects admissions, academics, operations, finance, placements, and alumni into one modular platform, with KAI as an intelligent layer across modules like KenRoll, KenLearn, KenCareers, KenMeet, KenFin, KenOps and KenCompliance.",
  },
  {
    question:
      "Can Ken42 coexist with our current systems or does it require a full replacement?",
    answer:
      "Ken42 can be rolled out module-by-module, starting with specific areas like Lead Management, Student Finance, LMS, or Exam Management, and integrating with existing tools where needed (e.g., Canvas, Blackboard, Brightspace, Koha, accounting systems). Institutions can phase out legacy systems over time or continue to run hybrids as long as needed.",
  },
  {
    question: "How does KAI actually work inside the institution?",
    answer:
      "KAI sits on top of Ken42 as the “Everything Institute Expert.” It can answer student and parent queries on admissions, fees, exams, and basic academic information over chat, voice, WhatsApp, and web interfaces, and can also guide staff through workflows by surfacing relevant data and actions from the underlying modules. It is designed to resolve a large percentage of routine queries while escalating complex cases to human teams with full context.",
  },
  {
    question: "What kind of data does KAI use, and can we control what it can see?",
    answer:
      "KAI relies on institutional data already present inside Ken42 modules (such as applications, fee records, timetables, exam schedules, and alumni profiles) plus any integrated systems you connect. Access is governed by the same role-based permissions and data privacy rules used across modules like Document Management, LMS, Exams, HRMS, and Alumni, so you can restrict what KAI is allowed to read or act on for different user groups.",
  },
  {
    question:
      "How does Ken42 handle multi-campus, multi-program complexity?",
    answer:
      "Ken42’s Master Data Management lets you define campuses, departments, programs, specializations, and course catalogs centrally, and map them to specific campuses and intakes. The same structure then powers academic planning, timetables, exams, fee structures, scholarships, accommodation, and even accreditation reporting across all campuses from a single source of truth.",
  },
  {
    question: "Can we customize workflows without heavy engineering effort?",
    answer:
      "Most configurations—such as form fields, status flows, eligibility rules, rejection rules, scholarship matrices, exam components, grading schemes, feedback questionnaires, and approval workflows—are handled through no-/low-code setup screens. Where institutions have very specific requirements, Ken42 also supports deeper customization and API-level integrations, but the intent is to cover most real-world scenarios through configuration rather than custom development.",
  },
  {
    question:
      "How does Ken42 support regulatory and accreditation requirements?",
    answer:
      "Modules like KenCompliance and Accreditation Management are designed to map OBE (CO–PO), maintain IQAC records, manage NAAC/NBA/NIRF/UGC/ABET documentation, and generate compliance-ready reports and self-study formats. Data is pulled from operational systems such as Academics, Exams, LMS, Placements, Research, and Infra, so accreditation teams are not chasing multiple departments for spreadsheets.",
  },
  {
    question: "What safeguards exist against AI errors or “hallucinations”?",
    answer:
      "KAI is anchored on structured institutional data and defined workflows (applications, fee balances, exam dates, eligibility rules) rather than open-ended content alone. Where decisions have policy or financial impact—like admissions status, fee concessions, exam eligibility, or gate pass approvals—Ken42 allows institutions to enforce human approval steps or restrict KAI to “assist” mode, where it drafts actions but staff confirm them before they are applied.",
  },
  {
    question:
      "Does Ken42 integrate with our existing LMS, library, and finance tools?",
    answer:
      "Yes. Ken42 supports integrations with LMS platforms such as Canvas, Blackboard, and Brightspace; library systems like Koha; and accounting/ERP tools like Tally, Oracle, Business Central, and Navision. It also integrates with payment gateways and can sync data with HRMS and other campus systems through APIs.",
  },
  {
    question:
      "How are exams and assessments secured in an AI-first environment?",
    answer:
      "Entrance and term-end exam modules support secure logins, controlled navigation, and live or automated proctoring with recording, along with seating plans, hall tickets, invigilator workflows, and detailed audit logs. KAI can assist with scheduling, reminders, and FAQs about rules, but core assessment rules, scoring logic, and result publication remain under institutional and faculty control.",
  },
  {
    question: "Can we start with only Admissions or Finance and expand later?",
    answer:
      "Yes. Institutions often begin with KenRoll (Marketing, Leads & Admissions) or KenFin (Student Finance) and then add Academics, Exam, LMS, Placements, Alumni, or Ops modules in phases. The platform is intentionally modular so you can prioritize areas with the highest immediate impact and grow into a full OS over time.",
  },
  {
    question: "How does Ken42 help reduce manual work for staff and faculty?",
    answer:
      "Automation is built into most modules: lead routing, drip campaigns, document reminders, exam scheduling, seat planning, hall ticket generation, fee invoicing, installment calculations, scholarship application of rules, gate pass approvals, mess billing, feedback scheduling, and more. KAI further reduces repetitive work by answering routine questions and routing only exceptions or edge cases to staff.",
  },
  {
    question: "What reporting and analytics does Ken42 provide out of the box?",
    answer:
      "Each module ships with its own reports and dashboards—conversion funnels and lead sources in Admissions; financial and reconciliation dashboards in Student Finance; performance, attempts, and grade distributions in Exams; engagement and completion reports in LMS; placement and internship analytics; infra utilization, hostel occupancy, event metrics, and accreditation dashboards. Leadership teams can use these for both day-to-day monitoring and audit-ready exports.",
  },
  {
    question: "How does Ken42 handle student and staff privacy?",
    answer:
      "Role-based access control, detailed audit trails, and fine-grained permissions are available across modules like Document Management, Exams, LMS, HRMS, Gate Pass, Visitor Management, and Alumni. Sensitive operations (such as refunds, disciplinary records, HR actions, and scholarship decisions) can be restricted to specific roles, and all changes are logged for accountability and compliance.",
  },
  {
    question:
      "Can Ken42 support institutions with complex fee structures and multiple currencies?",
    answer:
      "Yes. Student Finance supports fee heads for tuition, hostel, transport, application, and more, with tax setup, multi-currency handling, installments, late fee rules, discounts, scholarships, waivers, refunds, and QR-coded receipts and invoices. It also supports institution-specific conversion rules and integrations with external accounting systems where multi-currency tracking is required.",
  },
  {
    question: "How does Ken42 improve the student experience on campus and online?",
    answer:
      "Students can handle most tasks—applications, fee payments, course registration, exam schedules, gate passes, hostel bookings, mess preferences, event registration, and placement applications—through self-service portals and mobile-friendly interfaces. KAI adds a conversational layer so they can ask natural-language questions instead of navigating menus, while still having access to human support when needed.",
  },
  {
    question: "What support and training do institutions receive after going live?",
    answer:
      "Beyond implementation, institutions can use built-in Support & Services and Case Management modules to route issues, track resolution SLAs, and maintain a full case history. Admins, faculty, and staff can be onboarded through structured training, and KAI can be configured to answer “how-to” questions about using Ken42 modules so new users ramp up faster.",
  },
  {
    question:
      "How does Ken42 help with alumni and employer engagement, not just current students?",
    answer:
      "KenMeet and KenCareers focus on alumni and career ecosystems: centralized alumni profiles, communication tools, events, fundraising, mentorship programs, job boards, employer portals, and placement analytics. This ensures the same OS that runs admissions and academics also supports long-term outcomes like employability, entrepreneurship, and alumni relationships.",
  },
  {
    question:
      "What happens if we want to export data or switch vendors later?",
    answer:
      "Operational data across leads, applications, academic records, exams, finance, placements, and alumni can be exported via configurable reports (CSV, XLS, PDF) and APIs. This makes it possible to share data with regulators, ranking agencies, or future systems without being locked into a proprietary format.",
  },
  {
    question:
      "How does Ken42 stay current with changing regulations and AI best practices?",
    answer:
      "Ken42’s modular design allows updates to specific areas—such as fee rules, accreditation templates, exam policies, or HR processes—without disrupting the entire system. As AI and regulatory norms evolve, KAI’s behavior, prompts, and guardrails can be updated centrally while institutions maintain control over policies, approval flows, and what the AI is allowed to automate versus only assist with.",
  },
  {
    question: "Is Ken42 an ERP or a suite of stand‑alone apps?",
    answer:
      "Ken42 is a modular, unified operating system for higher education. Institutions can start with key modules and expand; the platform collapses 25+ disconnected systems into one backbone across the student lifecycle.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Timelines vary by scope, but institutions choose Ken42 for up to 95% faster rollout than legacy ERP/SIS thanks to modularity and pre-built flows.",
  },
  {
    question: "What ROI should we expect?",
    answer:
      "Reported outcomes include 30–40% reduction in IT costs and 90%+ retention across existing institutions, with 300k+ users live. Results vary by configuration and adoption.",
  },
  {
    question: "What does KAI actually do beyond a chatbot?",
    answer:
      "KAI answers routine queries, triggers actions (e.g., schedules, reminders), elevates complex cases, and learns from institution data; it supports voice, chat, WhatsApp and assists across admissions to student affairs. Measured outcomes include 85% query resolution in under 60 seconds and ~40% admin/HR cost savings in reported cases.",
  },
  {
    question: "Can we keep some existing systems?",
    answer:
      "Yes. Ken42 integrates with learning platforms (Canvas/Blackboard/Brightspace), Koha library, payment gateways, accounting ERPs (Oracle/Tally/BC/Navision), Google/Microsoft/LinkedIn, and more—via APIs and connectors.",
  },
  {
    question: "How do exams and interviews work end‑to‑end?",
    answer:
      "Online/offline or hybrid: configurable exam cycles; secure question papers; seating & hall tickets; invigilator/evaluator assignment; auto/manual evaluation; CGPA calculations; revaluation/retests. Interviews support self‑slot or predefined flows, panels, calendar sync, video links, multilingual/time‑zone handling, and structured scoring.",
  },
  {
    question: "How is student finance handled?",
    answer:
      "Fee heads/tax, invoices/receipts (with QR), online/offline payments, instalments/penalties, scholarships/waivers, refunds/credit notes, reminders & reconciliation, multi‑currency—plus analytics and ERP integrations.",
  },
  {
    question: "Does Ken42 support ranking & accreditation evidence?",
    answer:
      "Yes. The KenCompliance option centralizes IQAC records, OBE CO‑PO maps, and submissions aligned to NAAC/NBA/NIRF/UGC/ABET frameworks with dashboards/reports.",
  },
  {
    question: "Where is Ken42 used today?",
    answer:
      "Ken42 notes 20+ institutions and 300k+ users across multiple Indian cities and global offices (SFO, Dallas, BLR, Kolkata, Coimbatore).",
  },
];

const page = () => {
  return (
    <div className="section-width mt-32 space-y-10">
      {/* <div>
        <h2 className="text-3xl font-semibold">FAQs</h2>
      </div> */}
      <ol className="list-decimal space-y-10  text-base leading-relaxed">
        {faqs.map((faq, index) => (
          <li key={faq.question} className="space-y-3">
            <h2 className="text-xl font-semibold leading-snug">{faq.question}</h2>
            <p className="text-base leading-relaxed">{faq.answer}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;
