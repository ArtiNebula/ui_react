import React from 'react';
import TeamOne from './../../assets/img/team/team-1.jpg'; 
import TeamSecond from './../../assets/img/team/team-2.jpg';
import TeamThird from './../../assets/img/team/team-3.jpg';
import TeamForth from './../../assets/img/team/team-4.jpg';

const teamMembers = [
    {
        name: "Walter White",
        title: "Chief Executive Officer",
        description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
        imgSrc: TeamOne,
        socialLinks: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        aosDelay: 100
    },
    {
        name: "Sarah Jhonson",
        title: "Product Manager",
        description: "Aut maiores voluptates amet et quis praesentium qui senda para",
        imgSrc: TeamSecond,
        socialLinks: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        aosDelay: 200
    },
    {
        name: "William Anderson",
        title: "CTO",
        description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
        imgSrc: TeamThird,
        socialLinks: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        aosDelay: 300
    },
    {
        name: "Amanda Jepson",
        title: "Accountant",
        description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
        imgSrc: TeamForth,
        socialLinks: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        aosDelay: 400
    },
    {
        name: "Amanda Jepson",
        title: "Accountant",
        description: "Dolorum tempora officiis odit laborum officiis et et accusamus",
        imgSrc: TeamForth,
        socialLinks: {
            twitter: "#",
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        },
        aosDelay: 400
    }
];

const TeamMember = ({ member }) => (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={member.aosDelay}>
        <div className="team-member d-flex align-items-start">
            <div className="pic">
                <img src={member.imgSrc} className="img-fluid" alt={member.name} />
            </div>
            <div className="member-info">
                <h4>{member.name}</h4>
                <span>{member.title}</span>
                <p>{member.description}</p>
                <div className="social">
                    <a href={member.socialLinks.twitter}><i className="bi bi-twitter-x"></i></a>
                    <a href={member.socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={member.socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={member.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
);

const TeamSection = () => {
    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
