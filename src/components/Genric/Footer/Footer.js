import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[#160073] relative">
			{/* Wave Pattern Rectangle with Radial Lines */}
			<div
				style={{ borderRadius: "0px 40px 0px 0px" }}
				className="hidden sm:block absolute bottom-0 left-0 w-full sm:w-[45%] h-[calc(100%+60px)] bg-[#5C4AFF] z-0"
			>
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "100%",
						backgroundImage: "url('/images/footerframe.png')",
						backgroundSize: "1000px 1000px",
						backgroundPosition: "-200px -400px",
					}}
				>
					<div
						style={{
							textAlign: "center",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: "white",
						}}
						className="flex flex-col items-center px-4"
					>
						<Image
							src="/images/MLicon.png"
							alt="logo"
							className="text-center"
							width="170"
							height="170"
							loading="lazy"
						/>

						<div className="flex space-x-4 mt-4">
							<Link href="https://www.facebook.com">
								<Image
									src="/images/Facebook.png"
									alt="Facebook Logo"
									className="text-center"
									width="30"
									height="30"
									loading="lazy"
								/>
							</Link>
							<Link href="https://www.youtube.com">
								<Image
									src="/images/Youtube.png"
									alt="YouTube Logo"
									className="text-center"
									width="30"
									height="30"
									loading="lazy"
								/>
							</Link>
							<Link href="https://linkedin.com/">
								<Image
									src="/images/LinkedIn.png"
									alt="LinkedIn Logo"
									className="text-center"
									width="30"
									height="30"
									loading="lazy"
								/>
							</Link>
							<Link href="https://instagram.com/">
								<Image
									src="/images/insta.png"
									alt="Insta Logo"
									className="text-center"
									width="30"
									height="30"
									loading="lazy"
								/>
							</Link>
							<Link href="https://x.com/">
								<Image
									src="/images/x.png"
									alt="X Logo"
									className="text-center"
									width="30"
									height="30"
									loading="lazy"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Content */}
			<div className="container mx-auto px-4 py-12 relative z-10">
				<div className="flex flex-col md:flex-row w-full justify-between space-y-8 md:space-y-0">
					{/* Logo Section */}
					<div className="w-full md:w-1/2">
						{/* Placeholder for logo or additional content */}
						<div
							// style={{
							// 	textAlign: "center",
							// 	position: "absolute",
							// 	top: "50%",
							// 	left: "50%",
							// 	transform: "translate(-50%, -50%)",
							// 	color: "white",
							// }}
							className="sm:hidden flex items-center justify-between"
						>
							<Image
								src="/images/MLicon.png"
								alt="logo"
								className="text-center"
								loading="lazy"
								width="60"
								height="60"
							/>

							{/* <div className="flex space-x-4 mt-4">
								<Link href="https://www.facebook.com">
									<Image
										src="/images/Facebook.png"
										alt="Facebook Logo"
										className="text-center"
										width="30"
										height="30"
										loading="lazy"
									/>
								</Link>
								<Link href="https://www.youtube.com">
									<Image
										src="/images/Youtube.png"
										alt="YouTube Logo"
										className="text-center"
										width="30"
										height="30"
										loading="lazy"
									/>
								</Link>
								<Link href="https://linkedin.com/">
									<Image
										src="/images/LinkedIn.png"
										alt="LinkedIn Logo"
										className="text-center"
										width="30"
										height="30"
										loading="lazy"
									/>
								</Link>
							</div> */}
						</div>
					</div>

					{/* Information Section */}
					<div className="w-full md:w-1/4">
						<h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
						<ul className="p-0 m-0 list-none flex flex-col md:flex-col ">
							<li className="m-0 p-0">
								<Link
									href="/health-guides"
									className="text-white hover:text-[#5C4AFF]"
								>
									Health Guides
								</Link>
							</li>
							<li className="m-0 p-0">
								<Link
									href="/privacy-policy"
									className="text-white hover:text-[#5C4AFF]"
								>
									Privacy Policy
								</Link>
							</li>
							<li className="m-0 p-0">
								<Link
									href="/about#about4"
									className="text-white hover:text-[#5C4AFF]"
								>
									Contact Us
								</Link>
							</li>
							<li className="m-0 p-0">
								<Link href="/about" className="text-white hover:text-[#5C4AFF]">
									About Us
								</Link>
							</li>
							<li className="m-0 p-0">
								<Link href="/blog" className="text-white hover:text-[#5C4AFF]">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div className="w-full md:w-1/4">
						<h4 className="text-lg font-bold text-white mb-4">Contact</h4>
						<ul className="space-y-2 p-0 m-0 list-none">
							<li className="text-white">
								<span className="font-semibold">Address:</span> 4th Floor,
								Bizness Square, 16, Hitech City Rd, Laxmi Cyber City,
								Whitefields, HITEC City, Hyderabad, Telangana 500081
							</li>
							<li className="text-white">
								<span className="font-semibold">Email:</span>{" "}
								<a
									href="mailto:contact@medibank.in"
									className="hover:text-[#5C4AFF]"
								>
									contact@medibank.in
								</a>
							</li>
							<li className="text-white">
								<span className="font-normal">
									Charak healthTech Pvt Ltd t/a medibank
								</span>
							</li>
							<li className="sm:hidden text-white">
								<div className="flex space-x-4 mt-4">
									<Link href="https://www.facebook.com">
										<Image
											src="/images/Facebook.png"
											alt="Facebook Logo"
											className="text-center"
											width="30"
											height="30"
											loading="lazy"
										/>
									</Link>
									<Link href="https://www.youtube.com">
										<Image
											src="/images/Youtube.png"
											alt="YouTube Logo"
											className="text-center"
											width="30"
											height="30"
											loading="lazy"
										/>
									</Link>
									<Link href="https://linkedin.com/">
										<Image
											src="/images/LinkedIn.png"
											alt="LinkedIn Logo"
											className="text-center"
											width="30"
											height="30"
											loading="lazy"
										/>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
