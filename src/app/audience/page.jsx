import React from "react";

const bulletify = (text) =>
  text
    .split(";")
    .map((item) => item.trim())
    .map((item) => item.replace(/\.$/, ""))
    .filter(Boolean);

const whoIsKen42ForText = `
  Public universities; Private universities; Deemed-to-be universities; Central universities;
  State universities; Autonomous universities; Autonomous colleges; Affiliated colleges and
  constituent colleges; Multi-campus university groups and education trusts; Institutes of National
  Importance (IIT, NIT, IISER, AIIMS, etc.); Engineering and technology institutes; Management and
  business schools (MBA/PGDM institutes); Medical, dental and allied health sciences colleges;
  Arts, science and commerce colleges; Law universities and law colleges; Architecture and design
  schools; Pharmacy and life sciences institutes; Agriculture, veterinary and fisheries universities;
  Distance and online universities (ODL/OL); Open universities; Research institutes and centres of
  excellence; Skill, vocational and polytechnic institutes; Teacher education colleges (B.Ed/M.Ed);
  Executive and continuing education centres; Government higher-education directorates and councils
  (as stakeholders/partners); EdTech, OPM and learning partners that work with higher-education
  institutions.
`;

const departmentsText = `
  Admissions and enrolment offices; Marketing and outreach teams for admissions; Academic affairs and
  registrar’s offices; Examination and evaluation departments; Faculty deans’ offices and school-level
  administration; Career services and placement cells; Alumni relations and advancement/development
  offices; Student affairs, student welfare and campus life offices; Quality assurance, rankings and
  accreditation units (IQAC, NAAC/NBA/NIRF cells); Finance, bursar and student accounts offices;
  Scholarships and financial aid offices; HR and payroll departments; Campus operations, facilities and
  estate offices; Security and campus safety teams; Hostel and student accommodation offices; Mess,
  dining and food services teams; Transport and logistics departments; Library and learning resources
  centres; IT, infrastructure and digital transformation units; Institutional research, analytics and BI
  teams; International relations and global admissions offices; Incubators, accelerators and innovation/
  entrepreneurship cells.
`;

const leadersText = `
  Chancellor; Vice-Chancellor; Pro-Vice-Chancellor; President; Provost; Rector; Registrar; Academic
  Registrar; Chief Operating Officer (COO); Chief Information Officer (CIO); Chief Technology Officer
  (CTO); Chief Digital Officer (CDO); Chief Financial Officer (CFO); Finance Controller; Bursar; Director
  of Finance; Director / Head of IT; Enterprise Architect; Data / BI Analytics Head; Director of Digital
  Transformation; Director / Dean of Academics; Associate Dean (Academics); Dean / Director of Faculty;
  Dean / Director of a School (Engineering / Management / Arts / etc.); Controller of Examinations (CoE);
  Deputy Controller of Examinations; Director / Head of Admissions; Dean of Admissions; Vice President
  (Enrollment Management); Head of Admissions and Outreach; Director of Marketing and Communications;
  Chief Marketing Officer (CMO); Director of Student Affairs; Dean of Students; Director of Campus Operations;
  Facilities / Estate Manager; Chief Security Officer; Director of Career Services; Head of Placements /
  Training & Placement Officer (TPO); Director of Alumni Relations; Advancement / Development Director;
  Director, IQAC; NAAC / Accreditation Cell Head; NBA / ABET Accreditation Head; NIRF / Rankings Head;
  Quality Assurance Manager; Dean / Director of Research; Director, Sponsored Research and Grants; Chief
  Librarian / Library Director; HR Director / CHRO; Procurement Head / Purchase Manager; Innovation /
  Incubation Centre Director; Entrepreneurship Cell Head; Compliance Officer; Data Protection Officer (DPO);
  Legal Counsel; Director of International Relations; Outreach / Partnerships Director; Marketplace / E-commerce
  Program Manager (where marketplace is strategic).
`;

const dayToDayText = `
  Head of Department (HoD); Program Chair / Program Director; Academic Program Manager; Timetable /
  Scheduling Officer; Examination Superintendent; Assistant Controller of Examinations; LMS Administrator;
  Director of e-Learning; Instructional Designer; Learning Technologist; Digital Marketing Manager
  (Admissions); CRM / Enrollment Manager; International Admissions Head; Admissions Manager; Admissions
  Counsellor; Student Recruitment Officer; Chief Proctor / Proctor; Hostel Warden; Security Officer;
  Transport Manager; Student Affairs Officer; Career Services Officer; Internship Coordinator; Placement
  Coordinator / Officer; Alumni Relations Manager / Officer; Fundraising / Donor Relations Manager;
  Accreditation Coordinator (NAAC / NBA / ABET); Rankings Coordinator (NIRF and similar); Quality Assurance
  Executive / Officer; Research Administrator; Grants / Contracts Manager; Principal Investigator (PI);
  Library Systems / Operations Manager; Librarian (department / campus); HR Manager; Payroll Manager; HR
  Executive; Procurement Executive; Inventory / Stores Manager; Marketplace / E-commerce Operations Manager;
  IT Systems Administrator; Database / Applications Administrator; Helpdesk / Support Lead; Data Analyst /
  Institutional Research Analyst.
`;

const page = () => {
  const whoIsKen42ForItems = bulletify(whoIsKen42ForText);
  const departments = bulletify(departmentsText);
  const leaders = bulletify(leadersText);
  const dayToDay = bulletify(dayToDayText);

  return (
    <div className="section-width mt-32 space-y-10">
  <div>
    <h2 className="pb-2 text-2xl">Who is Ken42 for</h2>
    <ul className="mt-2 list-none pl-0 text-base leading-relaxed">
      {whoIsKen42ForItems.map((item, index) => (
        <li
          key={`who-${index}`}
          className="inline-block pr-6 before:content-['•'] before:text-black before:mr-2 before:text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>

      <div>
        <h2 className="pb-2 text-2xl">Departments and functions we support</h2>
    <ul className="mt-2 list-none pl-0 text-base leading-relaxed">
          {departments.map((item, index) => (
        <li
          key={`departments-${index}`}
          className="inline-block pr-6 before:content-['•'] before:text-black before:mr-2 before:text-base"
        >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="pb-2 text-2xl">Leaders in Education that benefit from Ken42</h2>
    <ul className="mt-2 list-none pl-0 text-base leading-relaxed">
          {leaders.map((item, index) => (
        <li
          key={`leaders-${index}`}
          className="inline-block pr-6 before:content-['•'] before:text-black before:mr-2 before:text-base"
        >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="pb-2 text-2xl">Day-to-day users and implementers of Ken42</h2>
    <ul className="mt-2 list-none pl-0 text-base leading-relaxed">
          {dayToDay.map((item, index) => (
        <li
          key={`dayToDay-${index}`}
          className="inline-block pr-6 before:content-['•'] before:text-black before:mr-2 before:text-base"
        >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
