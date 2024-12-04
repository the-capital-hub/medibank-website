import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
export default function page() {
	const founderData = [
		{
			Name: "Adi Vangveti",
			Designation: "CEO & Founder",
			Details:
				"Adi is an Australian expat of Indian origin, with nearly two decades of expertise in Business Development, Risk Management, and operations mainly with Australia’s most prominent banking and financial services organisations. He is renowned for his ability to establish and scale profitable business operations, forging strategic partnerships and streamlining business processes. Now, as the founder and CEO of Medibank, Adi’s goal is to drive innovation in India’s healthcare ecosystem by spearheading the development of the nation’s first patient-centric Electronic Health Record (EHR) platform.",
			imgurl: "/images/founders/Adi.png",
		},
		{
			Name: "Yogendra Shukla",
			Designation: "CTO & Co-Founder",
			Details:
				"Yogi is a Technology Evangelist with 28 years of progressive leadership experience across Technology, People, Sales & Business Management in diverse global roles of multinational organisations. As the CTO of Medibank, He is driving technological innovation & its execution in healthcare with India’s first patient-centric electronic health record platform.",
			imgurl: "/images/founders/Yogi.png",
		},
	];
	const AdvisryData = [
		{
			Name: "Dr Navin Bhambhani",
			Details:
				"Dr Navin is a Surgical Oncologist Consultant with more than 2 decades of experience and has special interest in Thoracic & GI Oncology. His focus is on developing the role of Minimal Access Surgery (MAS) including the role of Robotic Surgery in Oncology.",
			imgurl: "/images/doctors/Dr-Navin-B.png",
			Designation: "M.S., D.N.B., M.R.C.S. (Oncology)",
		},
		{
			Name: "Dr Ajay Dave",
			Details:
				"Dr Dave is an Ophthalmologist & Eye Surgeon based in New Delhi and has over 35 years of experience in the field of Ophthalmology. His areas of interest include Corneal Transplant, Cataract Surgeries, and Laser Refractive Surgeries.",
			imgurl: "/images/doctors/Dr-Ajay-D.png",
			Designation: "MBBS, MS – Ophthalmology",
		},
		{
			Name: "Dr Anjali Nagpal",
			Details:
				"Dr Anjali is a Senior Psychiatrist Consultant with over 25 years of experience. Neurobio feedback and diagnosing psychiatric illness using brain mapping is her field of interest. She has been featured as Global Top 50 Mental Health Leader of 2019 and 2020 by ET Now and World Mental Health Congress.",
			imgurl: "/images/doctors/Dr-Anjali-N.png",
			Designation: "MBBS, MD (Psychiatry)",
		},
		{
			Name: "Dr Kartikeya Kohli",
			Details:
				"Dr Kartikeya is a dedicated and highly skilled medical professional with 18 years of experience in Internal Medicine, Immuno-rheumatology and an advanced training in Nephrology. He has presented his research at various national conferences and is also a published author.",
			imgurl: "/images/doctors/Dr-Kartikeya-K.png",
			Designation: "MBBS, DNB - Gen Med, MRCP (UK)",
		},
		{
			Name: "Dr Anupam Bhargava",
			Details:
				"Dr Anupam is a Dentist, Endodontist and Implantologist. He has been in clinical practice since 1996 and has interest in the fields of Endodontics, restorative dentistry, and dental implants.",
			imgurl: "/images/doctors/Dr-Anupam-B.png",
			Designation: "BDS, MDS - Operative Dentistry",
		},
		{
			Name: "Dr Urmi Sanyal",
			Details:
				"Dr Urmi is a Senior Resident at Institute of Psychiatry (IOP), Kolkata. She manages the whole spectrum of mental health problems like Anxiety, PTSD, Depression, Bipolar disorder, Schizophrenia, Autistic Spectrum, Dementia, as well as drug abuse to name a few. She has special interest in Child Psychiatry.",
			imgurl: "/images/doctors/Dr-Urmi-S.png",
			Designation: "MBBS, MD (Psychiatry)",
		},
		{
			Name: "Dr Anurag Agarwal",
			Details:
				"Dr Anurag Agarwal is an ophthalmologist/eye surgeon from Mumbai with over 25 years of experience. His expertise involves canaloplasty, refractive surgery, corneal surgery, cataract surgery, Lasik eye surgery, and general eye surgery.",
			imgurl: "/images/doctors/Dr-Anurag-A.png",
			Designation: "MBBS, MS – Ophthalmology",
		},
		{
			Name: "Dr Khushi Bhambhani",
			Details:
				"With over a decade of experience in healthcare management, Dr Khushi is the Chief Operating Officer at Halani Healthcare in Mumbai. She is also a Consultant Anaesthesiologist and Pain Physician.",
			imgurl: "/images/doctors/Dr-Khushi-B.png",
			Designation: "MBBS, DNB – Anaesthesiology",
		},
	];
	return (
		<div className="mt-[50px]">
			<div
				id="about1"
				className=" my-16 h-screen z-[-1] sticky md:top-[0px] top-[0]"
			>
				<div className="container text-[28px] font-bold pt-16">Our Story</div>
				<div className="container text-justify py-8">
					India has witnessed remarkable digital advancements across various
					sectors, yet health records remain largely confined to pen, paper &
					folders, making them difficult to maintain and track. <br /> <br />
					To bridge this gap and align with the nation&apos;s digitisation trend,
					Medibank was created as India&apos;s first patient-centric Electronic
					Health Record platform. By digitising healthcare records and utilising
					AI to generate health analysis charts of those records, Medibank aims
					to simplify access, streamline communication, and improve the overall
					experience for both patients and doctors, ensuring a more efficient
					and modern approach to healthcare management. <br /> <br />
					We are working towards a healthcare system in India, where citizens
					have the option to visit any healthcare provider or institution in any
					part of the country without the need of carrying physical medical
					records. <br />
				</div>
			</div>

			<div className="bg-white my-16 h-screen z-[-1] sticky md:top-[0px] top-[0]">
				<h2 className="container text-[28px] font-bold pt-24">Founding Team</h2>
				<div className="founding-team py-16 mx-16 rounded-[30px] bg-[#F6F5FF]">
					<div className="flex justify-around items-center flex-col md:flex-row w-full flex-wrap">
						{founderData.map((item, index) => (
							<div
								key={index}
								className="group w-full md:w-1/5 md:mx-1 mb-2 md:my-4 bg-white rounded-[10px]"
							>
								<div className="relative h-56 sog_animation group-hover:rotate-y-180">
									<div className="absolute top-0 bottom-0 w-full h-full backface_hidden rounded-[10px]">
										{" "}
										<Image
											src={item.imgurl}
											className="rounded-[10px]"
											width="200"
											height="200"
											alt="profile-picture"
										/>
									</div>
									<div className="absolute rounded-[10px] top-0 bottom-0 w-full h-full backface_hidden rotate-y-180 bg-gradient-to-r from-purple-200 via-purple-100 to-blue-200 border text-black">
										{" "}
										{/* Back card */}
										<p className="p-4 text-[13px] leading-[16px]">
											{item.Details}
										</p>
									</div>
								</div>
								<div className="text-left font-bold pt-2">{item.Name}</div>
								<div className="text-left text-[12px]">{item.Designation}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-white h-screen z-[-1] sticky md:top-[0px] top-[0]">
				<div className="w-4/5 container py-16">
					<div className="text-center my-8 lg:my-6 text-[38px] font-bold text-black">
						Advisory Panel
					</div>
					<div className="flex justify-around items-center flex-col md:flex-row w-full flex-wrap h-max">
						{AdvisryData.map((item, index) => {
							return (
								<div
									key={index}
									className="group w-full md:w-1/5 md:mx-1 mb-2 md:my-4 bg-white rounded-[10px]"
								>
									<div className="relative h-44 sog_animation group-hover:rotate-y-180">
										<div className="absolute top-0 bottom-0 w-full h-full backface_hidden rounded-[10px]">
											{" "}
											<Image
												src={item.imgurl}
												className="rounded-[10px]"
												width="160"
												height="160"
												alt="profile-picture"
											/>
										</div>
										<div className=" absolute rounded-[10px] top-0 bottom-0 w-full h-full backface_hidden rotate-y-180 bg-gradient-to-r from-purple-200 via-purple-100 to-blue-200 border text-black">
											{" "}
											{/*backcard */}
											<p className="p-4 text-[13px] leading-[16px]">
												{item.Details}
											</p>
										</div>
									</div>
									<div className="text-left font-bold pt-2 lg:pt-0">{item.Name}</div>
									<div className="text-left text-[12px]">
										{item.Designation}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div id="about3" className="bg-white">
				<div className="text-center  text-[48px] font-bold">Careers</div>

				<div className="w-4/5 container py-10 mt-6 bg-red-50">
					<div className="text-center">
						If you&apos;re passionate about joining our team and believe
						you&apos;d be a great fit, we&apos;d love to hear from you! Please
						send your resume to{" "}
						<a href="mailto:careers@medibank.in" className="text-blue-600">
							careers@medibank.in
						</a>
						, and let&apos;s explore the exciting opportunities together.
					</div>
				</div>
			</div>

			<div id="about4" className="bg-white">
				<div className=" rounded-[10px] sticky top-[100px]  m-auto w-full">
					<div className=" flex flex-col-reverse flex-nowrap md:flex-row justify-center items-center ">
						<div className="w-full m-auto text-center  [&_p]:text-black md:text-left">
							<ContactUs />
						</div>
					</div>

					<div className="w-full md:w-1/2 sm:mb-[100px]  m-auto bg-inherit">
						<iframe
							className="w-full rounded-xl relative z-10"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0676962975026!2d78.3737762749364!3d17.456473683442557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93da776e3347%3A0xd43f52aa73cb4014!2sBizness%20Square!5e0!3m2!1sen!2sin!4v1732107222387!5m2!1sen!2sin"
							width="auto"
							height="450"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
