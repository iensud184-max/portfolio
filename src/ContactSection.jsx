import "./ContactSection.css";

const contactContent = {
  title: "Contact",
  message: "데이터 분석과 머신러닝 역량을 바탕으로\n실제 문제 해결에 기여할 기회를 찾고 있습니다.",
  name: "김동환",
  englishName: "Kim Donghwan",
  phone: "010-2557-3564",
  email: "iensud184@naver.com",
  githubLabel: "github.com/iensud184-max",
  githubUrl: "https://github.com/iensud184-max",
  thanks: "Thank you for visiting\nmy portfolio",
};

function ContactSection() {
  return <section className="contact-page" aria-labelledby="contact-title"><div className="contact-content"><h2 id="contact-title">{contactContent.title}</h2><div className="contact-glass"><p className="contact-message">{contactContent.message}</p><article className="contact-card"><div><p className="contact-name">{contactContent.name}</p><p className="contact-name-en">{contactContent.englishName}</p></div><div className="contact-links"><a href={`tel:${contactContent.phone.replaceAll("-", "")}`}><span>PHONE</span>{contactContent.phone}</a><a href={`mailto:${contactContent.email}`}><span>EMAIL</span>{contactContent.email}</a><a href={contactContent.githubUrl} target="_blank" rel="noreferrer"><span>GITHUB</span>{contactContent.githubLabel}</a></div></article></div><p className="contact-thanks">{contactContent.thanks}</p></div></section>;
}

export default ContactSection;
