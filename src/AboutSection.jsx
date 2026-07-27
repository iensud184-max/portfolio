import "./AboutSection.css";

const aboutContent = {
  name: "김동환",
  title: "ABOUT ME",
  role: "Process Data Analyst | Machine Learning Engineer",
  competencies: [
    { title: "Process Understanding", description: "공정 흐름을 이해하고 병목과 비효율의 원인을 구조적으로 살펴봅니다." },
    { title: "Data Analysis", description: "Python 기반 데이터 분석으로 데이터의 패턴과 개선 단서를 찾습니다." },
    { title: "Quality Improvement", description: "FMEA, 실험계획법, 통계적 품질관리로 품질 문제의 원인을 분석합니다." },
    { title: "AI Application", description: "머신러닝 기반 이상 탐지와 예측 모델을 활용한 문제 개선 방법을 학습하고 있습니다." },
  ],
  goal: "데이터 분석을 통해 문제의 원인을 찾고, 머신러닝 모델로 더 나은 의사결정을 돕는 엔지니어로 성장하고 싶습니다. 공정 데이터 분석과 품질 AI 분야에서 경험을 쌓는 것이 현재의 목표입니다.",
};

function AboutSection() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <header className="about-hero"><h2 id="about-title">{aboutContent.title}</h2></header>
      <div className="about-profile"><p className="about-name">{aboutContent.name}</p><p className="about-role">{aboutContent.role}</p></div>
      <section className="competency-section" aria-labelledby="competencies-title">
        <div className="about-section-heading"><p id="competencies-title">CORE COMPETENCIES</p></div>
        <div className="competency-grid">{aboutContent.competencies.map((competency) => <article className="competency-card" key={competency.title}><h4>{competency.title}</h4><p>{competency.description}</p></article>)}</div>
      </section>
      <aside className="career-goal" aria-labelledby="career-title"><p>CAREER GOAL</p><h3 id="career-title">Process Data &amp; Machine Learning</h3><p>{aboutContent.goal}</p></aside>
    </section>
  );
}

export default AboutSection;
