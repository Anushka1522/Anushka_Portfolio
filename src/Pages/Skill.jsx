// components/Skills.jsx
import './css/Skill.css';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: "Frontend Development",
      color: "#f5af19",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Backend Development",
      color: "#ffcc00",
      items: ["Core Java", "JDBC", "Spring Core", "Spring Boot", "MySQL"],
    },
    // {
    //   category: "UI/UX Design",
    //   color: "#ffd54f",
    //   items: ["Responsive Design"],
    // },
    {
      category: "Tools & Platforms",
      color: "#ffee58",
      items: ["Git", "VS Code", "Eclipse", "Postman", "STS 4"],
    },
  ];

  return (
    <section className="skills-container">
      <h2 className="skills-heading">
        My <span>Skills</span>
      </h2>
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 style={{ borderLeftColor: category.color }}>
            {category.category}
          </h3>
          <ul className="skill-list">
            {category.items.map((skill, idx) => (
              <li key={idx} className="skill-item">
                <span className="check-icon">✔</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
