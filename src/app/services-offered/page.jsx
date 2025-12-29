import React from "react";

const sections = [
  {
    title: "1. Early awareness and outreach before enquiry",
    description:
      "Targeted higher education marketing and student recruitment campaigns to drive qualified traffic into your admissions funnel.",
    useCases: [
      "Run digital campaigns, education fairs, school visits, open days and webinars, and have every interaction tracked against clear campaign tags and sources.",
      "Capture interest from landing pages, QR codes, social ads and WhatsApp, so the same student isn’t splintered across multiple tools.",
      "Nurture prospective students with scheduled emails, SMS and WhatsApp reminders for events, mock tests, application deadlines and fee due dates.",
      "Track which campaigns, counsellor calls or outreach activities actually lead to applications and paid admissions, not just clicks.",
    ],
  },
  {
    title: "2. Enquiry capture and lead nurturing",
    description:
      "Centralised enquiry and lead management system for colleges and universities to capture, score and nurture prospective students.",
    useCases: [
      "Put enquiry forms on the website and microsites with custom fields, multi-language support, mobile-friendly layouts, validation and CAPTCHA to reduce junk submissions.",
      "Centralise leads from forms, fairs, imports and APIs into one database with bulk upload, mapping, standardisation and export.",
      "Automatically reject duplicates, merge them, and alert counselors so the same student doesn’t get called five times by five different people.",
      "Use lead scoring (behavioural, demographic, predictive) so calling teams focus on students who are more likely to convert.",
      "Route new leads using rules (program, region, counsellor skill) and manage territories so no one team gets overwhelmed.",
      "Keep a timeline of every interaction – calls, emails, status changes – for audits, handovers and personalised follow-ups later.",
    ],
  },
  {
    title: "3. Application forms, eligibility and document checks",
    description:
      "Online application management for higher education with configurable forms, eligibility rules and digital document verification.",
    useCases: [
      "Spin up single-program or multi-program application forms with conditional fields, rules, intake-wise versions and the ability to clone and reuse them every cycle.",
      "Let students save and resume their application, see live validations, and receive reminders if they abandon the form.",
      "Issue unique application numbers, pre-fill known data and provide downloadable forms and clear instructions, including e-sign where needed.",
      "Automatically assign applications (manual, group, auto) to reviewers using rules, workload balancing and priority queues, with full assignment history.",
      "Prevent unqualified applications from clogging the pipeline through rejection rules, reason codes and automatic communication of outcomes.",
      "Manage document checklists, uploads, approval and rejection with status tracking so teams don’t chase missing documents over email.",
    ],
  },
  {
    title: "4. Entrance tests and candidate interviews",
    description:
      "End-to-end entrance exam and interview scheduling platform with slot booking, proctoring and panel evaluation.",
    useCases: [
      "Configure entrance exams with question banks, patterns, difficulty levels, randomisation, scheduling and candidate allocation across centres or online slots.",
      "Allow students to self-book their test slots, see rules and receive automatic reminders on email/SMS.",
      "Monitor exams with secure logins, controlled navigation, proctoring, live dashboards and detailed logs for audits.",
      "Run structured interview schedules with predefined or self-booked slots, panel setup, availability collection and automated allocation in bulk.",
      "Give panels a dedicated portal for scoring against configurable parameters, adding notes and submitting decisions.",
      "Support international candidates with time-zone aware scheduling, online video links and multi-location panels.",
    ],
  },
  {
    title: "5. Admission decisions, scholarships and seat blocking",
    description:
      "Admission decisioning and scholarship management workflow to shortlist candidates, allocate awards and control seat intake.",
    useCases: [
      "Combine scores from tests, interviews, academics and experience using weighted matrices so decisions are fair and transparent.",
      "Auto-calculate shortlists, waitlists and rejects based on cut-offs and rules, while still allowing manual overrides with audit logs.",
      "Configure scholarship rules by program, category, score band or profile, and apply them directly to fee plans without re-entering data.",
      "Generate and send offer letters at scale, including scholarship details, response deadlines and seat acceptance steps.",
      "Track seat blocking and release logic so you don’t overshoot sanctioned intake, even with multiple rounds and waitlists.",
    ],
  },
  {
    title: "6. Fee payment, instalments and financial planning",
    description:
      "Student fee management and installment planning solution with online payments, penalties, refunds and accounting integration.",
    useCases: [
      "Set up fee heads, tax rules and program-wise fee plans for academics, hostel, transport and other services.",
      "Allow students and parents to pay online with QR codes, links and payment gateways, and sync transactions back in real time.",
      "Offer installments, penalties and due-date rules, plus notifications for upcoming and overdue payments.",
      "Manage discounts, scholarships, waivers, refunds and credit notes with full approval workflows and audit trails.",
      "Reconcile collections with banks and accounting systems and push summarised entries automatically.",
      "Analyse fee collection by program, batch, campus or category, including ageing, defaults and trends.",
    ],
  },
  {
    title: "7. Joining formalities and pre-arrival onboarding",
    description:
      "Digital student onboarding covering joining formalities, checklists, consents and pre-arrival communication.",
    useCases: [
      "Send a joining checklist to admitted students covering document uploads, fee confirmation, hostel preference, transport and first-day instructions.",
      "Collect additional data (emergency contacts, medical details, consent forms) before arrival and map it to the student record.",
      "Auto-assign students to orientation groups, mentors and welcome events based on their program or campus.",
      "Trigger creation of digital IDs, system logins and access rights so students can use portals, Wi-Fi, LMS and finance from day one.",
    ],
  },
  {
    title: "8. Academic planning, course registration and timetable setup",
    description:
      "Academic planning and course registration software with curriculum structures and clash-free timetables.",
    useCases: [
      "Maintain one academic master with institutes, campuses, departments, programs, specialisations and courses, including CO–PO mapping.",
      "Plan intakes, academic terms and calendars with holidays, exam windows and teaching weeks clearly defined.",
      "Open course registrations and self-service enrolments with rules for prerequisites, repeats, capacity and waitlists.",
      "Assign faculty to courses and sections, including co-teachers and teaching assistants, with workload views.",
      "Generate timetables that check for clashes between rooms, faculty, sections and holidays, and let admins combine, swap, cancel or reschedule classes easily.",
    ],
  },
  {
    title: "9. Classroom delivery, online learning and attendance tracking",
    description:
      "Integrated classroom and online learning management with attendance tracking for colleges and universities.",
    useCases: [
      "Take attendance using RFID, biometric devices or manual entry, including late joins and special cases, and push this to student and parent views.",
      "Host and organise online and blended learning with course modules, videos, readings, assignments and quizzes, all tied back to the formal course structure.",
      "Integrate with external LMS platforms like Canvas, Blackboard and Brightspace while still keeping enrollment, grades and outcomes in one place.",
      "Track engagement and completion so faculty can see who is falling behind and reach out early.",
    ],
  },
  {
    title: "10. Assessments, examinations and re-evaluation",
    description:
      "Examination and assessment management system with eligibility, hall tickets, grading and re-evaluation.",
    useCases: [
      "Plan continuous assessment and final exams with components, weightages and grading schemes configured per program.",
      "Manage exam forms, eligibility, hall tickets and seating plans with auto-allocation and venue optimisation.",
      "Assign invigilators, track attendance on exam day and record incidents and malpractices for committees.",
      "Support on-screen marking, double evaluation, moderation and anonymised scripts as per institution policy.",
      "Publish results after approvals, and allow revaluation, retests and make-up exams with online payment and tracking.",
    ],
  },
  {
    title: "11. Result publishing, transcripts and academic progression",
    description:
      "Result publication, transcript generation and academic progression engine with GPA/CGPA and promotion rules.",
    useCases: [
      "Calculate GPA and CGPA as per scheme (absolute or relative) and show break-ups by course, component and attempt.",
      "Publish results online in a secure way, with student-wise views and downloadable grade cards.",
      "Run term promotion rules so students move to the next term only if they meet credit and grade requirements, while handling exceptions manually.",
      "Generate transcripts and completion certificates for graduating batches, ready for printing or digital sharing.",
    ],
  },
  {
    title: "12. Campus housing, rooms and student accommodation",
    description:
      "Student housing and hostel management software with room allocation, occupancy and hostel billing.",
    useCases: [
      "Capture hostel inventory down to block, floor, room and bed, including capacity, gender rules and pricing.",
      "Allocate rooms (manually or auto) based on program, preferences, gender and special categories, and track transfers and vacating.",
      "Record hostel attendance and overnight rules, and sync with gate passes and visitor logs for safety.",
      "Bill hostel fees separately or along with academic fees, and manage deposits, refunds and damages.",
    ],
  },
  {
    title: "13. Dining, mess operations and meal plans",
    description:
      "Campus mess and dining management system with QR-based meal validation, plans, menus and automated billing.",
    useCases: [
      "Link students to specific messes and meal plans, with the ability to activate or deactivate mapping when they move or graduate.",
      "Generate QR codes or coupon codes for meals and validate them at the counter using a simple screen for staff.",
      "Define meal timings, menus (weekly or monthly), veg/non-veg options, number of meals per day and extensions for special days.",
      "Let students submit mess change requests, approvals and rejections with clear timelines.",
      "Generate daily, monthly and meal-wise consumption reports and link them to automated billing and notifications.",
      "Manage guest meals, complaints, inventory, staff scheduling, health and safety compliance, allergy management and nutritional info in one place.",
    ],
  },
  {
    title: "14. Campus access, gate passes and visitor control",
    description:
      "Student gate pass and visitor management solution for secure campus access with approvals, QR/RFID and audit logs.",
    useCases: [
      "Allow students to request day passes or custom passes via mobile, with different rules for groups and timings.",
      "Set up multi-level approvals, real-time status updates and alerts for overdue returns or cancelled passes.",
      "Issue digital passes with QR, RFID and biometric integration, and maintain time-stamped logs for every entry and exit.",
      "Track off-campus movement with GPS for specific pass types and generate CSV/PDF reports for audits and authorities.",
      "Manage visitors with pre-registration, ID and photo capture, host notifications, QR/barcode scanning and self-service kiosks.",
      "Configure emergency protocols with instant alerts for security breaches and easy access to emergency contacts.",
    ],
  },
  {
    title: "15. Student helpdesk, cases and feedback across the journey",
    description:
      "Unified student helpdesk and feedback platform to manage service requests, SLAs and satisfaction across the lifecycle.",
    useCases: [
      "Offer a single place where students raise requests on academics, fees, hostel, IT or any other issue using guided forms and attachments.",
      "Automatically route cases to the right team using type, category and TAT rules, or allow manual reassignment with full history.",
      "Show real-time status, timelines and communication history so there’s no confusion on what is in progress or on hold.",
      "Close cases with clear resolution stages and feedback ratings to measure service quality.",
      "Run structured feedback cycles at program, course, faculty or service level, with configurable questionnaires and reports.",
    ],
  },
  {
    title: "16. Events, venues, clubs and campus life",
    description:
      "Campus events and venue booking system to manage student activities, club events, registrations and revenue.",
    useCases: [
      "Let admins and student bodies create, update, publish and archive events such as fests, workshops, seminars and club meets.",
      "Manage participant lists, waitlists, roles and approvals for user-submitted event proposals.",
      "Enable users to explore and book venues, see availability on calendars and pay where needed, while admins control pricing and policies.",
      "Provide dashboards on event attendance, revenue, popular slots and audience segments to guide future planning.",
    ],
  },
  {
    title: "17. Internships, placements and career growth",
    description:
      "Internship and placement management platform with employer portals, eligibility rules and placement analytics.",
    useCases: [
      "Maintain student profiles, resumes and portfolios, plus skill assessments and practice test records, ready for employers.",
      "Onboard employers with their own access to post jobs and internships, set eligibility, shortlist candidates and schedule interviews.",
      "Manage applications, eligibility filters, application limits and offer limits so students don’t over-apply and rules stay fair.",
      "Run career fairs, workshops and networking events, track participation and follow-up outcomes.",
      "Use analytics to see placement rates, salary trends, company mix, skill gaps and student opportunity analysis.",
    ],
  },
  {
    title: "18. Alumni relationships, giving and mentoring networks",
    description:
      "Alumni engagement and fundraising solution with events, giving campaigns and mentoring networks.",
    useCases: [
      "Maintain alumni profiles with education, career and location data, and keep them updated over time.",
      "Run alumni events, reunions and webinars with registration, payments and follow-up communication.",
      "Manage fundraising campaigns, pledges and donations with proper acknowledgements and receipts.",
      "Set up mentorship programmes where alumni can volunteer, accept mentees and track sessions.",
    ],
  },
  {
    title: "19. Rankings, accreditation and institutional quality",
    description:
      "Accreditation and rankings management for NAAC, NBA, NIRF and other frameworks with centralised evidence and IQAC workflows.",
    useCases: [
      "Map program outcomes, course outcomes and teaching-learning activities so OBE data is ready for external formats.",
      "Maintain central records for NAAC, NBA, NIRF, UGC, ABET and other frameworks, with templates, metrics and evidence repositories.",
      "Auto-pull data from admissions, academics, exams, placements, research and infra to fill repetitive tables so teams aren’t rebuilding them every year.",
      "Track actions from IQAC meetings, monitor progress and generate AQAR and other mandatory reports.",
    ],
  },
  {
    title: "20. Research projects, grants and scholarly reporting",
    description:
      "Research and grants management system covering proposals, funding, milestones and scholarly outputs.",
    useCases: [
      "Manage the full lifecycle of research projects from proposal submission and approvals to “in progress” and completion, with milestone tracking.",
      "Handle funding and grants: calls for proposals, submissions, reviews, budgeting, disbursements and renewals with compliance checks.",
      "Maintain researcher profiles, collaborations, MoUs, industry partnerships and sponsored projects.",
      "Track PhD and post-doc progress, theses and dissertations, and student research grants.",
      "Produce dashboards on publications, funding, outputs and compliance reporting for regulators and ranking agencies.",
    ],
  },
  {
    title: "21. Staff lifecycle, HR, payroll and faculty performance",
    description:
      "Higher education HR and payroll platform with faculty lifecycle management, attendance, salaries and performance reviews.",
    useCases: [
      "Maintain complete employee profiles, documents, qualifications and role histories.",
      "Run digital onboarding with policy induction, e-signatures and mentor assignment.",
      "Track attendance with biometrics, and manage shifts, leave types and holiday calendars.",
      "Generate salary slips, manage revisions, reimbursements and claims with approvals.",
      "Manage performance cycles with goals, KPIs, 360-degree feedback and promotion decisions.",
    ],
  },
  {
    title: "22. Infrastructure, procurement, inventory and campus assets",
    description:
      "Campus infrastructure, procurement and inventory management software for tracking assets, stock and facilities.",
    useCases: [
      "Maintain a campus inventory of buildings, rooms, labs, equipment and utilities, with capacities and attributes.",
      "Use venue and infra management to define equipment availability, pricing, user eligibility and booking rules.",
      "Manage procurement, vendor contracts and purchase orders, and connect them with inventory levels and consumption patterns.",
      "Track stock levels, low-stock alerts and automated re-ordering for labs, mess and facilities.",
    ],
  },
  {
    title: "23. Digital portals, content and marketplace experiences",
    description:
      "Content management and campus marketplace solution for building portals and managing internal commerce.",
    useCases: [
      "Use a content management system to build and update public-facing web pages, program microsites, blogs and help content without developer support.",
      "Run a campus marketplace where internal and external vendors list products or services, and students and staff place and track orders.",
      "Handle payments, refunds, dynamic pricing and coupon-based promotions for marketplace orders.",
    ],
  },
  {
    title: "24. Cross-journey analytics, dashboards and AI assistance",
    description:
      "Cross-campus analytics and AI assistant layer that lets institutions query data across admissions, academics, finance and operations.",
    useCases: [
      "Provide role-based dashboards for leadership, deans, registrars, finance, placement and hostel teams covering their key metrics in one place.",
      "Offer a search and query layer (“Ask me anything about the institution”) that pulls data from admissions, academics, exams, finance and operations.",
      "Use an AI assistant for higher education to answer routine questions from students, faculty and staff across voice, chat and WhatsApp, backed by live system data and access controls.",
      "Track utilisation, bottlenecks and anomalies across the lifecycle (for example low attendance, high drop-off at application, mess under-use, infra hotspots) and feed this into planning and interventions.",
    ],
  },
];

const page = () => {
  return (
    <div className="section-width mt-32 space-y-10">
      {sections.map((section, index) => (
        <div key={section.title}>
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p className="mt-3 text-base leading-relaxed">{section.description}</p>
          <p className="mt-4 text-lg font-semibold">Use cases</p>
          <ul className="mt-2 list-disc space-y-3 pl-6 text-base leading-relaxed">
            {section.useCases.map((useCase, useIndex) => (
              <li key={`${section.title}-use-${useIndex}`}>{useCase}</li>
            ))}
          </ul>
          {index < sections.length - 1 && (
            <div className="border-t border-[#cfcfcf] my-8" />
          )}
        </div>
      ))}
    </div>
  );
};

export default page;
