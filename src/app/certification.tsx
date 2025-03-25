"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function Certifications() {
    const certifications = [
        {
            title: "Certified AppSec Practitioner (CAP)",
            description:
                "Certified AppSec Practitioner (CAP) by The SecOps Group validates expertise in identifying, exploiting, and mitigating application security vulnerabilities to strengthen overall software security.",
            image: "/image/cap.png",
        },
        {
            title: "Practical Junior Penetration Tester (PJPT)",
            description:
                "PJPT (Practical Junior Penetration Tester) by TCM Security certifies hands-on skills in penetration testing, covering network exploitation, web application security, Active Directory attacks, and report writing.",
            image: "/image/pjpt.png",
        },
        {
            title: "Certified in Cybersecurity (CC)",
            description:
                "(ISC)² Certified in Cybersecurity (CC) validates foundational cybersecurity knowledge, demonstrating expertise in security principles, risk management, and threat mitigation.",
            image: "/image/cc.png",
        },
    ];

    return (
        <section id="certifications" className="py-12 px-8 lg:py-24">
            <div className="container max-w-screen-lg mx-auto">
                <div className="container mx-auto mb-20 text-center">
                    <Typography variant="h2" color="blue-gray" className="mb-4">
                        Certifications
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
                    >
                        Explore my professional certifications that showcase my expertise
                        and commitment to excellence in the cybersecurity industry.
                    </Typography>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <Card
                            key={index}
                            color="transparent"
                            shadow={false}
                            className="py-8 text-center"
                        >
                            <div className="h-[19rem] rounded-lg mb-6">
                                <Image
                                    width={768}
                                    height={768}
                                    alt={cert.title}
                                    src={cert.image}
                                    className="h-full rounded-lg w-full object-cover"
                                />
                            </div>
                            <CardBody>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-4 font-bold"
                                >
                                    {cert.title}
                                </Typography>
                                <Typography className="font-normal !text-gray-500">
                                    {cert.description}
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
    );
}

export default Certifications;
