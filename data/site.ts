import type {
  CertificationPartnership,
  ApproachItem,
  CompanyInfo,
  ContactInfo,
  CourseDetails,
  NavigationItem,
  Partner,
  PastProject,
  Program,
  ProjectDetails,
  SiteMetadata,
  SocialLink,
  Stat,
} from "@/types/site";

export const companyInfo: CompanyInfo = {
  name: "AI.edu.az",
  fullName: "Azərbaycan Süni İntellekt İnstitutu",
  description:
    "AI mühəndisliyini sıfırdan öyrən, real layihələr üzərində praktika qazan və öz süni intellekt həllərini yarat.",
  aboutTitle: "AI sahəsində ilk addımdan real layihəyə.",
  aboutParagraphs: [
    "AI.edu.az süni intellekt sahəsində praktiki təhsil proqramları, AI məktəbləri və real layihələr həyata keçirən təhsil platformasıdır.",
  ],
};

export const navigation: NavigationItem[] = [
  { label: "Kurslar", href: "/#programs" },
  { label: "Üstünlüklər", href: "/#approach" },
  { label: "Layihələr", href: "/#projects" },
  { label: "Haqqımızda", href: "/#about" },
  { label: "Əlaqə", href: "/#contact" },
];

export const stats: Stat[] = [
  { value: "125+", label: "Yerli və xarici tələbə" },
  { value: "250+ saat", label: "Praktiki tədris" },
  { value: "150+", label: "Hazırlanmış final layihəsi" },
];

export const currentPrograms: Program[] = [
  {
    id: "ai-engineering",
    slug: "ai-muhendisliyi",
    title: "AI mühəndisliyi",
    description:
      "Python əsaslarından Machine Learning, Deep Learning, Generativ AI, LLM və RAG əsaslı tətbiqlərə qədər mərhələli praktiki proqram.",
    cardDescription: "Süni intellekt sistemləri, Machine Learning və praktik model qurulması.",
    category: "Süni intellekt",
    format: "Hibrid",
    duration: "6 ay",
    schedule: "Həftədə 2 dəfə · 2 saat",
    language: "Azərbaycan dili",
    audience: "Sıfırdan başlayan tələbələr və yeni mütəxəssislər",
    href: "/kurslar/ai-muhendisliyi",
    illustration: "/courses/ai-engineering-illustration.png",
    illustrationAlt: "AI mühəndisliyi üçün kod, verilənlər və layihə alətlərini göstərən 3D illüstrasiya",
  },
  {
    id: "generative-ai-content",
    slug: "generativ-ai",
    title: "Generativ AI",
    description:
      "Mətn, vizual, video və səs kontenti hazırla, no-code məhsullar yarat və sadə iş axınlarını avtomatlaşdır.",
    cardDescription: "Generativ AI ilə mətn, vizual və rəqəmsal iş axınlarının hazırlanması.",
    category: "Rəqəmsal kontent və no-code",
    format: "Praktiki təlim",
    duration: "10 həftə",
    schedule: "Həftədə 3 dəfə · 2 saat",
    language: "Azərbaycan dili",
    audience: "Kontent, marketinq və rəqəmsal məhsul yaratmaq istəyənlər",
    href: "/kurslar/generativ-ai",
    illustration: "/courses/generative-ai-illustration-v3.png",
    illustrationAlt: "Smartfon, yaradıcı media, mini-oyun və avtomatlaşdırma axınını göstərən Generativ AI illüstrasiyası",
  },
  {
    id: "ai-data-analytics",
    slug: "ai-esasli-data-analitikasi",
    title: "AI əsaslı data analitikası",
    description:
      "Excel, SQL, Power BI və Python ilə verilənləri analiz et, AI alətləri ilə iş prosesini sürətləndir və real biznes layihələri hazırla.",
    cardDescription: "Verilənlərin analizi, vizuallaşdırılması və AI dəstəkli analitik iş axınları.",
    category: "Data analitikası",
    format: "Praktiki təlim",
    duration: "26 həftə",
    schedule: "Həftədə 2 dəfə · 1.5 saat",
    language: "Azərbaycan dili",
    audience: "Data analitikasına sıfırdan başlayanlar və peşəkar bacarıqlarını inkişaf etdirmək istəyənlər",
    href: "/kurslar/ai-esasli-data-analitikasi",
    illustration: "/courses/ai-data-analytics-illustration.png",
    illustrationAlt: "Diaqramlar, verilənlər cədvəlləri və analiz prosesini göstərən AI əsaslı data analitikası illüstrasiyası",
  },
];

