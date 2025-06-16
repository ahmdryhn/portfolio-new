interface Achievement {
  id: number;
  credential_id: string;
  name: string;
  issuing_organization: string;
  issue_date: string;
  expiration_date: string | null;
  url_credential: string;
  image: string;
  category: string;
  is_show: boolean;
}

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

const data: Achievement[] = [
  {
    id: 1,
    credential_id: "N/A",
    name: "Participant Certificate",
    issuing_organization: "Mobility Program 2024 at The National University of Malaysia",
    issue_date: "2024-11-09",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1bT-SkU2UP5iNgsRESPSYNXqeXhtcCIQd/view?usp=sharing",
    image: "/images/achievements/certificates/student-mobility-ukm-2024.png",
    category: "participant",
    is_show: true
  },
  {
    id: 2,
    credential_id: "E.4.d/2075/F.Psi/X/2024",
    name: "Best Presenter Certificate",
    issuing_organization: "ICAPH 2024 by Universitas Muhammadiyah Malang",
    issue_date: "2024-10-05",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1Y-FHjLVub50OzVeqh4AVCTFRNDuBd55K/view?usp=sharing",
    image: "/images/achievements/certificates/best-presenter-icaph-2024.png",
    category: "awardee",
    is_show: true
  },
  {
    id: 3,
    credential_id: "00101/DPKAA.S/IX/2024",
    name: "Awardee Certificate",
    issuing_organization: "AYE 2024 by DPKKA Universitas Airlangga",
    issue_date: "2024-08-30",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1Nvfrk8S_zPtbLq_w0SrAY1mI7xuCHIWz/view?usp=sharing",
    image: "/images/achievements/certificates/awardee-aye-2024.png",
    category: "awardee",
    is_show: true
  },
  {
    id: 4,
    credential_id: "7635081",
    name: "Full-Stack Web Development Internship Completion",
    issuing_organization: "PT. Otak Kanan",
    issue_date: "2024-06-30",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1STCHtd7HCwISSsHYfHTaNcq5VusURVo9/view?usp=sharing",
    image: "/images/achievements/certificates/msib-batch-6-pt-otak-kanan.png",
    category: "participant",
    is_show: true
  },
  {
    id: 5,
    credential_id: "7635081",
    name: "Certified Independent Study Participation (MSIB) Batch 6",
    issuing_organization: "MBKM 2024 by Kemenristek",
    issue_date: "2024-05-30",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1r0mAJlKs3gktWgvx6QkKDDO5f8jnrp7v/view?usp=sharing",
    image: "/images/achievements/certificates/msib-mbkm.png",
    category: "participant",
    is_show: true
  },
  {
    id: 6,
    credential_id: "N/A",
    name: "Silver Prize Medalist (2nd) Certificate",
    issuing_organization: "IPITEx 2024 by National Research Council of Thailand",
    issue_date: "2024-02-06",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1XlZ81UFBOloBakc2hxwyEa4Znmqlry0f/view?usp=sharing",
    image: "/images/achievements/certificates/ipitex-2024.png",
    category: "awardee",
    is_show: true
  },
  {
    id: 7,
    credential_id: "16/UN34/KM.05.03/2023",
    name: "Silver Medal (2nd) Certificate",
    issuing_organization: "LIP3D #2 2023 by Universitas Negeri Yougyakarta",
    issue_date: "2023-10-26",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/lip3d-2023.png",
    category: "awardee",
    is_show: true
  },
  {
    id: 8,
    credential_id: "004/B.1/BINADESA/BEM-FST/VII/2023",
    name: "Chairman of Organizing Committee",
    issuing_organization: "BINA DESA FST 2023 by BEM Sains & Technology Faculty UNAIR",
    issue_date: "2023-07-11",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/147prPHmeIUQOI3rnVl1iCSOg43leGYI-/view?usp=sharing",
    image: "/images/achievements/certificates/ketua-bindes-2023.png",
    category: "participant",
    is_show: true
  },
  {
    id: 9,
    credential_id: "001/A.1/CYBER BEM/BEM-FST/2023",
    name: "Best Staff 100 days of Work",
    issuing_organization: "BEM Sains & Technology Faculty 2023",
    issue_date: "2023-06-01",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1OjVcCgLxQYBYylQSogQFEbVianz3XyWF/view?usp=sharing",
    image: "/images/achievements/certificates/best-staff-bemfst-2023.png",
    category: "awardee",
    is_show: true
  },
  {
    id: 10,
    credential_id: "369/B.1/PENGMAS/HIMSI-UNAIR/E/IX/2022",
    name: "Field Coordinator of Organizing Committee",
    issuing_organization: "PENGMAS 2022 by Himpunan Mahasiswa Sistem Informasi UNAIR",
    issue_date: "2022-07-19",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/korlap-pengmas-himsi-2022.png",
    category: "participant",
    is_show: true
  },
  {
    id: 11,
    credential_id: "JMZV15MKNXN9",
    name: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuing_organization: "Dicoding",
    issue_date: "2023-10-30",
    expiration_date: "2026-10-30",
    url_credential: "https://www.dicoding.com/certificates/JMZV15MKNXN9",
    image: "/images/achievements/certificates/sertifikat_course_237_2736040_301023225028_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 12,
    credential_id: "2VX3OWO73ZYQ",
    name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuing_organization: "Dicoding",
    issue_date: "2023-11-28",
    expiration_date: "2026-11-28",
    url_credential: "https://www.dicoding.com/certificates/2VX3OWO73ZYQ",
    image: "/images/achievements/certificates/sertifikat_course_251_2736040_281123222814_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 13,
    credential_id: "1RXY1N63QPVM",
    name: "Belajar Dasar-Dasar DevOps",
    issuing_organization: "Dicoding",
    issue_date: "2023-11-28",
    expiration_date: "2026-11-28",
    url_credential: "https://www.dicoding.com/certificates/1RXY1N63QPVM",
    image: "/images/achievements/certificates/sertifikat_course_382_2736040_281123173222_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 14,
    credential_id: "JLX1WEWJ2P72",
    name: "Belajar Dasar Manajemen Proyek",
    issuing_organization: "Dicoding",
    issue_date: "2023-10-27",
    expiration_date: "2026-10-27",
    url_credential: "https://www.dicoding.com/certificates/JLX1WEWJ2P72",
    image: "/images/achievements/certificates/sertifikat_course_570_2736040_271023004105_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 15,
    credential_id: "78344/UIX/LM/09/2023",
    name: "Introduction to UX Research",
    issuing_organization: "MySkill",
    issue_date: "2023-09-13",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/Ahmad Rayhan - E-Certificate SC UIUX Fundamental MySkill 2023_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 16,
    credential_id: "77462/DTA/LM/09/2023",
    name: "SQL for Data Analysis",
    issuing_organization: "MySkill",
    issue_date: "2023-09-12",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/Ahmad Rayhan - E-Sertifikat SC SQL For Data Analysis MySkill September 2023_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 17,
    credential_id: "60798/UIX/LM/08/2023",
    name: "UI/UX Fundamental",
    issuing_organization: "MySkill",
    issue_date: "2023-08-16",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/Ahmad Rayhan - E-Certificate SC UIUX Fundamental MySkill Agustus 2023_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 18,
    credential_id: "1966974850-194/DEA/BLSDM.Kominfo/2023",
    name: "Strategi Social Selling untuk UMKM",
    issuing_organization: "Digital Entrepreneurship Academy",
    issue_date: "2023-08-14",
    expiration_date: null,
    url_credential: "",
    image: "/images/achievements/certificates/Sertifikat_AHMAD RAYHAN_Strategi Social Selling untuk UMKM_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 19,
    credential_id: "",
    name: "NDG Linux Essentials",
    issuing_organization: "Cisco Networking Academy",
    issue_date: "2022-11-28",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1LQdZhVFYvbnwtJsDmjqj00XlpYhbHdk7/view?usp=sharing",
    image: "/images/achievements/certificates/AHMADRAYHAN-Sistem Operasi P-certificate_page-0001.jpg",
    category: "badge",
    is_show: true
  },
  {
    id: 20,
    credential_id: "",
    name: "NDG Linux Unhatched",
    issuing_organization: "Cisco Networking Academy",
    issue_date: "2022-09-14",
    expiration_date: null,
    url_credential: "https://drive.google.com/file/d/1V9TMzSu6TK5GBpcxnFe8v6xXNqQ7nh6d/view?usp=sharing",
    image: "/images/achievements/certificates/AHMADRAYHAN-Sistem Operasi P-certificatee_page-0001.jpg",
    category: "badge",
    is_show: true
  }
];

export const getAchievementsData = async ({
    category,
    search,
  }: GetAchievementsDataProps): Promise<Achievement[]> => {
    let filtered = data;

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.issue_date).getTime();
      const dateB = new Date(b.issue_date).getTime();

      if (dateB !== dateA) {
        return dateB - dateA;
      }
      return b.id - a.id;
    });


    return filtered;
};

