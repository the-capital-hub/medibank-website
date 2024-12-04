import Image from "next/image";
import { motion } from "framer-motion";

export default function ChemistryAtWorkSection() {
	// Animation Variants
	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
	};

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
	};

	return (
		<motion.div
			className="bg-blue-50 sm:py-16"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			exit="exit"
			viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of the section is in view
		>
			<motion.div className="bg-[#EEEAFF] rounded-[30px] md:w-4/5 m-auto container flex flex-col md:flex-row py-8 sm:py-16 justify-center items-center">
				{/* Text Section */}
				<motion.div
					className="text-black md:w-1/2 w-full text-justify pb-8 sm:pb-0"
					variants={textVariants}
				>
					<h1 className="text-3xl font-bold my-4">
						Why <span className="text-[#6D4AFF]">Medibank ?</span>
					</h1>
					<p className="text-gray-700 mb-6">
						In India, the patient-doctor relationship faces a significant
						challenge. Patients are burdened with the task of maintaining and
						presenting their extensive paper-based medical records. The loss or
						misplacement of these records often leads to a fragmented
						understanding of a patient&apos;s medical history. This not only puts a
						strain on doctors but also compromises the quality of care,
						resulting in potential health risks. Introducing MediBank,{" "}
						<span className="text-[#6D4AFF]">
							India&apos;s first cloud based Electronic Health Records (EHR) platform
						</span>{" "}
						with centralised digital health records accessible by both patients
						and doctors. MediBank offers a comprehensive, secure, and
						user-friendly Electronic Health Record (EHR) platform which
						eliminates the hassle of paper prescriptions and the risk of lost
						information. By centralizing & digitising health records and
						utilising the inbuilt AI-driven health charts, we aim to streamline
						healthcare coordination and enable early detection of potential
						health issues, thereby advancing preventive care in India.
					</p>
					<motion.button
						className="bg-[#6D4AFF] from-orange-600 to-yellow-400 text-white px-6 py-2 rounded-full"
						variants={buttonVariants}
					>
						Know More
					</motion.button>
				</motion.div>

				{/* Image Section */}
				<motion.div
					className="md:w-1/2 w-full md:px-10 m-auto"
					variants={imageVariants}
				>
					<div className="relative">
						<Image
							src="/images/Groupabout.png" // Replace with your image path
							className="rounded-lg"
							alt="About Medilog section"
							width={640}
							height={480}
						/>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