export const aiEngineeringDetails: CourseDetails = {
  intro:
    "Təlim süni intellekt sahəsinə sıfırdan başlamaq və əldə olunan bilikləri real layihələrdə tətbiq etmək istəyənlər üçün hazırlanıb.",
  heroEyebrow: "Sıfırdan başlayanlar üçün",
  experienceTitle: "Burada sadəcə öyrənməyəcəksən. Yaradacaqsan.",
  curriculumTitle: "Sıfırdan real AI layihəsinə.",
  curriculumDescription: "Altı mərhələdə fundamental biliklərdən işlək AI həllinə qədər irəliləyəcəksən.",
  applicationTitle: "AI mühəndisliyinə ilk addımını at.",
  expectations: [
    { title: "Praktiki tədris", description: "Nəzəri bilikləri praktiki tapşırıqlar, laboratoriya işləri və real nümunələr üzərində tətbiq edərək AI texnologiyaları ilə işləmə bacarıqlarını inkişaf etdirəcəksən." },
    { title: "Mini-layihələr", description: "Data Analysis, Machine Learning, Deep Learning və Generativ AI istiqamətlərində mini-layihələr hazırlayaraq öyrəndiklərini praktikada tətbiq edəcəksən." },
    { title: "Real AI layihəsi", description: "Proqramın sonunda əldə etdiyin bilikləri bir araya gətirərək real problemə əsaslanan yekun AI layihəsi hazırlayacaq və təqdim edəcəksən." },
    { title: "Mentor dəstəyi", description: "Tapşırıq və layihələr üzərində işləyərkən qarşılaşdığın çətinlikləri mentor dəstəyi ilə analiz edəcək və sistemli həll etməyi öyrənəcəksən." },
    { title: "Portfolio", description: "Hazırladığın layihələri GitHub üzərindən strukturlaşdıraraq AI sahəsində bacarıqlarını nümayiş etdirən şəxsi portfolio formalaşdıracaqsan." },
    { title: "Karyera hazırlığı", description: "AI sahəsində karyera istiqamətlərini tanıyacaq, layihələrinin təqdimatı və peşəkar profilinin formalaşdırılması üzrə praktiki yanaşmalar əldə edəcəksən." },
  ],
  curriculum: [
    { title: "Süni intellekt və Python əsasları", description: "Süni intellektin iş prinsipləri, Machine Learning, Deep Learning və Generativ AI anlayışları ilə tanışlıq, Python üzrə fundamental biliklər." },
    { title: "Verilənlərin analizi və Machine Learning", description: "Verilənlərin hazırlanması, analizi və vizuallaşdırılması, proqnozlaşdırma və təsnifat üçün Machine Learning modellərinin qurulması." },
    { title: "Deep Learning və neyron şəbəkələri", description: "Neyron şəbəkələrinin iş prinsipi, Deep Learning modellərinin hazırlanması, öyrədilməsi və qiymətləndirilməsi." },
    { title: "Computer Vision və NLP", description: "Görüntü və mətn məlumatlarının emalı, Computer Vision, Natural Language Processing və Transformer əsaslı yanaşmalar." },
    { title: "Generativ AI və böyük dil modelləri", description: "Böyük dil modelləri, Prompt Engineering, RAG, chatbot və sənəd əsaslı AI həllərinin hazırlanması." },
    { title: "AI tətbiqləri və real layihələr", description: "Texnologiyaların praktiki tapşırıq və mini-layihələrdə tətbiqi, real problem əsasında yekun AI layihəsinin hazırlanması." },
  ],
  skillsIntro: "Təlimi tamamladıqdan sonra yalnız nəzəri biliklər deyil, real layihələr üzərində tətbiq edə biləcəyin praktiki bacarıqlar əldə edəcəksən.",
  skills: [
    { title: "Python", description: "Verilənlərin emalı və AI layihələri üçün Python-dan istifadə" },
    { title: "Data Analysis", description: "Verilənlərin təmizlənməsi, analizi və vizuallaşdırılması" },
    { title: "Machine Learning", description: "ML modellərinin qurulması, öyrədilməsi və qiymətləndirilməsi" },
    { title: "Deep Learning", description: "Neyron şəbəkələrinin anlaşılması və modellərin hazırlanması" },
    { title: "Computer Vision", description: "Görüntülərin analizi və təsnifatı üçün AI həlləri" },
    { title: "NLP", description: "Mətnlərin emalı və analizi üçün NLP yanaşmaları" },
    { title: "Generativ AI və LLM", description: "Böyük dil modelləri ilə məqsədyönlü iş" },
    { title: "Prompt Engineering", description: "Daha dəqiq və məqsədyönlü nəticələrin əldə edilməsi" },
    { title: "RAG və chatbotlar", description: "Sənəd və məlumat əsaslı AI sistemlərinin hazırlanması" },
    { title: "AI layihəsi", description: "İdeyadan işlək həllə qədər əsas mərhələlərin icrası" },
  ],
  audiences: [
    { title: "AI sahəsinə sıfırdan başlayırsansa", description: "Süni intellektə maraq göstərirsənsə və öyrənməyə haradan başlayacağını bilmirsənsə." },
    { title: "Tələbə və ya yeni məzunsansa", description: "Texnologiya sahəsində karyera qurmaq və portfolion üçün real layihələr hazırlamaq istəyirsənsə." },
    { title: "Texnologiya ilə maraqlanırsansa", description: "Machine Learning, Deep Learning və Generativ AI üzrə texniki biliklərini genişləndirmək istəyirsənsə." },
    { title: "AI mühəndisliyində inkişaf etmək istəyirsənsə", description: "ML modellərindən LLM və RAG tətbiqlərinə qədər sistemli texniki biliklər əldə etmək istəyirsənsə." },
    { title: "Öz AI layihəni yaratmaq istəyirsənsə", description: "Biliklərini real problem üzərində tətbiq edib işlək AI həlli hazırlamaq istəyirsənsə." },
  ],
  certification: "Təlim Ankara Universitetinin Yapay Zeka Enstitüsü və ANKÜSEM ilə əməkdaşlıq çərçivəsində həyata keçirilir.",
};

