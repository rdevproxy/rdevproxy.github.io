"use client";

import { Typography } from "@material-tailwind/react";
import {
  GlobeAsiaAustraliaIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: GlobeAsiaAustraliaIcon,
    title: "Web Penetration Testing:",
    children:
      "Performs in-depth security assessments on web applications, identifying OWASP Top 10 vulnerabilities and adhering to OWASP Web Security Testing Guide using tools such as Burp Suite, OWASP Zap, and open source tools.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Penetration Testing",
    children:
      "Conducts static and dynamic analysis of Android and iOS applications, testing for insecure data storage, API vulnerabilities, and decompiling APK using tools such as MobSF, Android Debug Bridge, and Burp Suite.",
  },
  {
    icon: WifiIcon,
    title: "Network Penetration Testing",
    children:
      "Evaluates Active Directory security by testing for misconfiguration, overly-permissive domain users, domain admin, and service acccounts. Leverages tools such as Mimikatz, Metaploit and Impacket to identify vulnerbilities and recommend remediation strategies.",
  },
  {
    icon: BellAlertIcon,
    title: "Incident Response",
    children:
      "Investigates and mitigates security incidents by analyzing events and endpoint activity to detect threats, contain breaches, and minimize dwell time. Utilizes threat intelligence platforms to identify Indicators of Compromise (IoCs) and respond to malware infections, lateral movement, and privilege escalation attempts.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Awareness",
    children:
      "Provides security awareness training to employees through phishing simulations, educates them on best practices for preventing cyber threats, and ensures they follow company policies.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Governance, Risk, and Compliance",
    children:
      "Creates, modifies, and updates security processes to safeguard systems, mitigate risks, and ensure regulatory compliance."
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-8 pt-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Securing the Digital World
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a security professional; I'm a digital guardian. Identifying vulnerabilities, fortifying defenses, and staying ahead of cyber threats isn’t just a job it’s my mission. <br /> Explore below to see how I protect, defend, and secure the digital landscape.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
