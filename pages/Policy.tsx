import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

// TypeScript interfaces for a snappy, type-safe codebase
interface Subsection {
  subtitle: string;
  content: string;
}

interface Section {
  title: string;
  content: string;
  subsections?: Subsection[];
}

interface Translation {
  back: string;
  title: string;
  intro: string;
  controller: string;
  sections: Section[];
  updated: string;
}

const Policy: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang as 'lv' | 'en' | 'ru') || 'lv';

  const translations: Record<'lv' | 'en' | 'ru', Translation> = {
    lv: {
      back: "Atpakaļ",
      title: "Privātuma Politika",
      intro: "Mēs augstu vērtējam jūsu privātumu un datu drošību.",
      controller: "Datu pārzinis: Brīvdienu māja 'Mežlīči'. Saziņai par datu apstrādi: info@mezlici.lv",
      sections: [
        { 
          title: "1. Vispārīgie Noteikumi un Tiesiskais Pamats", 
          content: "Brīvdienu māja 'Mežlīči' apstrādā jūsu personas datus, stingri ievērojot Eiropas Savienības un Latvijas Republikas spēkā esošos normatīvos aktus. Mēs apkopojam tikai to informāciju, kas absolūti nepieciešama rezervācijas nodrošināšanai.",
          subsections: [
            {
              subtitle: "Vispārīgā datu aizsardzības regula (VDAR / GDPR)",
              content: "Eiropas Parlamenta un Padomes Regula (ES) 2016/679 nosaka galvenos principus datu vākšanai, caurskatāmībai un lietotāju tiesībām."
            },
            {
              subtitle: "Fizisko personu datu apstrādes likums",
              content: "Latvijas Republikas nacionālais likums, kas papildina VDAR un nosaka specifiskus noteikumus datu apstrādei nacionālajā līmenī."
            }
          ]
        },
        { 
          title: "2. Datu Vākšana, Apstrāde un Mērķis", 
          content: "Saskaņā ar VDAR 6. panta 1. punkta b) apakšpunktu (līguma izpilde), mēs apstrādājam personas datus tikai mērķiem, kas saistīti ar pakalpojuma sniegšanu.",
          subsections: [
            {
              subtitle: "Kādus datus mēs apkopojam?",
              content: "Vārds, uzvārds, tālruņa numurs, e-pasta adrese un saziņas vēsture, kas saistīta ar rezervāciju."
            },
            {
              subtitle: "Kāpēc mēs tos apkopojam?",
              content: "Dati tiek izmantoti tikai, lai administrētu jūsu rezervāciju, nodrošinātu uzturēšanos un sazinātos ar jums par pakalpojuma detaļām."
            }
          ]
        },
        { 
          title: "3. Sīkdatnes (Cookies)", 
          content: "Mēs izmantojam tikai tehniskās sīkdatnes, kas ir nepieciešamas mājaslapas pamata funkcionalitātei.",
          subsections: [
            {
              subtitle: "Informācijas sabiedrības pakalpojumu likums",
              content: "Saskaņā ar šī likuma prasībām, strikti nepieciešamo (tehnisko) sīkdatņu izmantošanai lietotāja piekrišana nav obligāta. Mēs neizmantojam invazīvas izsekošanas tehnoloģijas vai trešo pušu mārketinga sīkdatnes."
            }
          ]
        },
        { 
          title: "4. Datu Nodošana Trešajām Pusēm", 
          content: "Jūsu personas dati netiek nodoti trešajām pusēm mārketinga vai komerciāliem nolūkiem. Datu nodošana var notikt tikai stingri noteiktos izņēmuma gadījumos:",
          subsections: [
            {
              subtitle: "Tiesībsargājošās iestādes",
              content: "Ja to pieprasa Valsts policija vai citas kompetentās iestādes saskaņā ar spēkā esošajiem Latvijas Republikas likumiem."
            }
          ]
        },
        { 
          title: "5. Datu Glabāšana un Drošība", 
          content: "Mēs veicam tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu datus no nesankcionētas piekļuves, nozaudēšanas vai izpaušanas. Dati tiek glabāti tikai tik ilgi, cik nepieciešams pakalpojuma sniegšanai (grāmatvedības nolūkos saskaņā ar likumu 'Par grāmatvedību' – līdz 5 gadiem)." 
        },
        { 
          title: "6. Jūsu Tiesības", 
          content: "Saskaņā ar VDAR, jums ir plašas tiesības pārvaldīt savus datus. Lai tās izmantotu, lūdzu, sazinieties ar mums elektroniski.",
          subsections: [
            {
              subtitle: "Piekļuve un labošana",
              content: "Jums ir tiesības pieprasīt informāciju par mūsu rīcībā esošajiem datiem un pieprasīt kļūdainas informācijas labošanu."
            },
            {
              subtitle: "Tiesības 'tikt aizmirstam'",
              content: "Jūs varat pieprasīt savu datu dzēšanu, ja to glabāšanai vairs nav tiesiska pamata (piemēram, nav aktīvu rezervāciju vai grāmatvedības prasību)."
            },
            {
              subtitle: "Sūdzību iesniegšana",
              content: "Jums ir tiesības vērsties Datu valsts inspekcijā (DVI), ja uzskatāt, ka datu apstrāde pārkāpj jūsu tiesības."
            }
          ]
        }
      ],
      updated: "Atjaunots: 2026. gada Augusts"
    },
    en: {
      back: "Back",
      title: "Privacy Policy",
      intro: "We highly value your privacy and data security.",
      controller: "Data Controller: Holiday home 'Mežlīči'. For inquiries regarding data processing: info@mezlici.lv",
      sections: [
        { 
          title: "1. General Provisions & Legal Basis", 
          content: "Holiday home 'Mežlīči' processes your personal data in strict compliance with the applicable legal acts of the European Union and the Republic of Latvia. We collect only the information absolutely necessary for securing your reservation.",
          subsections: [
            {
              subtitle: "General Data Protection Regulation (GDPR)",
              content: "Regulation (EU) 2016/679 of the European Parliament sets the core principles for data collection, transparency, and user rights."
            },
            {
              subtitle: "Personal Data Processing Law",
              content: "The national law of the Republic of Latvia that supplements the GDPR and dictates specific data processing rules at the national level."
            }
          ]
        },
        { 
          title: "2. Data Collection, Processing, and Purpose", 
          content: "In accordance with Article 6(1)(b) of the GDPR (performance of a contract), we process personal data solely for purposes related to providing our services.",
          subsections: [
            {
              subtitle: "What data do we collect?",
              content: "Name, surname, phone number, email address, and communication history directly related to the reservation."
            },
            {
              subtitle: "Why do we collect it?",
              content: "This data is used exclusively to administer your reservation, facilitate your stay, and communicate service details."
            }
          ]
        },
        { 
          title: "3. Cookies", 
          content: "We only use technical cookies that are strictly necessary for the core functionality of the website.",
          subsections: [
            {
              subtitle: "Law on Information Society Services",
              content: "Under this Latvian law, explicit user consent is not required for strictly necessary (technical) cookies. We do not use invasive tracking technologies or third-party marketing cookies."
            }
          ]
        },
        { 
          title: "4. Data Transfer to Third Parties", 
          content: "Your personal data is never transferred to third parties for marketing or commercial purposes. Data transfers only occur in strict exceptional cases:",
          subsections: [
            {
              subtitle: "Law Enforcement",
              content: "If requested by the State Police or other competent authorities in accordance with the applicable laws of the Republic of Latvia."
            }
          ]
        },
        { 
          title: "5. Data Storage and Security", 
          content: "We implement technical and organizational measures to protect your data from unauthorized access, loss, or disclosure. Data is stored only as long as necessary to provide the service (for accounting purposes, as per the Law 'On Accounting' – up to 5 years)." 
        },
        { 
          title: "6. Your Rights", 
          content: "Under the GDPR, you have extensive rights to manage your data. To exercise them, please contact us electronically.",
          subsections: [
            {
              subtitle: "Access and Rectification",
              content: "You have the right to request information about your data in our possession and request corrections to any inaccuracies."
            },
            {
              subtitle: "The Right to be Forgotten",
              content: "You can request the deletion of your data if there is no longer a legal basis for its storage (e.g., no active reservations or accounting requirements)."
            },
            {
              subtitle: "Filing Complaints",
              content: "You have the right to contact the Data State Inspectorate (DVI) of Latvia if you believe your rights have been violated."
            }
          ]
        }
      ],
      updated: "Updated: August 2026"
    },
    ru: {
      back: "Назад",
      title: "Политика Конфиденциальности",
      intro: "Мы высоко ценим вашу конфиденциальность и безопасность данных.",
      controller: "Контролер данных: Дом отдыха 'Mežlīči'. По вопросам обработки данных: info@mezlici.lv",
      sections: [
        { 
          title: "1. Общие положения и Правовая основа", 
          content: "Дом отдыха 'Mežlīči' обрабатывает ваши персональные данные в строгом соответствии с действующими нормативными актами Европейского Союза и Латвийской Республики. Мы собираем только ту информацию, которая абсолютно необходима для бронирования.",
          subsections: [
            {
              subtitle: "Общий регламент по защите данных (GDPR)",
              content: "Регламент (ЕС) 2016/679 устанавливает основные принципы сбора данных, прозрачности и прав пользователей."
            },
            {
              subtitle: "Закон об обработке данных физических лиц",
              content: "Национальный закон Латвийской Республики, который дополняет GDPR и устанавливает специфические правила обработки данных."
            }
          ]
        },
        { 
          title: "2. Сбор, обработка и цели", 
          content: "В соответствии со статьей 6(1)(b) GDPR (исполнение договора), мы обрабатываем данные исключительно для целей, связанных с оказанием услуг.",
          subsections: [
            {
              subtitle: "Какие данные мы собираем?",
              content: "Имя, фамилия, номер телефона, адрес электронной почты и история переписки, связанной с бронированием."
            },
            {
              subtitle: "Зачем мы их собираем?",
              content: "Данные используются исключительно для администрирования бронирования, организации вашего проживания и связи с вами."
            }
          ]
        },
        { 
          title: "3. Файлы cookie", 
          content: "Мы используем только технические файлы cookie, необходимые для базовой работы сайта.",
          subsections: [
            {
              subtitle: "Закон об услугах информационного общества",
              content: "Согласно этому закону Латвии, согласие пользователя на строго необходимые (технические) cookie не требуется. Мы не используем сторонние маркетинговые технологии отслеживания."
            }
          ]
        },
        { 
          title: "4. Передача данных третьим лицам", 
          content: "Ваши данные никогда не передаются третьим лицам в маркетинговых целях. Передача возможна только в исключительных случаях:",
          subsections: [
            {
              subtitle: "Правоохранительные органы",
              content: "По официальному запросу Государственной полиции или других компетентных органов в соответствии с законами Латвийской Республики."
            }
          ]
        },
        { 
          title: "5. Хранение и безопасность данных", 
          content: "Мы принимаем технические и организационные меры для защиты ваших данных. Данные хранятся ровно столько, сколько требуется для оказания услуги (в целях бухгалтерии, согласно закону 'О бухгалтерском учете' – до 5 лет)." 
        },
        { 
          title: "6. Ваши права", 
          content: "Согласно GDPR, у вас есть широкие права по управлению своими данными. Для их реализации свяжитесь с нами по электронной почте.",
          subsections: [
            {
              subtitle: "Доступ и исправление",
              content: "Вы имеете право запросить информацию о ваших данных и потребовать исправления неточностей."
            },
            {
              subtitle: "Право «быть забытым»",
              content: "Вы можете запросить удаление данных, если больше нет законных оснований для их хранения (например, нет активных бронирований или требований к учету)."
            },
            {
              subtitle: "Подача жалоб",
              content: "Вы имеете право обратиться в Государственную инспекцию данных Латвии (DVI), если считаете, что ваши права были нарушены."
            }
          ]
        }
      ],
      updated: "Обновлено: Август 2026"
    }
  };

  const t = translations[currentLang];

  if (!t) return null;

  const seoKeywords = {
    lv: "privātuma politika, gdpr, datu drošība, noteikumi, fizisko personu datu apstrādes likums",
    en: "privacy policy, gdpr, data security, terms, personal data processing law",
    ru: "политика конфиденциальности, gdpr, безопасность данных, условия, закон об обработке данных"
  }[currentLang];

  return (
    <div className="pt-32 px-6 pb-24 min-h-screen bg-cream dark:bg-cream-dark transition-colors duration-500 animate-fade-in">
      <SEO 
        title={`${t.title} | Mežlīči`}
        description={t.intro}
        keywords={seoKeywords}
        lang={currentLang}
      />
      <div className="max-w-3xl mx-auto">
        <Link 
          to={`/${currentLang}`}
          className="text-xs font-bold uppercase tracking-widest text-charcoal-900/50 dark:text-white/40 hover:text-charcoal-900 dark:hover:text-white transition-colors mb-12 block"
        >
          ← {t.back}
        </Link>
        <h1 className="font-serif text-5xl text-charcoal-900 dark:text-cream mb-12 transition-colors">{t.title}</h1>
        
        <div className="space-y-12 text-charcoal-800 dark:text-cream/80 leading-relaxed font-light text-lg transition-colors">
          <p className="text-2xl font-serif italic text-charcoal-900 dark:text-cream">
            {t.intro}
          </p>
          
          <p className="text-sm font-medium text-charcoal-900 dark:text-cream/90">
            {t.controller}
          </p>
          
          {t.sections.map((section, idx) => (
            <PolicySection 
              key={idx} 
              title={section.title} 
              content={section.content}
              subsections={section.subsections}
            />
          ))}

          <div className="pt-8 mt-12 border-t border-charcoal-900/10 dark:border-white/10">
            <p className="text-sm text-charcoal-900/50 dark:text-white/30">{t.updated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PolicySection: React.FC<Section> = ({ title, content, subsections }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-charcoal-900 dark:text-cream text-sm uppercase tracking-widest border-b border-stone dark:border-white/10 pb-2 transition-colors">
      {title}
    </h3>
    <p>{content}</p>
    
    {subsections && (
      <div className="mt-4 space-y-4 pl-4 border-l-2 border-charcoal-900/10 dark:border-white/10">
        {subsections.map((sub, idx) => (
          <div key={idx} className="space-y-1">
            <h4 className="font-semibold text-charcoal-900 dark:text-cream text-base">
              {sub.subtitle}
            </h4>
            <p className="text-charcoal-700 dark:text-cream/70 text-base">
              {sub.content}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Policy;