export const certificationPartnership: CertificationPartnership = {
  organization: "AI.edu.az",
  university: "Ankara Universiteti",
  benefitTitle: "Xarici universitetlə birgə sertifikatlaşdırma imkanı",
  institutions: [
    { name: "YAPAY ZEKA ENSTİTÜSÜ", parent: "Ankara Universiteti" },
    { name: "ANKÜSEM", parent: "Sürekli Eğitim Merkezi" },
  ],
};

export const generativeAiDetails: CourseDetails = {
  intro:
    "Generativ AI alətlərindən istifadə edərək ideyanı mətnə, vizuala, videoya və işlək rəqəmsal məhsula çevirməyi praktiki tapşırıqlar üzərində öyrən.",
  heroEyebrow: "Kontentdən rəqəmsal məhsula",
  experienceTitle: "İdeyanı yarat. Kontentə və işlək məhsula çevir.",
  curriculumTitle: "İdeyadan tam rəqəmsal layihəyə.",
  curriculumDescription: "Altı mərhələdə AI ilə kontent istehsalından no-code məhsul və avtomatlaşdırılmış iş axınına qədər irəliləyəcəksən.",
  applicationTitle: "Generativ AI ilə yaratmağa başla.",
  expectations: [
    { title: "Praktiki istehsal", description: "Hər mövzunu konkret tapşırıq üzərində tətbiq edərək mətn, vizual, video və səs materialları hazırlayacaqsan." },
    { title: "Mini-layihələr", description: "Reklam materialı, qısa video, sadə veb-sayt və interaktiv mini-məhsul kimi nəticələr yaradacaqsan." },
    { title: "No-code yanaşma", description: "Dərin proqramlaşdırma biliyi olmadan sadə saytların, mini-oyunların və faydalı rəqəmsal alətlərin məntiqini quracaqsan." },
    { title: "Sadə avtomatlaşdırma", description: "Formadan məlumatın qəbul edilməsi, bildirişlərin göndərilməsi və kontent iş axınlarının əlaqələndirilməsi ilə tanış olacaqsan." },
    { title: "Məsuliyyətli AI", description: "Mənbələrin yoxlanılması, müəllif hüquqları, şəxsi məlumatlar, səs və üz istifadəsi üzrə təhlükəsiz yanaşmaları öyrənəcəksən." },
    { title: "Portfolio layihəsi", description: "Kurs boyunca hazırladığın materialları vahid final layihəsində birləşdirərək təqdim edilə bilən portfolio işi yaradacaqsan." },
  ],
  curriculum: [
    { title: "Generativ AI və məsuliyyətli istifadə", description: "Generativ modellərin iş prinsipi, imkanları və məhdudiyyətləri, müəllif hüquqları, şəxsi məlumatların qorunması və AI nəticələrinin yoxlanılması." },
    { title: "Mətn, araşdırma və prompt sistemləri", description: "Məqsədyönlü sorğuların hazırlanması, mətn və kontent planı, araşdırma, mənbələrin müqayisəsi, təqdimat və hesabatların yaradılması." },
    { title: "Vizual kontent və brend ardıcıllığı", description: "Şəkil generasiyası və redaktəsi, kompozisiya, məhsul vizualları, sosial media materialları və vahid brend üslubunun qorunması." },
    { title: "Video, səs və rəqəmsal avatarlar", description: "Qısa video ssenarisi, storyboard, video generasiyası, səsləndirmə, musiqi, avatarlar və AI dəstəkli montaj prosesi." },
    { title: "No-code məhsullar və avtomatlaşdırma", description: "Sadə landing page, portfolio, quiz və mini-oyunların yaradılması, formalar, triggerlər, bildirişlər və yüngül iş axınlarının avtomatlaşdırılması." },
    { title: "İnteqrasiya olunmuş final layihəsi", description: "Briefdən təqdimata qədər mətn, vizual, video və no-code elementləri birləşdirən tam rəqəmsal layihənin hazırlanması." },
  ],
  skillsIntro: "Təlimin sonunda ayrı-ayrı AI alətlərini sınamaqla kifayətlənməyəcək, onları məqsədə uyğun vahid istehsal prosesində birləşdirə biləcəksən.",
  skills: [
    { title: "Prompt sistemləri", description: "Təkrarlana bilən və məqsədyönlü AI sorğularının hazırlanması" },
    { title: "AI ilə araşdırma", description: "Məlumatın toplanması, müqayisəsi və mənbələrin yoxlanılması" },
    { title: "Mətn və kontent planı", description: "Fərqli kanallar üçün strukturlaşdırılmış kontentin hazırlanması" },
    { title: "Vizual istehsal", description: "Brendə uyğun şəkil, poster və reklam materiallarının yaradılması" },
    { title: "Video və səs", description: "Qısa video, səsləndirmə, musiqi və montaj iş axınının qurulması" },
    { title: "No-code sayt", description: "Sadə landing page və portfolio səhifəsinin hazırlanması" },
    { title: "İnteraktiv mini-məhsul", description: "Quiz, mini-oyun və ya faydalı rəqəmsal alətin yaradılması" },
    { title: "Avtomatlaşdırma", description: "Trigger, forma, bildiriş və kontent proseslərinin əlaqələndirilməsi" },
    { title: "Təhlükəsiz istifadə", description: "Məlumat, müəllif hüquqları və AI nəticələri üzrə risklərin idarə edilməsi" },
    { title: "Portfolio təqdimatı", description: "İş prosesinin və hazır nəticənin peşəkar təqdim edilməsi" },
  ],
  audiences: [
    { title: "Generativ AI-yə sıfırdan başlayırsansa", description: "AI alətlərini sistemli şəkildə öyrənmək və praktik nəticə əldə etmək istəyirsənsə." },
    { title: "Kontent və ya SMM mütəxəssissənsə", description: "Mətn, vizual və video istehsalını daha çevik iş axınına çevirmək istəyirsənsə." },
    { title: "Marketoloq və ya sahibkarsansa", description: "Kampaniya materialları və sadə rəqəmsal məhsulları müstəqil hazırlamaq istəyirsənsə." },
    { title: "Dizayn və video ilə maraqlanırsansa", description: "Yaradıcı bacarıqlarını generativ alətlərlə genişləndirmək istəyirsənsə." },
    { title: "Öz rəqəmsal ideyanı reallaşdırmaq istəyirsənsə", description: "Dərin proqramlaşdırma olmadan sayt, mini-oyun və avtomatlaşdırılmış prototip yaratmaq istəyirsənsə." },
  ],
};

