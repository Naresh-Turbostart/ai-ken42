import React from 'react'

const bulletify = (text) =>
  text
    .split(';')
    .map((item) => item.trim())
    .map((item) => item.replace(/\.$/, ''))
    .filter(Boolean)

const expandingCitiesText = `
  Agartala; Agra; Ahmedabad; Ajmer; Aligarh; Allahabad / Prayagraj; Amritsar; Anantapur;
  Aurangabad; Bareilly; Bengaluru; Berhampur; Bhagalpur; Bhopal; Bhubaneswar; Bikaner;
  Bilaspur; Chandigarh; Chennai; Coimbatore; Cuttack; Darbhanga; Dehradun; Delhi; Dhanbad;
  Dharwad; Dibrugarh; Durg; Durgapur; Ernakulam (Kochi); Faridabad; Gandhinagar; Greater Noida;
  Guwahati; Gwalior; Hisar; Hubballi–Dharwad; Hyderabad; Imphal; Indore; Jaipur; Jalandhar;
  Jammu; Jamshedpur; Jhansi; Jodhpur; Jorhat; Kanpur; Kalyani; Karnal; Kolhapur; Kolkata; Kota;
  Kozhikode; Kurukshetra; Lucknow; Ludhiana; Madurai; Manipal; Mangaluru; Meerut; Mohali; Mumbai;
  Muzaffarpur; Mysuru; Nagpur; Nainital; Nashik; Noida; Palakkad; Panaji; Patiala; Patna; Pilani;
  Puducherry; Pune; Raipur; Rajkot; Ranchi; Rohtak; Roorkee; Rourkela; Salem; Siliguri; Shimla;
  Sonipat; Surat; Thanjavur; Thiruvananthapuram; Thrissur; Tiruchirappalli; Tirunelveli; Tirupati;
  Udaipur; Vadodara; Varanasi; Vellore; Vijayawada; Visakhapatnam; Warangal.
`

const servedCitiesText = `
  Bengaluru; Delhi; Mumbai; Chennai; Hyderabad; Pune; Kolkata; Ahmedabad; Gandhinagar; Kanpur;
  Varanasi; Roorkee; Guwahati; Indore; Bhubaneswar; Jaipur; Lucknow; Bhopal; Coimbatore; Vellore;
  Pilani; Manipal; Sonipat; Greater Noida; Chandigarh; Mohali; Tiruchirappalli; Thiruvananthapuram;
  Rourkela; Surat.
`

const page = () => {
  const expandingCities = bulletify(expandingCitiesText)
  const servedCities = bulletify(servedCitiesText)

  return (
    <div className="section-width mt-32 space-y-10">
      <div>
        <h2 className='pb-2 text-2xl'>Cities we are expanding to</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 list-disc list-inside text-base ">
  {expandingCities.map((city, index) => (
    <li key={`expanding-${index}`} className="whitespace-nowrap">
      {city}
    </li>
  ))}
</ul>

      </div>

      <div>
        <h2 className='pb-2 text-2xl'>Cities we Serve</h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 list-disc list-inside text-base leading-relaxed">
  {servedCities.map((city, index) => (
    <li key={`expanding-${index}`} className="whitespace-nowrap">
      {city}
    </li>
  ))}
</ul>

      </div>
    </div>
  )
}

export default page
