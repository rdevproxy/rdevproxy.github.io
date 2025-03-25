"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section id="letsconnect" className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Let's Connect
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          
          Whether you have a question, want to collaborate, or just want to get in touch, I’d love to hear from you!
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill out the form and feel free to drop me a message.
              </Typography>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                <form
                  action="https://formsubmit.co/renzgomezportfolio@gmail.com"
                  method="POST"
                >
                  <div className="mb-8 grid gap-4 lg:grid-cols-2">
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="first-name"
                      placeholder="eg. Lucas"
                      containerProps={{
                        className: "!min-w-full mb-3 md:mb-0",
                      }}
                      required
                    />
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="last-name"
                      placeholder="eg. Jones"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      required
                    />
                  </div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="email"
                    placeholder="eg. lucas@mail.com"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                    required
                  />
                  <Typography
                    variant="lead"
                    className="!text-blue-gray-500 text-sm mb-2"
                  >
                    What are you interested on?
                  </Typography>
                  <div className="-ml-3 mb-14 ">
                    <Radio
                      color="gray"
                      name="type"
                      label="Cybersecurity"
                      value="Cybersecurity"
                      defaultChecked
                    />
                    <Radio
                      color="gray"
                      name="type"
                      label="Support"
                      value="Support"
                    />
                    <Radio
                      color="gray"
                      name="type"
                      label="Penetration Testing"
                      value="Penetration Testing"
                    />
                    <Radio
                      color="gray"
                      name="type"
                      label="Other"
                      value="Other"
                    />
                  </div>
                  <Textarea
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Message"
                    name="message"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                    required
                  />
                  {/* Add a hidden input to redirect to a thank-you page after submission */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/thank-you"
                  />
                  {/* Add a hidden input to prevent spam */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Add a hidden input to generate a unique token for CSRF protection */}
                  <input
                    type="hidden"
                    name="_csrf"
                    value={crypto.randomUUID()}
                  />
                  {/* Add a honeypot field to trap bots */}
                  <div style={{ display: "none" }}>
                    <label>
                      Do not fill this out:
                      <input type="text" name="_honey" />
                    </label>
                  </div>
                  <div className="w-full flex justify-end">
                    <Button type="submit" className="w-full md:w-fit" color="gray" size="md">
                      Send message
                    </Button>
                  </div>
                </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