export const aiDataAnalyticsDetails: CourseDetails = {
  intro:
    "Verilənləri düzgün hazırlamaq, analiz etmək və nəticələri biznes qərarlarına çevirmək üçün Excel, SQL, Power BI, Python və AI alətlərini vahid praktiki proqramda öyrən.",
  heroEyebrow: "Sıfırdan portfolio layihəsinə",
  experienceTitle: "Verilənləri oxuma. Onlardan qərar yarat.",
  curriculumTitle: "Xam veriləndən aydın biznes nəticəsinə.",
  curriculumDescription: "Altı mərhələdə data düşüncəsindən interaktiv dashboard və tam analitik layihəyə qədər irəliləyəcəksən.",
  applicationTitle: "Data analitikasında ilk layihəni hazırla.",
  expectations: [
    { title: "Praktiki tədris", description: "Mövzuları real biznes sualları, müxtəlif verilənlər dəstləri və mərhələli praktiki tapşırıqlar üzərində tətbiq edəcəksən." },
    { title: "Dörd əsas alət", description: "Excel, SQL, Power BI və Python ilə verilənlərin hazırlanması, analizi və təqdimatı üzrə bütöv iş axını quracaqsan." },
    { title: "AI dəstəkli iş prosesi", description: "AI-dan formula, sorğu və kod hazırlanmasında köməkçi kimi istifadə edəcək, hər nəticəni məntiq və data ilə yoxlamağı öyrənəcəksən." },
    { title: "Mini-layihələr", description: "Satış dashboardu, e-ticarət analizi, idarəetmə hesabatı və Python əsaslı EDA layihəsi hazırlayacaqsan." },
    { title: "Məsuliyyətli analiz", description: "Məxfi məlumatların qorunması, nəticələrin düzgün şərhi, mənbələrin qeyd edilməsi və analizin təkrarlana bilməsi üzrə yanaşmalar qazanacaqsan." },
    { title: "Portfolio", description: "Kursun sonunda SQL, Python və Power BI nəticələrini birləşdirən tam analitik layihəni GitHub üzərindən təqdim edəcəksən." },
  ],
  curriculum: [
    { title: "Data düşüncəsi və məsuliyyətli AI", description: "Data analitikin rolu, biznes sualının qurulması, KPI-lar, data keyfiyyəti, şəxsi məlumatların qorunması və AI nəticələrinin yoxlanılması." },
    { title: "Excel və Power Query", description: "Funksiyalar, Pivot Table, dashboard, Power Query ilə təmizləmə və çevirmə, statistik göstəricilər, ssenari və sadə proqnoz analizi." },
    { title: "SQL və verilənlər bazası", description: "Relational model, SELECT, filter, aggregation, JOIN, CTE, window functions, NULL idarəetməsi və analitik sorğuların optimallaşdırılması." },
    { title: "Power BI və data storytelling", description: "Data modeli, DAX, time intelligence, interaktiv vizuallar, dashboard dizaynı, hesabat paylaşımı və giriş səlahiyyətləri." },
    { title: "Python, statistika və EDA", description: "Python əsasları, Pandas, NumPy, data təmizləmə, vizuallaşdırma, seçmə, korrelyasiya, hipotez yoxlaması və regresiyaya giriş." },
    { title: "AI iş axınları və final layihə", description: "SQL-dən məlumatın alınması, Python ilə analiz, AI ilə yoxlanılan şərh, Power BI təqdimatı və portfolio üçün tam biznes layihəsi." },
  ],
  skillsIntro: "Təlimi tamamladıqdan sonra analitik alətləri ayrı-ayrılıqda deyil, biznes sualından nəticənin təqdimatına qədər vahid prosesdə istifadə edə biləcəksən.",
  skills: [
    { title: "Excel", description: "Funksiyalar, Pivot Table və dinamik analitik dashboardların hazırlanması" },
    { title: "Power Query", description: "Müxtəlif mənbələrdən verilənlərin təmizlənməsi və çevrilməsi" },
    { title: "SQL", description: "Relational bazalarda analitik sorğuların yazılması və yoxlanılması" },
    { title: "Power BI", description: "Data modeli, DAX və interaktiv biznes hesabatlarının qurulması" },
    { title: "Python və Pandas", description: "Verilənlərin emalı, birləşdirilməsi və keşfiyyatçı analizi" },
    { title: "Statistik düşüncə", description: "Göstəricilərin düzgün seçilməsi və nəticələrin əsaslandırılmış şərhi" },
    { title: "Data visualization", description: "Qrafiklərin məqsədə uyğun seçilməsi və aydın data hekayəsinin qurulması" },
    { title: "AI ilə analitik iş", description: "Formula, sorğu və kod üçün AI köməyindən nəzarətli istifadə" },
    { title: "Data təhlükəsizliyi", description: "Məxfi məlumatların qorunması və AI xidmətlərinə təhlükəsiz ötürülməsi" },
    { title: "Portfolio layihəsi", description: "Analiz prosesinin, kodun və biznes nəticələrinin peşəkar təqdimatı" },
  ],
  audiences: [
    { title: "Data analitikasına sıfırdan başlayırsansa", description: "Sahəni sistemli şəkildə öyrənmək və ilk praktiki layihələrini hazırlamaq istəyirsənsə." },
    { title: "Tələbə və ya yeni məzunsansa", description: "Analitik düşüncə və əmək bazarında tələb olunan alətlər üzrə baza qurmaq istəyirsənsə." },
    { title: "Hesabatlarla işləyən mütəxəssissənsə", description: "Excel işlərini SQL, Power BI, Python və AI ilə genişləndirmək istəyirsənsə." },
    { title: "Biznes və ya maliyyə mütəxəssissənsə", description: "Verilənlərdən daha sürətli və əsaslandırılmış qərarlar çıxarmaq istəyirsənsə." },
    { title: "Portfolio qurmaq istəyirsənsə", description: "Real biznes ssenariləri əsasında tam analitik layihə təqdim etmək istəyirsənsə." },
  ],
};

