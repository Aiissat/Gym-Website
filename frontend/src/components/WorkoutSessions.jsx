import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Une séance complète pour travailler l’ensemble du corps et améliorer votre endurance. La séance se termine par des étirements pour favoriser la récupération musculaire et prévenir les blessures. Que vous soyez débutant ou confirmé, cette session est adaptable à tous les niveaux.
        </p>
        <img src="/img3.jpeg" alt="workout" />
        <img src="/img4.jpeg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Des programmes bien detaillés pour vous aider a atteindre vos objectifs
        </p>
        <div className="bootcamps">
          <div>
            <h4>1.Bootcamp de remise en forme</h4>
            <p>
	      Ce programme de 4 semaines est conçu pour les personnes souhaitant améliorer leur condition physique générale. Les sessions incluent un mélange d’exercices cardio et de renforcement musculaire.
            </p>
          </div>
          <div>
            <h4>2.Bootcamp HIIT (High-Intensity Interval Training)</h4>
            <p>
            Un entraînement intense basé sur des exercices en intervalles courts et explosifs. Ce bootcamp est parfait pour ceux qui veulent maximiser leur effort en peu de temps.
            </p>
          </div>
          <div>
            <h4>3.Bootcamp Yoga et bien-être</h4>
            <p>
            Un programme axé sur le bien-être mental et physique. Combine des postures de yoga avec des exercices doux de renforcement musculaire.Description : Un programme axé sur le bien-être mental et physique. Combine des postures de yoga avec des exercices doux de renforcement musculaire.
            </p>
          </div>
          <div>
            <h4>4.Bootcamp spécial abdominaux et bas du corps </h4>
            <p>
            Entraînement ciblé pour tonifier les abdominaux, les hanches et les jambes. Utilise des poids et des exercices au poids du corps.
            </p>
          </div>
          <div>
            <h4>5.Bootcamp Boxe/Défoulement </h4>
            <p>
            Ce bootcamp combine des techniques de boxe avec des exercices de haute intensité pour brûler un maximum de calories tout en apprenant à se défendre. Il s'agit d'un programme intense conçu pour libérer du stress tout en renforçant l'endurance, la force et la coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
