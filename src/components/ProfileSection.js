import './ProfileSection.css';

const PROFILE_IMG = `${process.env.PUBLIC_URL}/assets/perfil/perfil.webp`;

function ProfileSection() {
  return (
    <section id="perfil" className="profile-section" aria-label="Perfil">
      <div className="profile-section__inner">
        <div className="profile-section__panel">
          <span className="profile-section__bg-word" aria-hidden="true">
            <span className="profile-section__bg-word-inner">PUBLICIDAD</span>
          </span>
          <div className="profile-section__photo-ring">
            <img
              className="profile-section__photo"
              src={PROFILE_IMG}
              alt="Foto de perfil"
              width={320}
              height={320}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