export const approach: ApproachItem[] = [
  { id: "01", title: "Praktiki məşğələlər", description: "Biliklər tapşırıqlar, laboratoriya işləri və real AI layihələri üzərində tətbiq edilir." },
  { id: "02", title: "Beynəlxalq sertifikatlaşdırma", description: "Xarici universitetlə birgə sertifikatlaşdırma imkanı təqdim olunur." },
  { id: "03", title: "Mentor dəstəyi", description: "Öyrənmə prosesində çətinliklər mentorla birlikdə analiz edilir və sistemli həll olunur." },
  { id: "04", title: "Portfolio layihələri", description: "Hazırlanan layihələr GitHub üzərindən strukturlaşdırılaraq şəxsi portfolio formalaşdırılır." },
];

export const pastProjects: PastProject[] = [
  {
    id: "ai4culture",
    year: "Fevral–aprel 2025",
    title: "AI4CULTURE",
    description: "Gənclərin süni intellekt üzrə bilik və praktiki bacarıqlar qazandığı 8 həftəlik təhsil layihəsi.",
    audience: "15+ gənc iştirakçı",
    partner: "World Azerbaijani Youth Union, Süni İntellekt Azərbaycan və Süni İntellekt Tədrisi Mərkəzi",
    cardNote: "Mədəniyyət Nazirliyi ilə birgə",
    href: "/layiheler/ai4culture",
    image: "/projects/ai4culture/group.jpg",
    imageAlt: "AI4CULTURE layihəsinin iştirakçıları və təşkilatçıları",
  },
  {
    id: "ai4youth",
    year: "İyul–sentyabr 2025",
    title: "AI4Youth – Gənclər üçün Süni İntellekt Məktəbi",
    description: "Gənclərin süni intellekt üzrə nəzəri bilik və praktiki bacarıqlar qazandığı 8 həftəlik təhsil layihəsi.",
    audience: "20+ gənc iştirakçı",
    partner: "World Azerbaijani Youth Union, Süni İntellekt Azərbaycan və Süni İntellekt Tədrisi Mərkəzi",
    href: "/layiheler/ai4youth",
    image: "/projects/ai4youth/1756907777524.jpg",
    imageAlt: "AI4Youth proqramında süni intellekt mövzusunun təqdimatı",
  },
  {
    id: "ai-ethics-youth-forum",
    year: "19 sentyabr",
    title: "Süni İntellekt Etikası üzrə I Gənclər Forumu",
    description: "Gənclərin süni intellekt etikası ilə bağlı bilik və baxışlarını genişləndirməyə yönəlmiş maarifləndirici forum.",
    audience: "Gənclər və ekspertlər",
    partner: "Gənclər və İdman Nazirliyi, BDU, 4SİM, BDU Könüllüləri, World Azerbaijani Youth Union və Süni İntellekt Azərbaycan",
    href: "/layiheler/ai-etikasi-gencler-forumu",
    image: "/projects/ai-ethics-youth-forum/1758968005793.jpg",
    imageAlt: "Süni İntellekt Etikası üzrə I Gənclər Forumunun iştirakçıları",
  },
];

