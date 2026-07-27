import "./ContactSection.css";

const contactContent = {
  title: "Contact",
  message: "새로운 프로젝트와 협업에 대해 이야기 나누고 싶다면 편하게 연락해 주세요.",
  name: "김동환",
  englishName: "Kim Donghwan",
  phone: "010-2557-3564",
  email: "iensud184@naver.com",
  githubLabel: "github.com/iensud184-max",
  githubUrl: "https://github.com/iensud184-max",
  thanks: "Thank you for visiting my portfolio",
};

function ContactSection() {
  return <section className="contact-page" aria-labelledby="contact-title"><div className="contact-content"><h2 id="contact-title">{contactContent.title}</h2><div className="contact-glass"><p className="contact-message">{contactContent.message}</p><article className="contact-card"><div><p className="contact-name">{contactContent.name}</p><p className="contact-name-en">{contactContent.englishName}</p></div><div className="contact-links"><a href={`tel:${contactContent.phone.replaceAll("-", "")}`}><span>PHONE</span>{contactContent.phone}</a><a href={`mailto:${contactContent.email}`}><span>EMAIL</span>{contactContent.email}</a><a href={contactContent.githubUrl} target="_blank" rel="noreferrer"><span>GITHUB</span>{contactContent.githubLabel}</a></div></article></div><p className="contact-thanks">{contactContent.thanks}</p></div></section>;
}

export default ContactSection;
