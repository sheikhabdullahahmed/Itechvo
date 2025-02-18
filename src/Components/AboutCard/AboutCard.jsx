import React from "react";

const OurValues = () => {
    const values = [
        {
            id: 1,
            image: "https://themewagon.github.io/FlexStart/assets/img/values-1.png",
            title: "Why Choose Us?",
            description:
                "At itechvo, we don’t just provide services; we build lasting partnerships with our clients. Our commitment to innovation and creativity",
        },
        {
            id: 2,
            image: "https://themewagon.github.io/FlexStart/assets/img/values-2.png",
            title: "Our Approach",
            description:
                "Every project we undertake is a blend of research, creativity, and data-driven strategies. We aim to create experiences that captivate audiences.",
        },
        {
            id: 3,
            image: "https://weekplan-www.s3.amazonaws.com/undraw_forming_ideas_re_2afc.png",
            title: "Our Mission",
            description:
                "Our mission is to empower brands to grow and succeed with impactful strategies and creative solutions that deliver real impact in the market.",
        },
        {
            id: 4,
            image: "https://cdn.smartrecruiters.com/blog/wp-content/uploads/2022/03/undraw_Referral_re_0aji-1200x988.jpg",
            title: "Our Vision",
            description:
                "Our vision is to establish itechvo as a globally recognized marketing agency known for creativity and delivering measurable success"
        }
    ];

    const stats = [
        { id: 1, icon: "😊", value: "232", label: "Happy Clients" },
        { id: 2, icon: "📋", value: "521", label: "Projects" },
        { id: 3, icon: "🎧", value: "1463", label: "Hours Of Support" },
        { id: 4, icon: "👥", value: "15", label: "Hard Workers" },
    ];

    return (
        <div className="py-10 text-center our-values-container">
            {/* Section Title */}
            <div className="inline-block px-4 py-2 my-3 text-sm font-semibold text-purple-500 bg-gray-200 rounded-full text-pue section-main-title">
                OUR VALUES
            </div>
            <h2 className="mb-10 text-3xl font-semibold text-purple-900 md:text-4xl m section-title">What we value most</h2>

            {/* Values Grid */}
            <div className="flex flex-wrap justify-center gap-4 mb-24 values-grid">
                {values.map((value) => (
                    <div key={value.id} className="value-card bg-white rounded-lg p-12 shadow-lg max-w-sm min-w-[300px] text-center flex-1 flex-grow-0">
                        <img src={value.image} alt={value.title} className="h-auto max-w-full mb-5 value-image" />
                        <h3 className="mb-2 text-xl font-medium text-purple-900 value-title">{value.title}</h3>
                        <p className="text-base font-semibold text-center text-gray-600 value-description">"{value.description.slice(0,120)}"</p>
                    </div>
                ))}
            </div>

            {/* Stats Grid */}
            <div className="flex flex-wrap justify-center gap-5 stats-grid">
                {stats.map((stat) => (
                    <div key={stat.id} className="stat-card flex items-center gap-4 bg-white p-8 shadow-lg max-w-xs min-w-[250px] flex-1 flex-grow-0">
                        <div className="text-3xl text-blue-500 stat-icon">{stat.icon}</div>
                        <div>
                            <div className="text-3xl stat-value">{stat.value}</div>
                            <div className="text-sm text-gray-600 stat-label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurValues;