export const ai4CultureProject: ProjectDetails = {
  slug: "ai4culture",
  title: "AI4CULTURE",
  subtitle: "Süni İntellekt Məktəbi",
  status: "Tamamlanmış layihə",
  period: "Fevral–aprel 2025",
  duration: "8 həftə",
  participantCount: "15+ iştirakçı",
  summary: "AI4CULTURE iştirakçılarını süni intellektin müasir imkanları ilə tanış edən və praktiki bacarıqlar qazandıran 8 həftəlik təhsil layihəsidir.",
  progressText: "Proqram boyunca iştirakçılar hər həftə yeni mövzular üzrə öyrəndiklərini real nümunələr və praktiki tapşırıqlar üzərində tətbiq edərək yaradıcı, innovativ və komandada işləmə bacarıqlarını inkişaf etdiriblər.",
  goal: "Layihənin məqsədi gənclərin süni intellekt sahəsində nəzəri biliklərlə yanaşı praktiki vərdişlər qazanmasına və gələcək peşəkar fəaliyyətlərində bu biliklərdən istifadə etməsinə şərait yaratmaqdır.",
  organizers: [
    "Süni İntellekt Azərbaycan İnstitutu",
    "Azərbaycan Respublikasının Mədəniyyət Nazirliyi",
    "Süni İntellekt Azərbaycan Platforması",
    "Dünya Azərbaycanlıları Gənclər Təşkilatı",
  ],
  topics: [
    { title: "AI ilə şəkil və video emalı", description: "Süni intellekt alətləri vasitəsilə vizual materialların hazırlanması və emalı." },
    { title: "Səslərin yaradılması və klonlaşdırılması", description: "AI əsaslı səs texnologiyalarının imkanları və onların praktiki tətbiqi." },
    { title: "Prompt mühəndisliyi", description: "AI sistemlərindən daha dəqiq və məqsədyönlü nəticə almaq üçün sorğuların qurulması." },
    { title: "Təqdimat və dizayn bacarıqları", description: "İdeyaların strukturlaşdırılması, vizuallaşdırılması və aydın təqdim olunması." },
  ],
  photos: [
    { src: "/projects/ai4culture/group.jpg", alt: "AI4CULTURE layihəsinin iştirakçıları və təşkilatçıları" },
    { src: "/projects/ai4culture/workshop-01.jpg", alt: "AI4CULTURE iştirakçıları praktiki tapşırıq üzərində işləyirlər" },
    { src: "/projects/ai4culture/workshop-02.jpg", alt: "AI4CULTURE təlimində komanda işi" },
    { src: "/projects/ai4culture/workshop-03.jpg", alt: "AI4CULTURE proqramında praktiki məşğələ" },
    { src: "/projects/ai4culture/session-01.jpg", alt: "AI4CULTURE təlimçisi mövzunu izah edir" },
    { src: "/projects/ai4culture/session-02.jpg", alt: "AI4CULTURE proqramında təqdimat sessiyası" },
    { src: "/projects/ai4culture/session-03.jpg", alt: "AI4CULTURE iştirakçıları dərs zamanı" },
  ],
};

