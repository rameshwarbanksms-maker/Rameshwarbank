import styles from './page.module.css';

export default function BoardOfDirectors() {
  const boardMembers = [
    {
      name: "Mr. Rajesh Kumar",
      designation: "Chairman",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mrs. Priya Sharma",
      designation: "Vice Chairman",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mr. Amit Patel",
      designation: "Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Sunita Verma",
      designation: "Independent Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mr. Vikash Singh",
      designation: "Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mrs. Kavita Joshi",
      designation: "Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mr. Deepak Gupta",
      designation: "Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mrs. Meera Agarwal",
      designation: "Director",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Board of Directors</h1>
          <p className={styles.subtitle}>Leadership that drives our vision forward</p>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Board Meeting"
            className={styles.mainImage}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <h2>Our Distinguished Board</h2>
          <p>
            The Board of Directors of Model Co-op Bank Ltd. comprises experienced professionals 
            from diverse backgrounds who bring valuable expertise in banking, finance, and 
            cooperative management. Their collective wisdom guides our strategic direction 
            and ensures sound governance practices.
          </p>
        </div>

        <div className={styles.membersGrid}>
          {boardMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberDesignation}>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}