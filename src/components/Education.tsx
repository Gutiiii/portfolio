"use client";
import { Badge } from "@/components/ui/Badge";
import { Button, Timeline } from "flowbite-react";
import { motion } from "framer-motion";
import { FC } from "react";
const Education: FC = () => {
  const imsSkills: string[] = [
    "Java",
    "PHP",
    "C#",
    "HTML&CSS",
    "SQL",
    "Projectmanagement",
  ];
  const mdSkills: string[] = [
    "VoIP",
    "Azure",
    "3CX",
    "Server",
    "Office",
    "Client/Server",
  ];
  const freelanceSkills: string[] = [
    "ReactJS",
    "NodeJS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Python",
  ];
  return (
    <div className="md:mr-20 md:px-10 mx-10 text-left">
      <motion.h1
        initial={{ x: 1700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-4 text-white text-lg font-bold uppercase mb-8"
      >
        Education
      </motion.h1>
      <div className="grid 2xl:grid-cols-2 grid-cols-1">
        <div className="space-y-4">
          <span className="text-xl text-gray-200">School</span>
          <div>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content className="">
                  <Timeline.Time>july 2019 - juyl 2023</Timeline.Time>
                  <Timeline.Title className="text-gray">
                    Informatikmittelschule
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>IT & Business School</p>
                  </Timeline.Body>
                  <div className="flex flex-wrap ">
                    {imsSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="rounded-full bg-[#41EAC6] border-bg-[#41EAC6] opacity-50 h-6 mb-2 mr-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>july 2016 - july 2019</Timeline.Time>
                  <Timeline.Title className="text-gray">
                    Bäumlihof
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>Secondary School</p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>july 2014 - july 2016</Timeline.Time>
                  <Timeline.Title className="text-gray">
                    Burgschulhaus
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>Primary School</p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>july 2010 - july 2014</Timeline.Time>
                  <Timeline.Title className="text-gray">
                    Wasserstelzenschulhaus
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>Primary School</p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-xl text-gray-200">Work</span>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>august 2022 - today</Timeline.Time>
                <Timeline.Title className="text-gray">
                  MDigital AG
                </Timeline.Title>
                <Timeline.Body>
                  <p>IT-Service Provider for Customers in switzerland</p>
                </Timeline.Body>
                <div className="flex flex-wrap">
                  {mdSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded-full bg-[#41EAC6] border-bg-[#41EAC6] opacity-50 h-6 mb-2 mr-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>march 2022 - today</Timeline.Time>
                <Timeline.Title className="text-gray">
                  Freelance Software Engineer
                </Timeline.Title>
                <Timeline.Body>
                  <p>
                    Building and deploying Projects for clients around the
                    world.
                  </p>
                </Timeline.Body>
                <div className="flex flex-wrap">
                  {freelanceSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded-full bg-[#41EAC6] border-bg-[#41EAC6] opacity-50 h-6 mb-2 mr-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