export const ai4YouthProject: ProjectDetails = {
  slug: "ai4youth",
  title: "AI4Youth",
  subtitle: "Gənclər üçün Süni İntellekt Məktəbi",
  status: "Tamamlanmış layihə",
  period: "İyul–sentyabr 2025",
  duration: "8 həftə",
  participantCount: "20+ iştirakçı",
  location: "Globus Center",
  summary: "AI4Youth gəncləri süni intellektin müasir imkanları ilə tanış edən və nəzəri bilikləri praktiki tapşırıqlarda tətbiq etməyə imkan verən 8 həftəlik təhsil layihəsidir.",
  progressText: "Proqram boyunca iştirakçılar hər həftə yeni mövzular üzrə öyrəndiklərini real nümunələr üzərində tətbiq edib, yaradıcı, innovativ və komandada işləmə bacarıqlarını inkişaf etdiriblər.",
  goal: "Layihənin məqsədi gənclərin süni intellekt sahəsində nəzəri biliklərlə yanaşı praktiki vərdişlər qazanmasına və gələcək peşəkar fəaliyyətlərində bu biliklərdən istifadə etməsinə şərait yaratmaqdır.",
  organizers: [
    "Dünya Azərbaycanlıları Gənclər Təşkilatı",
    "Süni İntellekt Azərbaycan Platforması",
    "Süni İntellekt Azərbaycan İnstitutu",
  ],
  topics: [
    { title: "AI ilə şəkil və video emalı", description: "Süni intellekt alətləri vasitəsilə vizual materialların hazırlanması və emalı." },
    { title: "Səslərin yaradılması və klonlaşdırılması", description: "AI əsaslı səs texnologiyalarının imkanları və onların praktiki tətbiqi." },
    { title: "Prompt mühəndisliyi", description: "AI sistemlərindən daha dəqiq və məqsədyönlü nəticə almaq üçün sorğuların qurulması." },
    { title: "Təqdimat və dizayn bacarıqları", description: "İdeyaların strukturlaşdırılması, vizuallaşdırılması və aydın təqdim olunması." },
  ],
  photos: [
    { src: "/projects/ai4youth/1756907777524.jpg", alt: "AI4Youth proqramında süni intellekt mövzusunun təqdimatı" },
    { src: "/projects/ai4youth/1756907777494.jpg", alt: "AI4Youth iştirakçıları noutbuklarla praktiki məşğələdə" },
    { src: "/projects/ai4youth/1756907777520.jpg", alt: "AI4Youth təlimində iştirakçılar və təlimçi" },
    { src: "/projects/ai4youth/1756907776878.jpg", alt: "AI4Youth iştirakçıları dərs zamanı" },
    { src: "/projects/ai4youth/1756907774374.jpg", alt: "AI4Youth təlimçisi iştirakçılara mövzunu izah edir" },
  ],
};

