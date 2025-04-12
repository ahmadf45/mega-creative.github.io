import React from "react";
import { PersonalProjectList } from "../../../data/ProjectData";
import {
    Card,
    CardLeft,
    CardRight,
    TechCardContainer,
    TechCard,
    BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function PersonalProjectCard() {
    return (
        <>
            {PersonalProjectList.map((list, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Card>
                        <CardLeft>
                            <img src={list.img} alt={list.name} />
                        </CardLeft>
                        <CardRight>
                            <h4>{list.title}</h4>
                            <p>{list.description}</p>
                            <TechCardContainer>
                                {list.tech_stack.map((tech, index) => (
                                    <TechCard key={index}>{tech}</TechCard>
                                ))}
                            </TechCardContainer>
                            <BtnGroup>
                                {list.playstore_url.length > 0 && (
                                    <a
                                        className="btn PrimaryBtn btn-shadow "
                                        href={list.playstore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "#4285f4",
                                        }}
                                    >
                                        Play Store
                                    </a>

                                )}
                                {list.appstore_url.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.appstore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            borderColor: "#000000",
                                        }}
                                    >
                                        App Store
                                    </a>
                                )}
                                {list.web_url.length > 0 && (
                                    <a
                                        className="btn PrimaryBtn btn-shadow "
                                        href={list.web_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "#4285f4",
                                        }}
                                    >
                                        Website
                                    </a>

                                )}
                            </BtnGroup>
                        </CardRight>
                    </Card>
                </ScrollAnimation>
            ))}
        </>
    );
}

export default PersonalProjectCard;