export const aiEthicsYouthForumProject: ProjectDetails = {
  slug: "ai-etikasi-gencler-forumu",
  title: "I Gənclər Forumu",
  subtitle: "Süni İntellekt Etikası",
  status: "Tamamlanmış forum",
  period: "19 sentyabr",
  duration: "1 gün",
  durationLabel: "Forum müddəti",
  participantCount: "Gənclər və ekspertlər",
  location: "Bakı Dövlət Universiteti",
  summary: "Bakı Dövlət Universitetində keçirilən Süni İntellekt Etikası üzrə I Gənclər Forumu dövlət, akademiya, texnologiya və gənclər nümayəndələrini bir araya gətirib.",
  progressText: "Forum rəsmi çıxışlar, iki panel sessiyası və iştirakçılarla interaktiv sual-cavab formatında baş tutub. Müzakirələrdə süni intellekt etikası müxtəlif peşəkar baxışlardan dəyərləndirilib, gənclərin sualları ekspertlər tərəfindən cavablandırılıb.",
  goal: "Forum süni intellekt etikası mövzusunu dövlət, akademiya, texnologiya və gənclər nümayəndələrinin iştirakı ilə açıq müzakirəyə çıxarıb və iştirakçıların ekspertlərlə birbaşa dialoquna şərait yaradıb.",
  organizers: [
    "Azərbaycan Respublikasının Gənclər və İdman Nazirliyi",
    "Bakı Dövlət Universiteti",
    "Dördüncü Sənaye İnqilabının Təhlili və Koordinasiya Mərkəzi (4SİM)",
    "BDU Könüllüləri",
    "World Azerbaijani Youth Union",
    "Süni İntellekt Azərbaycan Platforması",
  ],
  topics: [
    {
      title: "Rəsmi açılış",
      description: "Əliş Ağamirzəyev, Naqif Həmzəyev, Soltan Bayramov, Ramin Həbibzadə, Nərmin Həbibzadə və Nəzrin Süleymanova forum iştirakçıları qarşısında çıxış ediblər.",
    },
    {
      title: "I panel sessiyası",
      description: "Ramin Həbibzadənin moderatorluğu ilə Əsgər Məmmədli, İsmayıl Zeynalov, Nərmin Sazmani və Məhəmməd Babayev süni intellekt etikası üzrə müzakirə aparıblar.",
    },
    {
      title: "II panel sessiyası",
      description: "Mirhüseyn Tağıyevin moderatorluğu ilə Orxan Alırzayev, Rövşən Şərifli və Emil Abdullayev gənclərlə interaktiv müzakirələr apararaq sualları cavablandırıblar.",
    },
    {
      title: "İnteraktiv yekun",
      description: "İştirakçılar üçün sual-cavab oyunu keçirilib və forum xatirə fotosunun çəkilməsi ilə yekunlaşıb.",
    },
  ],
  aboutTitle: "Etika haqqında açıq dialoq.",
  topicsEyebrow: "Forum proqramı",
  topicsTitle: "Müzakirələr və çıxışlar.",
  goalTitle: "Məsuliyyətli AI üçün ortaq müzakirə.",
  galleryEyebrow: "Forumdan anlar",
  photos: [
    { src: "/projects/ai-ethics-youth-forum/1758968005793.jpg", alt: "Süni İntellekt Etikası üzrə I Gənclər Forumunun iştirakçıları" },
    { src: "/projects/ai-ethics-youth-forum/1758968005507.jpg", alt: "Forumun rəsmi hissəsində çıxış edən spiker" },
    { src: "/projects/ai-ethics-youth-forum/1758968005554.jpg", alt: "BDU-da keçirilən forumda çıxış" },
    { src: "/projects/ai-ethics-youth-forum/1758968005817.jpg", alt: "Forumun rəsmi hissəsində Əliş Ağamirzəyevin çıxışı" },
    { src: "/projects/ai-ethics-youth-forum/WhatsApp Image 2026-08-23 at 21.36.09.jpeg", alt: "Süni intellekt etikası üzrə panel müzakirəsi" },
  ],
};

export const partners: Partner[] = [
  {
    id: "ankara-ai",
    category: "Akademik əməkdaşlıq",
    name: "Ankara Universitetinin Yapay Zeka Enstitüsü",
    parentInstitution: "Ankara Universiteti",
    unitName: "Yapay Zeka Enstitüsü",
    relationship: "Akademik və təhsil əməkdaşlığı",
  },
  {
    id: "ankusem",
    category: "Təhsil və sertifikatlaşdırma",
    name: "Ankara Universiteti Sürekli Eğitim Merkezi · ANKÜSEM",
    parentInstitution: "Ankara Universiteti",
    unitName: "Sürekli Eğitim Merkezi · ANKÜSEM",
    relationship: "Təhsil və sertifikatlaşdırma əməkdaşlığı",
  },
  {
    id: "world-azerbaijani-youth",
    category: "Gənclər təşkilatı",
    name: "Dünya Azərbaycanlıları Gənclər Təşkilatı",
    relationship: "Gənclər üçün təhsil və inkişaf təşəbbüsləri üzrə əməkdaşlıq",
  },
];

export const contacts: ContactInfo = {
  email: "ai.edu.azerbaijan@gmail.com",
  phone: "+994 55 586 65 60",
  whatsapp: "+994555866560",
  address: "Cəfər Cabbarlı küç. 609,\nGlobus Center, 13-cü mərtəbə",
  mapUrl: "https://maps.app.goo.gl/62EJKnz42mY1v3S16",
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ai.edu.az/?hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/az%C9%99rbaycan-s%C3%BCni-i%CC%87ntellekt-i%CC%87nstitutu/about/?viewAsMember=true" },
];

export const siteMetadata: SiteMetadata = {
  title: "AI.edu.az | Süni intellekt üzrə praktiki təhsil",
  description: "AI mühəndisliyini sıfırdan öyrən, praktiki layihələr hazırla və öz süni intellekt həllərini yarat.",
  canonicalUrl: "https://ai.edu.az",
  openGraphImage: "/logo-transparent.png",
};
